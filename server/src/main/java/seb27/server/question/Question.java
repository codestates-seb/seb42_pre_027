package seb27.server.question;

import java.time.LocalDateTime;

public class Question {
    Long id;
    Long userId;
    String title;
    String content;
    String tag;
    LocalDateTime createdAt;
    LocalDateTime modifiedAt;
    Long answerCount;
    Long viewCount;
}
