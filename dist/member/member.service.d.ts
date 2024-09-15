import { Repository } from 'typeorm';
import { Member } from './member.entity';
export declare class MemberService {
    private memberRepository;
    constructor(memberRepository: Repository<Member>);
    findAll(): Promise<Member[]>;
    findMemberByCode(code: string): Promise<Member>;
}
