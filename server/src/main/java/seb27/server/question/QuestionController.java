package seb27.server.question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

        System.out.println(createdQuestion.getId());

        QuestionDto.Response result = customQuestionMapper.questionToQuestionResponseDto(createdQuestion);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getQuestions(){
        List<Question> questions = questionService.findAllQuestion();
        List<QuestionDto.Response> results = customQuestionMapper.questionsToQuestionResponseDtos(questions);
        return new ResponseEntity<>(results, HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") long questionId){
        Question question = questionService.findQuestion(questionId);
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
