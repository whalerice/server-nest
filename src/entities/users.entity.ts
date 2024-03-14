export class User {
  id: string;
  companyId: number;
  type: string;
  loginId: string;
  name: string;
  currentCapacity: number;
  company: {
    id: number;
    registrationNumber?: string;
    registrationNumberSub?: string;
    companyName?: string;
    homepageUrl?: string;
    address?: string;
    addressDetail?: string;
    companyTel?: string;
    adminId?: string;
    contractStartDate?: string;
    contractEndDate?: string;
    isActive?: true;
    creator?: string;
    createdAt?: string;
  };
  email?: string;
  tel?: string;
  address?: string;
  team?: {
    id?: number;
    name?: string;
    outerUrl?: boolean;
  };
  status?: string;
  level?: number;
  maxCapacity?: number;
  greeting?: string;
  isLeader?: boolean;
  rank?: {
    id?: number;
    label?: string;
  };
}
