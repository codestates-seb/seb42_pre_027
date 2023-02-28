package seb27.server.question;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final CustomQuestionMapper customQuestionMapper;

    public QuestionController(QuestionService questionService, CustomQuestionMapper customQuestionMapper) {
        this.questionService = questionService;
        this.customQuestionMapper = customQuestionMapper;
    }


    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post postDto){
        Question createdQuestion = questionService.createQuestion(customQuestionMapper.questionPostDtoToQuestion(postDto), postDto.getUserId());

        QuestionDto.Response result = customQuestionMapper.questionToQuestionResponseDto(createdQuestion);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getQuestions(@Positive @RequestParam(defaultValue = "1") int page,
                                       @Positive @RequestParam(defaultValue = "100") int size){
        Page<Question> pageQuestions = questionService.findAllQuestion(page-1, size);
        List<Question> questions = pageQuestions.getContent();
        List<QuestionDto.Response> results = customQuestionMapper.questionsToQuestionResponseDtos(questions);
        return new ResponseEntity<>(results, HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") long questionId){
        Question question = questionService.readQuestion(questionId);
        QuestionDto.Response result = customQuestionMapper.questionToQuestionResponseDto(question);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") long questionId,
                                        @RequestBody QuestionDto.Patch patchDto){
        Question question = customQuestionMapper.questionPatchDtoToQuestion(patchDto);
        question.setId(questionId);

        Question resultQuestion = questionService.updateQuestion(question);
        QuestionDto.Response result = customQuestionMapper.questionToQuestionResponseDto(resultQuestion);
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
