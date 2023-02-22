package seb27.server.Member.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 30, updatable = false, unique = true)
    //nullable=false, DDL 생성 시 null 값의 허용 여부를 거부로 설정
    //updatable=false, Entity 수정 시 필드도 수정여부를 거부로 설정
    private String username;

    @Column(length = 30, nullable = false)
    private String password;

    }
