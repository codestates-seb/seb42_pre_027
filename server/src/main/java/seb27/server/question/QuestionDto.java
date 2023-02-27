package seb27.server.question;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import seb27.server.answer.dto.AnswerResponseDto;
import seb27.server.answer.entity.Answer;

import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Setter
    @Getter
    public static class Post{
        long userId;
        String title;
        String content;
        String tag;
    }

    @Setter
    @Getter
    public static class Patch{
        String title;
        String content;
        String tag;
    }

    @Setter
    @Getter
    public static class Response{
        long id;
        long userId;
        String username;
        String title;
        String content;
        String tag;
        long answerCount;
        long viewCount;

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy년 MM월 dd일 HH:mm", timezone = "Asia/Seoul")
        LocalDateTime createdAt;
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy년 MM월 dd일 HH:mm", timezone = "Asia/Seoul")
        LocalDateTime modifiedAt;

        private List<AnswerResponseDto> answers;
    }

}
