import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const QuestionContent = ({ detail }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [update, setUpdate] = useState({});

  const goToUpdate = () => {
    navigate(`/updatequestions/${detail.id}`);
  };

  const goToCreateQuestion = () => {
    navigate('/createquestion');
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/questions/${id}`)
      .then((res) => {
        setUpdate(res.data.userId);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onUpdate = () => {
    navigate(`/updatequestion/${detail.id}`);
  };

  const onDelete = async () => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER}/questions/${detail.id}`)
      .then((res) => {
        alert('삭제되었습니다.');

        navigate('/main');
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainContent>
      <div className="top">
        <div className="qtitle">{detail.title}</div>
        <button id="create-btn" onClick={goToCreateQuestion}>
          Ask Question
        </button>
      </div>
      <div className="writinginfo">
        <span>{detail.createdAt}</span>
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
          <div
            className="question"
            dangerouslySetInnerHTML={{ __html: detail.content }}
          ></div>
          <div className="contentfooter">
            <div className="btn-wrapper">
              {Number(localStorage.getItem('id')) === Number(update) ? (
                <button onClick={onUpdate}>update</button>
              ) : null}
              {Number(localStorage.getItem('id')) === Number(update) ? (
                <button onClick={onDelete}>delete</button>
              ) : null}
            </div>
            <div>{detail.username}</div>
          </div>
        </section>
      </section>
    </MainContent>
  );
};

export default QuestionContent;

/* TODO:
1. 기본 구조 구현 *
2. 데이터 불러오기 *
2-1. data.content *
2-2. data.username * 
3. styled-components 적용 *
*/
