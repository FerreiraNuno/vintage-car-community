export interface ParkingSpace {
  id: number;
  name: string;
  car: string;
  date: string;
  proposedTime: string;
  status: number;
}

export enum ParkingSpaceStatusEnum {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
}
