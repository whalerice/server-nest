import { BadRequestException, Injectable, Req } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '725e6c77-6b27-46a6-8eff-9034dfe8f3d1',
      companyId: 0,
      type: 'SUPER',
      loginId: 'admin@quantum-ai.ai',
      name: '퀀텀 슈퍼관리자',
      company: {
        id: 0,
      },
      currentCapacity: 0,
    },
    {
      id: 'ec675cba-fe3c-42a4-8b49-ef180590c378',
      companyId: 28,
      type: 'ADMIN',
      loginId: 'qtadmin@quantum-ai.ai',
      name: '퀀텀ai관리자',
      tel: '010-1234-5678',
      company: {
        id: 28,
        registrationNumber: '760-87-02100',
        registrationNumberSub: '0000',
        companyName: '퀀텀에이아이',
        homepageUrl: 'https://quantum-ai.ai/index',
        address: '서울특별시 강남구 논현로 727',
        addressDetail: '신명빌딩 6층 퀀텀에이아이',
        companyTel: '02-6408-0915',
        adminId: 'ec675cba-fe3c-42a4-8b49-ef180590c378',
        contractStartDate: '2024-03-01',
        contractEndDate: '2024-03-08',
        isActive: true,
        creator: '725e6c77-6b27-46a6-8eff-9034dfe8f3d1',
        createdAt: '2024-03-08T06:41:41.472747Z',
      },
      currentCapacity: 0,
    },
    {
      id: '986c0e56-29f9-4bb2-860e-c6d3ad4067b9',
      companyId: 28,
      type: 'AGENT',
      loginId: 'qtagent1@quantum-ai.ai',
      name: '퀀텀상담사11',
      email: '',
      tel: '',
      address: '',
      team: {
        id: 25,
        name: '퀀텀 1팀',
        outerUrl: false,
      },
      company: {
        id: 28,
        registrationNumber: '760-87-02100',
        registrationNumberSub: '0000',
        companyName: '퀀텀에이아이',
        homepageUrl: 'https://quantum-ai.ai/index',
        address: '서울특별시 강남구 논현로 727',
        addressDetail: '신명빌딩 6층 퀀텀에이아이',
        companyTel: '02-6408-0915',
        adminId: 'ec675cba-fe3c-42a4-8b49-ef180590c378',
        contractStartDate: '2024-03-01',
        contractEndDate: '2024-03-08',
        isActive: true,
        creator: '725e6c77-6b27-46a6-8eff-9034dfe8f3d1',
        createdAt: '2024-03-08T06:41:41.472747Z',
      },
      status: 'OFFLINE',
      level: 1,
      currentCapacity: 0,
      maxCapacity: 5,
      greeting: '',
      isLeader: false,
      rank: {
        id: 15,
        label: '일반 상담사',
      },
    },
  ];

  getAll(): User[] {
    return this.users;
  }

  async findOne(@Req() req): Promise<any> {
    const user = this.users.filter((e) => e.loginId === req.loginId);

    if (user.length === 0) {
      throw new BadRequestException('유저가 없어요.', {
        cause: new Error(),
        description: 'Something bad happened',
      });
    }

    return user[0];
  }
}
