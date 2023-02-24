import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QuestionList = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  border: 1px solid #c5c5c5;
  /* border-width: 1px 0px 0px; */
  float: right;
  height: max-content;
  padding: 15px;
`;

const QuestionSide = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-right: 20px;
  > p {
    color: black;
    font-size: 12px;
    margin: 0px 0px 10px;
  }
`;

const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  text-align: left;
  margin-left: 5px;
  .write {
    display: flex;
    .writerinfo {
      display: flex;
      height: max-content;
      margin-left: auto;
    }
    .writer {
      color: #56acff;
      font-size: small;
      padding-top: 3px;
      margin-right: 5px;
      text-decoration: none;
    }
    .createat {
      color: #c0c4c7;
      font-size: small;
      padding-top: 3px;
    }
  }
`;

const List = ({ questions }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const moveRead = (id) => {
    axios
      .get(`/questions/${questions.id}`)
      .then((res) => {
        console.log(res.data.content);
        setContent(res.data.content);
      })
      .catch((err) => console.log(err));
    navigate('/readquestion');
  };
  return (
    <QuestionList>
      <QuestionSide>
        <p>0 votes</p>
        <p>0 answers</p>
        <p>39 views</p>
      </QuestionSide>
      <QuestionContent questions={questions}>
        <div onClick={moveRead} title={title} content={content}>
          {questions.title}
        </div>
        <div>{questions.content}</div>
        <div className="write">
          <div className="writerinfo">
            <div className="iconwrapper">
              <div>icon</div>
            </div>
            <div className="writer">{questions.userId}</div>
            <div className="createat">{questions.createdAt}</div>
          </div>
        </div>
      </QuestionContent>
    </QuestionList>
  );
};

export default List;

/* TODO:
1. 기본 구조 적용 * 
2. styled-components 적용
3. 데이터 불러오기
3-1. data.title
3-2. data.content
3-3. data.createdAt
3-4. data.username
3-5. data.아이콘?
3-6. data.answerLength
*/
