package seb27.server.question;

import lombok.Getter;
import lombok.Setter;
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
        LocalDateTime createdAt;
        LocalDateTime modifiedAt;

        private List<AnswerResponseDto> answers;
    }

}
