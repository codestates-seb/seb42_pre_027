package seb27.server.question;

import lombok.Getter;

public class QuestionDto {
    @Getter
    public static class Post{
        long userId;
        String title;
        String content;
        String tag;
        long answerCount;
        long viewCount;
    }
}
