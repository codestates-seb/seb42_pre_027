package seb27.server.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb27.server.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
