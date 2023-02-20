package seb27.server.question;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }


    public Question createQuestion(Question question){
        return questionRepository.save(question);
    }

    public Question updateQuestion(Question question){
        Question findQuestion = findQuestion(question.getId());
        // title, content, tag 수정
        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));
        Optional.ofNullable(question.getTag()).ifPresent(tag -> findQuestion.setTag(tag));

        findQuestion.setModifiedAt(LocalDateTime.now());
        return questionRepository.save(findQuestion);
    }

    public void deleteQuestion(long id){
        questionRepository.deleteById(id);
    }

    public Question findQuestion(long id){
        return questionRepository.findById(id).orElse(null);
    }

    public List<Question> findAllQuestion(){
        return questionRepository.findAll();
    }

}
