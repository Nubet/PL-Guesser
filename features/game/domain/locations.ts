import type { CampusLocation } from "@/features/game/domain/types";

export const CAMPUS_A_LOCATIONS: CampusLocation[] = [
  {
    id: "b22-main-entry",
    name: "Budynek B22 - wejście główne",
    coordinates: { lat: 51.74734, lng: 19.45542 },
    streetView: {
      coordinates: { lat: 51.74716, lng: 19.4562 },
      heading: 235,
      pitch: 0,
      fov: 85,
    },
  },
  {
    id: "library-square",
    name: "Plac przy Bibliotece PŁ",
    coordinates: { lat: 51.74669, lng: 19.45412 },
    streetView: {
      coordinates: { lat: 51.74685, lng: 19.45293 },
      heading: 78,
      pitch: 0,
      fov: 85,
    },
  },
  {
    id: "alchemium-front",
    name: "Alchemium - fasada frontowa",
    coordinates: { lat: 51.74587, lng: 19.4529 },
    streetView: {
      coordinates: { lat: 51.7456, lng: 19.4524 },
      heading: 110,
      pitch: 0,
      fov: 90,
    },
  },
  {
    id: "architecture-courtyard",
    name: "Dziedziniec Wydziału Budownictwa",
    coordinates: { lat: 51.74641, lng: 19.45627 },
    streetView: {
      coordinates: { lat: 51.74602, lng: 19.45702 },
      heading: 340,
      pitch: 0,
      fov: 90,
    },
  },
  {
    id: "campus-avenue",
    name: "Aleja główna Kampusu A",
    coordinates: { lat: 51.74605, lng: 19.45497 },
    streetView: {
      coordinates: { lat: 51.74608, lng: 19.45552 },
      heading: 250,
      pitch: 0,
      fov: 85,
    },
  },
  {
    id: "sports-hall-entry",
    name: "Hala sportowa - wejście",
    coordinates: { lat: 51.74799, lng: 19.45737 },
    streetView: {
      coordinates: { lat: 51.74815, lng: 19.45848 },
      heading: 206,
      pitch: 0,
      fov: 90,
    },
  },
  {
    id: "w3-korytarz",
    name: "W3 - okolice korytarza głównego",
    coordinates: { lat: 51.74542, lng: 19.45596 },
    streetView: {
      coordinates: { lat: 51.74488, lng: 19.45631 },
      heading: 18,
      pitch: 0,
      fov: 90,
    },
  },
  {
    id: "w1-side-entry",
    name: "W1 - boczne wejście",
    coordinates: { lat: 51.74495, lng: 19.45377 },
    streetView: {
      coordinates: { lat: 51.74458, lng: 19.45272 },
      heading: 58,
      pitch: 0,
      fov: 90,
    },
  },
];
