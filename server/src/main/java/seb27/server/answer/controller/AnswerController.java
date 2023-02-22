package seb27.server.answer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb27.server.answer.dto.AnswerPatchDto;
import seb27.server.answer.dto.AnswerPostDto;
import seb27.server.answer.entity.Answer;
import seb27.server.answer.mapper.AnswerMapper;
import seb27.server.answer.service.AnswerService;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
    }

    @PostMapping("/{question-id}")
    public ResponseEntity postAnswer(@PathVariable("question-id") long questionId,
                                     @RequestBody AnswerPostDto postDto) {

        Answer createAnswer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(postDto));

        return new ResponseEntity<>(createAnswer, HttpStatus.OK);
    }

    @GetMapping("/{question-id}/answers/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("question-id") long questionId,
                                    @PathVariable("answer-id") long answerId) {

        Answer answer = answerService.findVerifiedAnswer(answerId);

        return new ResponseEntity<>(answer, HttpStatus.OK);
    }

    @GetMapping("/{question-id}/answers")
    public ResponseEntity getAnswers() {

        List<Answer> answers = answerService.findAnswers();

        return new ResponseEntity<>(answers, HttpStatus.OK);
    }

    @PatchMapping("/{question-id}/answers/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("question-id") long questionId,
                                      @PathVariable("answer-id") long answerId,
                                      @RequestBody AnswerPatchDto patchDto) {

        Answer answer = answerMapper.answerPatchDtoToAnswer(patchDto);
        answer.setAnswerId(answerId);
        Answer patchAnswer = answerService.updateAnswer(answer);

        return new ResponseEntity<>(patchAnswer, HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}/answers/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("question-id") long questionId,
                                      @PathVariable("answer-id") long answerId) {

        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
