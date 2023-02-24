import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Up } from '../svg/svg-up.svg';
import { ReactComponent as Down } from '../svg/svg-down.svg';

const StyledBox = styled.div`
  border-bottom: 1px solid lightgray;
  margin: 10px auto;
  display: flex;

  .countBox {
    display: flex;
  }

  .contentBox .textarea {
    margin-bottom: 15px;
  }

  .contentBox .buttonarea {
    font-size: small;
    font-weight: 550;
    color: gray;
    text-align: start;
    margin: 0 10px;
  }

  .contentBox .buttonarea span {
    margin: 0 5px;
  }

  .contentBox .buttonarea span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const AnswerContent = () => {
  const [recomend, setRecomend] = useState(0);

  const handleClickUp = () => {
    setRecomend((current) => current + 1);
  };

  const handleClickDown = () => {
    setRecomend((current) => current - 1);
  };
  return (
    <StyledBox>
      <div className="conuntBox">
        <Up onClick={handleClickUp} />
        <span>{recomend}</span>
        <Down onClick={handleClickDown} />
      </div>
      <div className="contentBox">
        <p className="textarea">
          Because the only thing worse than building internal tools is
          maintaining them... Because the only thing worse than building
          internal tools is maintaining them... Because the only thing worse
          than building internal tools is maintaining them...
        </p>
        <div className="buttonarea">
          <span className="edit">edit</span>
          <span className="delete">delete</span>
        </div>
      </div>
    </StyledBox>
  );
};

export default AnswerContent;
