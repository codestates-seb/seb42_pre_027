import styled from 'styled-components';
import List from '../components/List';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;
`;

const ListContainer = () => {
  return (
    <>
      <Container>
        {/* map 사용하여 데이터 뿌려줄 부분 */}
        <List />
        <List />
        <List />
        <List />
      </Container>
    </>
  );
};

export default ListContainer;

/* TODO:
1. 기본 구조 구현 * 
2. map 으로 질문 리스트 뿌려주기
3. styled-components 적용
*/
