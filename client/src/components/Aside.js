import styled from 'styled-components';

const RightAside = styled.aside`
  display: flex;
  /* -webkit-box-pack: end; */
  justify-content: flex-end;
  margin-right: 3%;
  width: 100%;
  min-width: 300px;
  text-align: left;
  top: 60px;
  position: relative;
  right: 5px;
  ul {
    border: 1px solid rgb(234, 215, 146);
    border-radius: 3px;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
    box-sizing: border-box;
    height: fit-content;
    list-style: none;
    width: 270px;
  }
  .rightcontent {
    display: flex;
    flex-direction: column;
    height: max-content;
    width: max-content;
  }
  .title {
    background-color: #fbf3d5;
    border-style: solid;
    border-color: rgb(234, 215, 146);
    border-image: initial;
    border-radius: 0px;
    border-width: 1px 0px;
    box-sizing: border-box;
    color: rgb(83, 83, 83);
    font-weight: 600;
    font-size: small;
    height: 8%;
    list-style: none;
    padding: 10px;
    width: 100%;
  }
  .content {
    background-color: #fdf7e2;
    border-radius: 0px;
    box-sizing: inherit;
    display: flex;
    font-size: small;
    height: fit-content;
    margin: 0px;
    padding: 8px;
    width: 100%;
  }
`;

const Aside = () => {
  return (
    <>
      <RightAside>
        <div className="rightcontent">
          <ul>
            <li className="title">The Overflow Blog</li>
            <li className="content">
              Monitoring debt builds up faster than software teams can pay it
              off
            </li>
            <li className="content">
              Because the only thing worse than building internal tools is
              maintaining them...
            </li>
            <li className="title">Featured on Meta</li>
            <li className="content">
              Ticket smash for [status-review] tag: Part Deux
            </li>
            <li className="content">
              Best practices to increase the speed for Next.js apps
            </li>
            <li className="content">
              2022 Community Moderator Election Results - now with two more
              mods!
            </li>
            <li className="content">Temporary policy: ChatGPT is banned</li>
            <li className="content">
              Proposing a Community-Specific Closure Reason for non-English
              content
            </li>
          </ul>
        </div>
      </RightAside>
    </>
  );
};

export default Aside;

/* TODO: 
1. styled-components 적용
1-1. 아이콘 삽입
1-2. sticky 효과 * 
*/
