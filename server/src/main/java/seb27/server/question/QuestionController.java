package seb27.server.question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionController {
    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post postDto){
        return new ResponseEntity<>(postDto, HttpStatus.CREATED);
    }

    @GetMapping("/")
    public String hello(){
        return "hello world";
    }
}
