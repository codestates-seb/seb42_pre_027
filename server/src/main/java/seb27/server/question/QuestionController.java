package seb27.server.question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService, QuestionMapper questionMapper) {
        this.questionService = questionService;
        this.questionMapper = questionMapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post postDto){
        Question createdQuestion = questionService.createQuestion(questionMapper.questionPostDtoToQuestion(postDto));
        return new ResponseEntity<>(createdQuestion, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getQuestions(){
        List<Question> questions = questionService.findAllQuestion();
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") long questionId){
        Question question = questionService.findQuestion(questionId);
        return new ResponseEntity<>(question, HttpStatus.OK);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") long questionId,
                                        @RequestBody QuestionDto.Patch patchDto){
        Question question = questionMapper.questionPatchDtoToQuestion(patchDto);
        question.setId(questionId);
        Question result = questionService.updateQuestion(question);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") long questionId){
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 화면 출력용
    @GetMapping("/")
    public String hello(){
        return "test";
    }
}
