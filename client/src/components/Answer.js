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
    console.log(event.data)
    setContent(data);
    console.log(content)
    
  };

  const handleSaveButton = () => {
    if(content.length === 0){
      alert('내용을 입력해주세요.')
    } else {
      console.log(content)
      const username = localStorage.getItem('username')
      const userId = localStorage.getItem('id')
  
      const body = {
        userId,
        username,
        questionId: detail.id,
        content
      }
  
      axios
        .post(`${process.env.REACT_APP_SERVER}/questions/${detail.id}`, body)
        .then((res) => {
          console.log(res)
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
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          handleContent(event, data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      
      <PostButton onClick={() => handleSaveButton()}>Post Your Answer</PostButton>
    </ContainerBox>
  );
};

export default Answer;
