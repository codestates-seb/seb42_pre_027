package seb27.server.member.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Service;
import seb27.server.member.dto.MemberDto;
import seb27.server.member.entity.Member;

@Service
@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post postDto);
    Member memberPatchToMember(MemberDto.Patch patchDto);
    MemberDto.Response memberToMemberResponse(Member member);
}
