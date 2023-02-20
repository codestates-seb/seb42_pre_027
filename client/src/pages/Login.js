import styled from 'styled-components';
import Header from '../components/Header';
import { ReactComponent as Logo } from '../svg/stackoverflow2.svg';

const StyledButton = styled.button`
  margin-bottom: 10px;
  height: 35px;
  border: 1px solid;
  border-radius: 5px;
`;

const StyledBody = styled.div`
  margin-top: 50px;
  height: 100%;
  background-color: rgba(239, 240, 241);
  .innerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 400px;
    height: 890px;
  }

  .innerContainer .loginButton {
    display: flex;
    flex-direction: column;
    width: 280px;
    margin: 0 auto;
  }

  .innerContainer .loginButton .logo {
    margin-bottom: 25px;
  }
  .innerContainer .loginInput {
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 200px;
    margin: 30px auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 2px 2px rgba(217, 218, 219);
  }

  .innerContainer .loginInput div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 300px;
  }

  .innerContainer .loginInput div input {
    width: 240px;
    height: 30px;
    margin-bottom: 15px;
    background: transparent;
    border: 1px solid lightgray;
    border-radius: 3px;
  }

  .innerContainer .loginInput div input:focus {
    /* inline: gold; */
    outline: 1px solid rgba(12, 170, 200);
    box-shadow: 0 0 0 5px rgba(218, 232, 246);
  }

  .innerContainer .loginInput div label {
    text-align: start;
    font-size: 1.5ch;
    font-weight: 550;
    margin: 5px;
  }
`;

const Login = () => {
  return (
    <div>
      <Header />
      <StyledBody>
        <div className="innerContainer">
          <div className="loginButton">
            <span>
              <Logo fill="current" className="logo"></Logo>
            </span>
            <StyledButton style={{ background: 'white' }}>
              Log in with Google
            </StyledButton>
            <StyledButton
              style={{ background: 'rgba(41, 45, 48)', color: 'white' }}
            >
              Log in with GitHub
            </StyledButton>
          </div>
          <div className="loginInput">
            <div>
              <label htmlFor="loginId">Email</label>
              <input type="text" id="loginId"></input>
              <label htmlFor="loginPassword">Password</label>
              <input type="text" id="loginPassword"></input>
              <StyledButton
                style={{ background: 'rgba(18, 133, 251)', color: 'white' }}
              >
                Log in
              </StyledButton>
            </div>
          </div>
        </div>
      </StyledBody>
    </div>
  );
};

export default Login;
