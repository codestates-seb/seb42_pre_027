package seb27.server.member.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb27.server.member.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByUsername(String username);
}
