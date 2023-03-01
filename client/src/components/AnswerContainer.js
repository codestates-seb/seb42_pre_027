import axios from 'axios';
import { useEffect, useState } from 'react';
import Answer from './Answer';
import AnswerContent from './AnswerContent';

const AnswerContainer = ( {detail} ) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    getList()
  }, [detail]);

  const getList = () => {
    axios
    .get(`${process.env.REACT_APP_SERVER}/questions/${detail.id}/`)
    .then((res) => {
      setLists(res.data.answers);
    })
    .catch((err) => console.log(err));
  }

  const deleteAnswer = (answerId) => {
  
    axios
      .delete(`${process.env.REACT_APP_SERVER}/questions/${detail.id}/answers/${answerId}`)
      .then((res) => {
        if(res.status === 202 || res.status === 204){
          getList()
        }
      })
  }

  const editAnswer = (answerId, userId, content) => {
    const edited = {
      userId,
      answerId,
      content
    }

    axios
      .patch(`${process.env.REACT_APP_SERVER}/questions/${detail.id}/answers/${answerId}`, edited)
      .then(res => {
        if(res.status === 200 || res.status === 202 || res.status === 204){
          getList()
        }
      })
  }

  return (
    <div className='answerContainer'>
      {lists.map((list) => {
        return <AnswerContent key={list.answerId} lists={list} editAnswer={editAnswer} deleteAnswer={deleteAnswer}/>;
      })}
      <Answer detail={detail} getList={getList} />
    </div>
  );
};

export default AnswerContainer;