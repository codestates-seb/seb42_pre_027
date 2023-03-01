import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Up } from '../svg/svg-up.svg';
import { ReactComponent as Down } from '../svg/svg-down.svg';
import ReactHtmlParser from 'react-html-parser';

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
    display: flex;
  }

  .contentBox .buttonarea span {
    margin: 0 5px;
    
  }

  .contentBox .buttonarea span:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .contentBox .buttonarea .userId {
    color: black
  }
`;



const AnswerContent = ({ lists, editAnswer, deleteAnswer }) => {
  const [edited, setEdited] = useState(false);
  const [recomend, setRecomend] = useState(0);
  const [value, setValue] = useState("");
  const contentInput = useRef();
  const answerId = lists.answerId

  const handleClickUp = () => {
    setRecomend((current) => current + 1);
  };

  const handleClickDown = () => {
    setRecomend((current) => current - 1);
  };

  const handleEdit = () => {
   
    if(edited){
      editAnswer(lists.answerId, lists.userId, value)
    } 
    setEdited((current) => !current)
  }

  const inputChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if(edited){
    contentInput.current.focus()
    }
  },[edited])
  
  return (
    <StyledBox>
      <div className="conuntBox">
        <Up onClick={handleClickUp} />
        <span>{recomend}</span>
        <Down onClick={handleClickDown} />
      </div>
      <div className="contentBox">
        <div className="textarea">
          
          {edited ? <input type="textArea" ref={contentInput} defaultValue={ReactHtmlParser(lists.content)[0].props.children} onChange={inputChange}></input> : ReactHtmlParser(lists.content)}
        
        </div>
        <div className="buttonarea">
          <span className="edit" onClick={handleEdit}>{edited? "save" : "edit" }</span>
          {edited? "" : <span className="delete" onClick={() => deleteAnswer(answerId)} >delete</span>}
          <span className="userId">{lists.username}</span>
        </div>
      </div>
    </StyledBox>
  );
};

export default AnswerContent;
