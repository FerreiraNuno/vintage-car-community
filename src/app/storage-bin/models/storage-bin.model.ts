export interface StorageBin {
  id: number;
  name: string;
  dimension: { width: number; height: number };
  location: {
    houseNumber: number;
    streetName: string;
    city: string;
    state: string;
    country: string;
  };
  serviceTime: { start: string; end: string };
}
