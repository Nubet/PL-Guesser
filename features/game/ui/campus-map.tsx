"use client";

import "leaflet/dist/leaflet.css";

import L, { type LatLngExpression } from "leaflet";
import { MapContainer, Marker, Polyline, TileLayer, useMapEvents } from "react-leaflet";

import type { Coordinates } from "@/features/game/domain/types";

const markerIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const mapCenter: LatLngExpression = [51.7462, 19.4549];
const campusBounds: [[number, number], [number, number]] = [
  [51.7305, 19.432],
  [51.7625, 19.4925],
];

type CampusMapProps = {
  guess: Coordinates | null;
  actual?: Coordinates;
  onGuessChange?: (guess: Coordinates) => void;
  showSummaryLine?: boolean;
};

function MapClickHandler({ onGuessChange }: { onGuessChange: (guess: Coordinates) => void }) {
  useMapEvents({
    click: (event) => {
      onGuessChange({ lat: event.latlng.lat, lng: event.latlng.lng });
    },
  });

  return null;
}

export function CampusMap({
  guess,
  actual,
  onGuessChange,
  showSummaryLine = false,
}: CampusMapProps) {
  return (
    <MapContainer
      center={mapCenter}
      zoom={13}
      minZoom={12}
      maxZoom={19}
      maxBounds={campusBounds}
      maxBoundsViscosity={0.45}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {onGuessChange ? <MapClickHandler onGuessChange={onGuessChange} /> : null}

      {guess ? <Marker position={guess} icon={markerIcon} /> : null}
      {actual ? <Marker position={actual} icon={markerIcon} /> : null}

      {showSummaryLine && guess && actual ? (
        <Polyline
          positions={[guess, actual]}
          pathOptions={{ color: "var(--color-accent)", weight: 4, dashArray: "8 8" }}
        />
      ) : null}
    </MapContainer>
  );
}
