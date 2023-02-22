package seb27.server.answer.service;

import org.springframework.stereotype.Service;
import seb27.server.answer.entity.Answer;
import seb27.server.answer.repository.AnswerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {

        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent()).ifPresent(content -> findAnswer.setContent(content));

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

}
