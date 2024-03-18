import { BadRequestException, Injectable, Req } from '@nestjs/common';
import { Company, Team, User } from './users.entity';

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
  private readonly company: Company[] = [
    {
      id: 67,
      registrationNumber: '123-12-12345',
      registrationNumberSub: '0000',
      documentFile: '',
      companyName: 'MOONSTAR',
      homepageUrl: 'https://moon.star',
      address: '우주시',
      addressDetail: '우주동 우주호',
      companyTel: '02-1234-5678',
      adminId: '2ae7a7b6-f5bb-4dc4-859b-1f1cb638a5e3',
      contractStartDate: '2024-03-13',
      contractEndDate: '2024-04-30',
      isActive: false,
      creator: '퀀텀 슈퍼관리자',
      createdAt: '2024-03-13T08:24:44.394477Z',
      updater: '퀀텀 슈퍼관리자',
      updatedAt: '2024-03-15T05:12:14.95972Z',
      serviceType: '2',
      serviceTypeName: 'Standard',
      user: {
        loginId: 'moon@star.com',
        name: '문스타관리자',
        tel: '010-1234-5678',
      },
    },
    {
      id: 30,
      registrationNumber: '553-12-99800',
      registrationNumberSub: '0000',
      companyName: '이마트',
      homepageUrl: 'https://store.emart.com/main/main.do',
      address: '서울특별시 중구 퇴계로 77',
      addressDetail: '신세계백화점 본점 신관 15층',
      companyTel: '02-318-8827',
      adminId: 'a52ea69d-dcd9-4ecb-a233-47732668651a',
      isActive: true,
      creator: '퀀텀 슈퍼관리자',
      createdAt: '2024-03-08T06:48:50.701825Z',
      updater: '퀀텀 슈퍼관리자',
      updatedAt: '2024-03-11T06:26:46.537781Z',
      serviceType: '1',
      serviceTypeName: 'Basic',
      user: {
        loginId: 'emartadmin@emart.com',
        name: '이마트관리자',
        tel: '010-2323-5678',
      },
    },
    {
      id: 29,
      registrationNumber: '313-23-06800',
      registrationNumberSub: '0000',
      companyName: 'NH농협은행',
      homepageUrl: 'https://www.nonghyup.com/main/psniMain.do',
      address: '서울특별시 중구 통일로 120',
      addressDetail: '농협중앙회 중앙본부 신관',
      companyTel: '1522-3000',
      adminId: '5441b94e-8829-405c-978e-c18b5f454e90',
      isActive: true,
      creator: '퀀텀 슈퍼관리자',
      createdAt: '2024-03-08T06:46:10.507979Z',
      serviceType: '1',
      serviceTypeName: 'Basic',
      user: {
        loginId: 'nhadmin@nh.com',
        name: '농협은행관리자',
        tel: '010-1234-5678',
      },
    },
    {
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
      creator: '퀀텀 슈퍼관리자',
      createdAt: '2024-03-08T06:41:41.472747Z',
      serviceType: '1',
      serviceTypeName: 'Basic',
      user: {
        loginId: 'qtadmin@quantum-ai.ai',
        name: '퀀텀ai관리자',
        tel: '010-1234-5678',
      },
    },
  ];

  private readonly team: Team[] = [
    {
      createdAt: '2024-03-08T06:59:39.155232Z',
      id: 27,
      name: '이마트 1팀',
      description: '이마트 1팀',
      agentCount: 1,
      bot: {
        id: 'c8a09dd3-9968-40c0-a811-3ddfefcecf60',
      },
      teamMaxCapacity: 5,
      outerUrl: false,
    },
    {
      createdAt: '2024-03-08T06:57:19.287454Z',
      id: 26,
      name: 'NH 1팀',
      description: 'NH 1팀',
      agentCount: 1,
      bot: {
        id: '9a294084-fc6d-443a-aeed-6d269e95b8f3',
      },
      teamMaxCapacity: 5,
      outerUrl: false,
    },
    {
      createdAt: '2024-03-08T06:55:58.557989Z',
      id: 25,
      name: '퀀텀 1팀',
      description: '퀀텀 1팀',
      agentCount: 1,
      bot: {
        id: '28a623f8-8a02-485a-8934-7357427ca014',
      },
      teamMaxCapacity: 5,
      outerUrl: false,
    },
  ];

  getAll(): User[] {
    return this.users;
  }

  async getCompany(@Req() req): Promise<any> {
    console.log(req);
    const data = { count: this.company.length, items: this.company };
    return data;
  }

  async getTeam(@Req() req): Promise<any> {
    console.log(req);
    const data = { count: this.company.length, items: this.team };
    return data;
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
