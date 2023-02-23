import { Link } from 'react-router-dom';
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
  return (
    <QuestionList>
      <QuestionSide>
        <p>0 votes</p>
        <p>0 answers</p>
        <p>39 views</p>
      </QuestionSide>
      <QuestionContent questions={questions}>
        <div>
          <Link to="/readquestion">{questions.title}</Link>
        </div>
        <div>{questions.content}</div>
        <div className="write">
          <div className="writerinfo">
            <div className="iconwrapper">
              <div>icon</div>
            </div>
            <div className="writer">writer</div>
            <div className="createat">createat</div>
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
