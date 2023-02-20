package seb27.server.question;


import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post postDto);
    Question questionPatchDtoToQuestion(QuestionDto.Patch patchDto);
    QuestionDto.Response questionToQuestionResponseDto(Question question);
}
