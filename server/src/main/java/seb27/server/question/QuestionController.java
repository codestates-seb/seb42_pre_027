package seb27.server.question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post postDto){
        return new ResponseEntity<>(postDto, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getQuestions(){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") long questionId){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") long questionId, @RequestBody QuestionDto.Patch patchDto){
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") long questionId){
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/")
    public String hello(){
        return "hello world";
    }
}
