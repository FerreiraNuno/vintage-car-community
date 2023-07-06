

export interface Appointments {
  id: number;
  name: string;
  car: Cars;
  date: string;
  bin: StorageBin;
  status: ParkingSpaceStatusEnum;
}

export enum ParkingSpaceStatusEnum {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
}

export interface Cars {
  id: number;
  name: string;
  make: string;
  year: string;
  readyForPickup: boolean;
  location?: string;
}

export interface StorageBin {
  id: number;
  name: string;
  location: {
    houseNumber: number;
    streetName: string;
    city: string;
    state: string;
    country: string;
  };
  serviceTime: { start: string; end: string };
}
