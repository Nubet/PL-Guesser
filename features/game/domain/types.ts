export type Coordinates = {
  lat: number;
  lng: number;
};

export type CampusLocation = {
  id: string;
  name: string;
  coordinates: Coordinates;
  streetView: {
    coordinates?: Coordinates;
    heading: number;
    pitch: number;
    fov: number;
  };
};

export type RoundResult = {
  roundNumber: number;
  locationId: string;
  locationName: string;
  actual: Coordinates;
  guess: Coordinates;
  distanceMeters: number;
  points: number;
};

export type GamePhase = "guess" | "summary" | "finished";

export type GameSession = {
  phase: GamePhase;
  roundsTotal: number;
  currentRoundIndex: number;
  rounds: CampusLocation[];
  totalPoints: number;
  currentRoundResult: RoundResult | null;
  history: RoundResult[];
};
