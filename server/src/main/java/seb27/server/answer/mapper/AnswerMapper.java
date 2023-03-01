package seb27.server.answer.mapper;

import org.mapstruct.Mapper;
import seb27.server.answer.dto.AnswerPatchDto;
import seb27.server.answer.dto.AnswerPostDto;
import seb27.server.answer.dto.AnswerResponseDto;
import seb27.server.answer.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerPostDto postDto);
    Answer answerPatchDtoToAnswer(AnswerPatchDto patchDto);
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
