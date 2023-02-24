package seb27.server.question;

import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import seb27.server.answer.dto.AnswerResponseDto;

import java.util.List;
import java.util.stream.Collectors;

@Primary
@Mapper(componentModel = "spring")
public class CustomQuestionMapper implements QuestionMapper{
    @Autowired
    private QuestionMapper questionMapper;

    @Override
    public Question questionPostDtoToQuestion(QuestionDto.Post postDto) {
        return questionMapper.questionPostDtoToQuestion(postDto);
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionDto.Patch patchDto) {
        return questionMapper.questionPatchDtoToQuestion(patchDto);
    }

    @Override
    public QuestionDto.Response questionToQuestionResponseDto(Question question) {
        if (question == null) {
            return null;
        }
        else{
            QuestionDto.Response response = new QuestionDto.Response();
            response.setId(question.getId());
            response.setUserId(question.getMember().getId());
            response.setUsername(question.getMember().getUsername());
            response.setTitle(question.getTitle());
            response.setContent(question.getContent());
            response.setTag(question.getTag());

            if (question.getAnswerCount() != null) {
                response.setAnswerCount(question.getAnswerCount());
            }

            if (question.getViewCount() != null) {
                response.setViewCount(question.getViewCount());
            }

            response.setCreatedAt(question.getCreatedAt());
            response.setModifiedAt(question.getModifiedAt());


            List<AnswerResponseDto> list = question.getAnswers().stream()
                    .map(answer -> new AnswerResponseDto(
                            answer.getAnswerId(),
                            answer.getMember().getId(),
                            answer.getContent(),
                            answer.getMember().getUsername()
                    ))
                    .collect(Collectors.toList());

            response.setAnswers(list);


            return response;
        }
    }

    @Override
    public List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions) {
        List<QuestionDto.Response> responses = questions.stream()
                .map(this::questionToQuestionResponseDto)
                .collect(Collectors.toList());
        return responses;
    }
}
