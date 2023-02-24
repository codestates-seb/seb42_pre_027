package seb27.server.member.service;

import org.springframework.stereotype.Service;
import seb27.server.member.entity.Member;
import seb27.server.member.repository.MemberRepository;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public Member createMember(Member member) {
        return memberRepository.save(member);
    }
}
