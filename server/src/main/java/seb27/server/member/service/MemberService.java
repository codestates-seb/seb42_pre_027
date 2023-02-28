package seb27.server.member.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import seb27.server.member.entity.Member;
import seb27.server.member.repository.MemberRepository;

import java.util.List;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Member createMember(Member member) {
        // 비밀번호 암호화
//        String encryptedPassword = passwordEncoder.encode(member.getPassword());
//        member.setPassword(encryptedPassword);

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
