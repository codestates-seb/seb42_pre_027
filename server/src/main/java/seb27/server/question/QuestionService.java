package seb27.server.question;

import org.springframework.stereotype.Service;
import seb27.server.member.entity.Member;
import seb27.server.member.repository.MemberRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberRepository memberRepository;

    public QuestionService(QuestionRepository questionRepository, MemberRepository memberRepository) {
        this.questionRepository = questionRepository;
        this.memberRepository = memberRepository;
    }


    public Question createQuestion(Question question, long userId){
        Member findMember = getMemberFromId(userId);
        question.setMember(findMember);
        question.setViewCount(0L);
        question.setAnswerCount(0L);
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

    public Question readQuestion(long id){
        Question question = findQuestion(id);
        question.setViewCount(question.getViewCount()+1);
        return questionRepository.save(question);
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

    public Member getMemberFromId(long memberId){
        return memberRepository.findById(memberId).get();
    }

}
