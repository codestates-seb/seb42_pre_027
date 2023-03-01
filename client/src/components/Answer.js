import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

const PostButton = styled.button`
  background-color: rgba(18, 133, 251);
  color: white;
  border: 1px solid rgba(65, 113, 151);
  border-radius: 3px;
  padding: 10px;
`;

const ContainerBox = styled.div`
  text-align: start;

  .h1 {
    margin: 10px 0;
  }
`;

const Answer = ( {detail, getList} ) => {
  const [content, setContent] = useState('');

  const handleContent = (event, data) => {
    setContent(data);

    
  };

  const handleSaveButton = () => {
    if(content.length === 0){
      alert('내용을 입력해주세요.')
    } else {
      const username = localStorage.getItem('username')
      const userId = localStorage.getItem('id')
  
      const body = {
        userId,
        username,
        content
      }
  
      axios
        .post(`${process.env.REACT_APP_SERVER}/questions/${detail.id}`, body)
        .then((res) => {
          if(res.status === 201){
            getList()
           
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <ContainerBox>
      <div className="h1">Your Answer</div>
      <CKEditor
        editor={ClassicEditor}
        config={{
          placeholder: '내용을 입력하세요.',
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          handleContent(event, data);
        }}
      />
      
      <PostButton onClick={() => handleSaveButton()}>Post Your Answer</PostButton>
    </ContainerBox>
  );
};

export default Answer;