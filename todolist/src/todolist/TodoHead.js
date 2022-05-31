import React from 'react';
import styled from 'styled-components';

const TodoHeadStyle = styled.div`
  padding: 50px 30px 30px 30px;
  border-bottom: 1px solid lightgray;
  h1 {
    margin: 0;
    font-size: 35px;
  }
  .tasks-left {
    font-size: 15px;
    margin-top: 30px;
    font-weight: bold;
    color: #20c997;
  }
`;

function TodoHead(props) {
  let now = new Date();

  return (
    <TodoHeadStyle>
      <h1>
        {now.getFullYear()}년 {now.getMonth() + 1}월 {now.getDate()}일
      </h1>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadStyle>
  );
}

export default TodoHead;