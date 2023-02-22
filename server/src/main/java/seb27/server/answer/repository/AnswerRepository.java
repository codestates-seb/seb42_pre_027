package seb27.server.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb27.server.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
