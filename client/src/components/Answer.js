import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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

const Answer = () => {
  const [content, setContent] = useState('');
  // const []

  const handleSaveButton = (event, data) => {
    setContent(data);

    const date = new Date();
    const created_date = date.toLocaleString();

    const body = {
      data,
      created_date,
    };

    body;
  };

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
          handleSaveButton(event, data);
          // console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      {ReactHtmlParser(content)}

      <PostButton>Post Your Answer</PostButton>
    </ContainerBox>
  );
};

export default Answer;
