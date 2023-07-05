export interface BookedService {
  id: number;
  name: string;
  dateListed: string;
  expiryDate: string;
  status: BookedServiceStatusEnum;
}

export enum BookedServiceStatusEnum {
  Pending = 0,
  Approved = 1,
  Rejected = 2,
}
