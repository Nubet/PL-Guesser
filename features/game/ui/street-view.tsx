"use client";

import { useEffect, useRef } from "react";

import type { CampusLocation } from "@/features/game/domain/types";

type StreetViewProps = {
  location: CampusLocation;
};

type GoogleWindow = Window & {
  google?: {
    maps?: {
      StreetViewPanorama: new (element: HTMLElement, options: Record<string, unknown>) => unknown;
      StreetViewPreference: {
        NEAREST: unknown;
      };
      event: {
        clearInstanceListeners: (instance: unknown) => void;
      };
    };
  };
};

const streetViewSource = process.env.NEXT_PUBLIC_GOOGLE_STREET_VIEW_SOURCE ?? "default";
const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

function buildStreetViewFallbackUrl(location: CampusLocation): string {
  const { lat, lng } = location.streetView.coordinates ?? location.coordinates;
  const heading = location.streetView?.heading ?? 180;
  const pitch = location.streetView?.pitch ?? 0;
  const fov = location.streetView?.fov ?? 90;

  return `https://maps.google.com/maps?q=&layer=c&cbll=${lat},${lng}&cbp=12,${heading},0,${pitch},${fov}&output=svembed`;
}

function buildMapsScriptUrl() {
  const params = new URLSearchParams({
    key: googleMapsApiKey,
    v: "weekly",
  });

  return `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
}

export function StreetView({ location }: StreetViewProps) {
  const panoramaContainerRef = useRef<HTMLDivElement>(null);
  const panoramaInstanceRef = useRef<unknown>(null);
  const scriptReadyRef = useRef(
    typeof window !== "undefined" && Boolean((window as GoogleWindow).google?.maps),
  );
  const locationRef = useRef(location);

  const initializePanorama = () => {
    if (!scriptReadyRef.current || !panoramaContainerRef.current) {
      return;
    }

    const maps = (window as GoogleWindow).google?.maps;
    if (!maps?.StreetViewPanorama) {
      return;
    }

    const activeLocation = locationRef.current;
    const { lat, lng } = activeLocation.streetView.coordinates ?? activeLocation.coordinates;
    const heading = activeLocation.streetView?.heading ?? 180;
    const pitch = activeLocation.streetView?.pitch ?? 0;
    const fov = activeLocation.streetView?.fov ?? 90;

    if (panoramaInstanceRef.current && maps.event?.clearInstanceListeners) {
      maps.event.clearInstanceListeners(panoramaInstanceRef.current);
    }

    panoramaInstanceRef.current = new maps.StreetViewPanorama(panoramaContainerRef.current, {
      position: { lat, lng },
      pov: { heading, pitch },
      zoom: Math.max(0, Math.min(3, Math.round(120 / fov))),
      addressControl: false,
      showRoadLabels: false,
      linksControl: true,
      panControl: true,
      zoomControl: true,
      fullscreenControl: false,
      motionTracking: false,
      clickToGo: true,
      disableDefaultUI: false,
      preference: streetViewSource === "outdoor" ? maps.StreetViewPreference.NEAREST : undefined,
    });
  };

  useEffect(() => {
    if (!googleMapsApiKey) {
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-google-maps="true"]');

    const handleReady = () => {
      scriptReadyRef.current = true;
      initializePanorama();
    };

    if (existingScript) {
      if (!(window as GoogleWindow).google?.maps) {
        existingScript.addEventListener("load", handleReady);
      }

      return () => {
        existingScript.removeEventListener("load", handleReady);
      };
    }

    const script = document.createElement("script");
    script.src = buildMapsScriptUrl();
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "true";
    script.addEventListener("load", handleReady);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", handleReady);
    };
  }, []);

  useEffect(() => {
    locationRef.current = location;
    initializePanorama();

    const maps = (window as GoogleWindow).google?.maps;
    const panorama = panoramaInstanceRef.current;
    return () => {
      if (panorama && maps?.event?.clearInstanceListeners) {
        maps.event.clearInstanceListeners(panorama);
      }
    };
  }, [location]);

  if (!googleMapsApiKey) {
    return (
      <iframe
        title={`Street View - ${location.name}`}
        src={buildStreetViewFallbackUrl(location)}
        loading="lazy"
        allowFullScreen
        sandbox="allow-scripts allow-popups"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-screen w-full border-0"
      />
    );
  }

  return <div ref={panoramaContainerRef} className="h-screen w-full" aria-label={`Street View - ${location.name}`} />;
}
