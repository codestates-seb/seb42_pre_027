package seb27.server.member.service;

import org.springframework.stereotype.Service;
import seb27.server.member.entity.Member;
import seb27.server.member.repository.MemberRepository;

import java.util.List;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }
    public Member createMember(Member member) {

        return memberRepository.save(member);
    }

    public Member findMember(long memberId){
        return memberRepository.findById(memberId).orElse(null);
    }
    public List<Member> findMembers(){
        return memberRepository.findAll();
    }
    public void deleteMember(long memberId){
        memberRepository.deleteById(memberId);
    }
}
