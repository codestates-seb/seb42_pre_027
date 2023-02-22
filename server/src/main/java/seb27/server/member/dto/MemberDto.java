package seb27.server.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


import javax.validation.constraints.NotNull;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post{

        @NotNull(message = "ID는 비워둘 수 없습니다.")
        private String username;

        @NotNull(message = "Password를 비워둘 수 없습니다.")
        private String password;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private long Id;

        @NotNull(message = "이름은 비워둘 수 없습니다.")
        private String username;

        @NotNull(message = "패스워드는 비워둘 수 없습니다.")
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long Id;
        private String username;
        private String password;

    }
    }
