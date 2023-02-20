import styled from 'styled-components';

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
              <input type="text" id="displayName"></input>
              <label htmlFor="signupId">Email</label>
              <input type="text" id="signupId"></input>
              <label htmlFor="signupPassword">Password</label>
              <input type="text" id="signupPassword"></input>
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
