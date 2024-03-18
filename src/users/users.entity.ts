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

export class Company {
  id: number;
  registrationNumber: string;
  registrationNumberSub: string;
  documentFile?: string;
  companyName: string;
  homepageUrl: string;
  address: string;
  addressDetail: string;
  companyTel: string;
  adminId: string;
  contractStartDate?: string;
  contractEndDate?: string;
  isActive: boolean;
  creator: string;
  createdAt: string;
  updater?: string;
  updatedAt?: string;
  serviceType: string;
  serviceTypeName: string;
  user: {
    loginId: string;
    name: string;
    tel: string;
  };
}
export class Team {
  createdAt: string;
  id: number;
  name: string;
  description: string;
  agentCount: number;
  bot: {
    id: string;
  };
  teamMaxCapacity: number;
  outerUrl: boolean;
}
