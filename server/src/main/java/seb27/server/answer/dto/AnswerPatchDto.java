package seb27.server.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AnswerPatchDto {
    @Positive
    private long userId;

    @Positive
    private long answerId;

    @NotBlank
    private String content;
}
