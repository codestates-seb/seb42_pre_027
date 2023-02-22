package seb27.server.member.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb27.server.member.dto.MemberDto;
import seb27.server.member.entity.Member;
import seb27.server.member.mapper.MemberMapper;
import seb27.server.member.service.MemberService;

@RestController
@RequestMapping("/users")
@Validated
public class MemberController {

    private final MemberMapper memberMapper;
    private final MemberService memberService;

    public MemberController(MemberMapper memberMapper, MemberService memberService) {
        this.memberMapper = memberMapper;
        this.memberService = memberService;
    }

    // 회원가입
    @PostMapping("/sign-in")
    public ResponseEntity postMember(@RequestBody MemberDto.Post postDto) {

        Member createdMember = memberService.createMember(memberMapper.memberPostToMember(postDto));

        return new ResponseEntity<>(createdMember, HttpStatus.CREATED);
    }
}
