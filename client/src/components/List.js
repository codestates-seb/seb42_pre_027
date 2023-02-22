import styled from 'styled-components';

const QuestionList = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  border-style: solid;
  border-color: #c5c5c5;
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

const List = () => {
  return (
    <QuestionList>
      <QuestionSide>
        <p>0 votes</p>
        <p>0 answers</p>
        <p>39 views</p>
      </QuestionSide>
      <QuestionContent>
        <div>title</div>
        <div>content</div>
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
