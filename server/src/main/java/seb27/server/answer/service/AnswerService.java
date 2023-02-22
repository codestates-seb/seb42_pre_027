package seb27.server.answer.service;

import org.springframework.stereotype.Service;
import seb27.server.answer.entity.Answer;
import seb27.server.answer.repository.AnswerRepository;
import seb27.server.member.entity.Member;
import seb27.server.member.repository.MemberRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberRepository memberRepository;

    public AnswerService(AnswerRepository answerRepository, MemberRepository memberRepository) {
        this.answerRepository = answerRepository;
        this.memberRepository = memberRepository;
    }

    public Answer createAnswer(Answer answer, long userId) {
        Member findMember = getMemberFromId(userId);
        answer.setMember(findMember);
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {

        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent()).ifPresent(content -> findAnswer.setContent(content));

        findAnswer.setModifiedAt(LocalDateTime.now());
        return answerRepository.save(findAnswer);
    }

    public void deleteAnswer(long answerId) {

        Answer findAnswer = findVerifiedAnswer(answerId);

        answerRepository.deleteById(answerId);

        //answerRepository.delete(findAnswer);
    }

    public Answer findVerifiedAnswer(long answerId) {
        return answerRepository.findById(answerId).orElse(null);
    }

    public List<Answer> findAnswers() {
        return answerRepository.findAll();
    }

    public Member getMemberFromId(long memberId) {
        return memberRepository.findById(memberId).get();
    }

}
