package seb27.server.login;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import seb27.server.member.dto.MemberDto;
import seb27.server.member.entity.Member;
import seb27.server.member.mapper.MemberMapper;
import seb27.server.member.repository.MemberRepository;
import seb27.server.member.service.MemberService;

import java.util.Optional;

@CrossOrigin
@Controller
public class LoginController {
    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;

    public LoginController(MemberService memberService, MemberRepository memberRepository, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberRepository = memberRepository;
        this.memberMapper = memberMapper;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody MemberDto.Post postDto) {
        // DB랑 비교
        Member member = memberMapper.memberPostToMember(postDto);
        // 아아디 체크
        Optional<Member> optionalMember = memberRepository.findByUsername(member.getUsername());
        Member findMember = optionalMember.orElse(null);
        // 비밀번호 체크
        if(findMember==null){
            return new ResponseEntity<>("아이디가 일치하지 않습니다.", HttpStatus.BAD_REQUEST);
        } else if (member.getPassword().equals(findMember.getPassword())) {
            return new ResponseEntity<>(findMember, HttpStatus.OK);
        }
        return new ResponseEntity<>("잘못된 정보가 입력되었습니다.", HttpStatus.BAD_REQUEST);
    }
}
