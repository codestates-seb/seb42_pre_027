package seb27.server.answer.service;

import org.springframework.stereotype.Service;
import seb27.server.answer.entity.Answer;
import seb27.server.answer.repository.AnswerRepository;
import seb27.server.member.entity.Member;
import seb27.server.member.repository.MemberRepository;
import seb27.server.question.Question;
import seb27.server.question.QuestionRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberRepository memberRepository;
    private final QuestionRepository questionRepository;

    public AnswerService(AnswerRepository answerRepository, MemberRepository memberRepository, QuestionRepository questionRepository) {
        this.answerRepository = answerRepository;
        this.memberRepository = memberRepository;
        this.questionRepository = questionRepository;
    }

    public Answer createAnswer(Answer answer, long userId, long questionId) {
        Member findMember = getMemberFromId(userId);
        Question findQuestion = getQuestionFromId(questionId);
        findQuestion.setAnswerCount(findQuestion.getAnswerCount()+1);
        answer.setMember(findMember);
        answer.setQuestion(findQuestion);
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
        Question question = findAnswer.getQuestion();
        question.setAnswerCount(question.getAnswerCount()-1);
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

    public Question getQuestionFromId(long questionId) {
        return questionRepository.findById(questionId).get();
    }

}
