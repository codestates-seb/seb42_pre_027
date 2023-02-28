import { useState } from 'react';
import styled from 'styled-components';

import axios from 'axios';

const StyledButton = styled.button`
  margin-bottom: 10px;
  height: 35px;

  border: 1px solid;
  border-radius: 5px;
`;

const StyledDiv = styled.div`
  margin-top: 50px;
  height: 100%;
  background-color: rgba(239, 240, 241);
  display: flex;
  justify-content: center;

  height: 890px;
  .outsideContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 890px;
  }

  .outsideContainer .leftContainer {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 20px;
  }

  .outsideContainer .leftContainer div {
    display: flex;
  }

  .outsideContainer .leftContainer div div {
    margin-bottom: 15px;
  }

  .outsideContainer .rightContainer {
    display: flex;
    width: 300px;
    flex-direction: column;
    align-items: center;
  }

  .outsideContainer .rightContainer .signupButton {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  .outsideContainer .rightContainer .signupInput {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 700px;
    margin: 30px auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 2px 2px rgba(217, 218, 219);
  }

  .outsideContainer .rightContainer .signupInput .inputDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
    height: 350px;
  }

  .outsideContainer .rightContainer .signupInput .inputDiv input {
    width: 250px;
    height: 30px;
    margin-bottom: 15px;
    background: transparent;
    border: 1px solid lightgray;
    border-radius: 3px;
  }

  .outsideContainer .rightContainer .signupInput .inputDiv input:focus {
    outline: 1px solid rgba(12, 170, 200);
    box-shadow: 0 0 0 5px rgba(218, 232, 246);
  }

  .outsideContainer .rightContainer .signupInput .inputDiv label {
    width: 250px;
    text-align: start;
    height: 20px;
    font-size: 1.5ch;
    font-weight: 550;
    margin: 10px;
  }
`;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isUserName, setIsUserName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const checkId = (e) => {
    var regExp = /^[A-Za-z0-9+]{6,}$/;

    if (regExp.test(e.target.value) === false) {
      alert('6글자 이상, 문자 또는 숫자를 포함해서 작성해주세요.');
      e.target.value = '';
    } else {
      setUsername(e.target.value);
      setIsUserName((current) => !current);
    }
  };

  const checkPassword = (e) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;

    if (regExp.test(e.target.value) === false) {
      alert('8 ~ 10자 영문, 숫자 조합으로 만들어주세요.');
      e.target.value = '';
    } else {
      setPassword(e.target.value);
      setIsPassword((current) => !current);
    }
  };

  const handleSignupButon = () => {
    if (isUserName === false) {
      alert('양식에 맞게 아이디를 작성해주세요.');
    } else if (isPassword === false) {
      alert('양식에 맞게 비밀번호를 작성해주세요.');
    }

    if (isUserName === true && isPassword === true) {
      const info = {
        username,
        password,
      };

      axios
        .post(`${process.env.REACT_APP_SERVER}/users/sign-in`, info)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      console.log(info);
      const checkConfirm = confirm('로그인 페이지로 이동하시겠습니까?');
      if (checkConfirm) {
        document.location.href = '/login';
      } else {
        document.location.href = '/signup';
      }
    }
  };

  return (
    <StyledDiv>
      <div className="outsideContainer">
        <div className="leftContainer">
          <div>
            <div style={{ 'font-size': 'x-large', 'font-weight': 'bold' }}>
              Join the Stack Overflow community
            </div>
          </div>
          <div>
            <div>image</div>
            <div>Get unstuck — ask a question</div>
          </div>
          <div>
            <div>image</div>
            <div>Unlock new privileges like voting and commenting</div>
          </div>
          <div>
            <div>image</div>
            <div>Save your favorite tags, filters, and jobs</div>
          </div>
          <div>
            <div>image</div>
            <div>Earn reputation and badges</div>
          </div>
          <span style={{ 'text-align': 'start' }}>
            Collaborate and share knowledge with a private group for FREE.
            <br />
            Get Stack Overflow for Teams free for up to 50 users.
          </span>
        </div>
        <div className="rightContainer">
          <div className="signupButton">
            <StyledButton style={{ background: 'white' }}>
              Sign up with Google
            </StyledButton>
            <StyledButton
              style={{ background: 'rgba(41, 45, 48)', color: 'white' }}
            >
              Sign up with GitHub
            </StyledButton>
          </div>
          <div className="signupInput">
            <div className="inputDiv">
              <label htmlFor="displayName">Display name</label>
              <input type="text" id="displayName" onBlur={checkId}></input>
              <label htmlFor="signupPassword">Password</label>
              <input
                type="password"
                id="signupPassword"
                onBlur={checkPassword}
              ></input>
              <span
                style={{
                  'font-size': 'small',
                  'text-align': 'start',
                  margin: '0 25px',
                }}
              >
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </span>
              <StyledButton
                style={{
                  background: 'rgba(18, 133, 251)',
                  color: 'white',
                  width: '250px',
                }}
                onClick={handleSignupButon}
              >
                Sign up
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default SignUp;
