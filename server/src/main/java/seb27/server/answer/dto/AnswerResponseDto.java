package seb27.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerResponseDto {
    private long answerId;
    private long userId;
    private long questionId;
    private String content;
    private String username;
}
