package seb27.server.question;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class QuestionDto {
    @Setter
    @Getter
    public static class Post{
        long userId;
        String title;
        String content;
        String tag;
        long answerCount;
        long viewCount;
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
        long userId;
        String title;
        String content;
        String tag;
        long answerCount;
        long viewCount;
        LocalDateTime createdAt;
        LocalDateTime modifiedAt;
    }

}
