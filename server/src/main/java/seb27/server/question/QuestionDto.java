package seb27.server.question;

import lombok.Getter;
import lombok.Setter;

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
}
