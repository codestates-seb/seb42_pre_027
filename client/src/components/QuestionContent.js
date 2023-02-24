import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as DownLogo } from '../svg/svg-down.svg';
import { ReactComponent as UpLogo } from '../svg/svg-up.svg';

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  /* border: 3px solid black; */
  width: 100%;
  height: 100%;
  min-width: 550px;
  .upanddown {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    height: max-content;
    > * {
      padding: 10px;
    }
  }
  .qcontent {
    display: flex;
    flex-direction: column;
    width: calc(100% - 52px);
    justify-content: space-between;
  }
  .question {
    min-height: 250px;
    text-align: left;
    padding: 10px;
  }
  .contentfooter {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .questioncontent {
    flex-grow: 1;
    justify-content: space-between;
  }
  .btn-wrapper {
    > * {
      border: none;
      padding: 10px;
      margin: 5px;
    }
  }
`;

const QuestionContent = ({ title, content }) => {
  const navigate = useNavigate();

  // const onRemove = (id) => {
  //   axios
  //     .delete(`/questions${questions.id}`)
  //     .then()
  //     .catch((err) => console.log(err));
  // };
  const goToCreateQuestion = () => {
    navigate('/createquestion');
  };
  return (
    <MainContent>
      <div className="top">
        <div className="qtitle">title</div>
        <button id="create-btn" onClick={goToCreateQuestion}>
          Ask Question
        </button>
      </div>
      <div className="writinginfo">
        <span>Asked 3 days ago</span>
        <span>Modified today</span>
        <span>View 39 times</span>
      </div>
      <section className="questioncontent">
        <div className="upanddown">
          <div id="up">
            <UpLogo />
          </div>
          <div>0</div>
          <div id="down">
            <DownLogo />
          </div>
        </div>
        <section className="qcontent">
          <div className="question">{content}</div>
          <div className="contentfooter">
            <div className="btn-wrapper">
              <button>update</button>
              <button>delete</button>
            </div>
            <div>writer</div>
          </div>
        </section>
      </section>
    </MainContent>
  );
};

export default QuestionContent;

/* TODO:
1. 기본 구조 구현 *
2. 데이터 불러오기
2-1. data.content
2-2. data.username
3. styled-components 적용
*/
