package seb27.server.question;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb27.server.answer.entity.Answer;
import seb27.server.member.entity.Member;
import seb27.server.question.audit.Auditable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;
    private String tag;

    private Long answerCount;
    private Long viewCount;

    @OneToMany(cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "USER_ID")
    private Member member;
}
