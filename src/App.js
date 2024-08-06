/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState(['리액트 강의 추천','Vue란 무엇인가?','코딩 애플 후기']);
  let [likes, setLikes] = useState(0); // state 바꿀 때는 state를 바꾸는 전용 함수를 써야함. 그래야 html 자동 재렌더링됨

  // onClick 등 이벤트 핸들러에는 무조건 함수만 들어가야한다.
  // 함수를 바깥에 정의하고 함수명만 써도 되고, 함수 자체를 작성해도 됨
  // function test() {
  //   console.log('좋아요 클릭');
  // }
  
  return (
    <div className="App">
      <div className="black-nav">
        {/* <h4 style={ {color : 'red', fontSize: '16px', } }>블로그임</h4> */}
        <h4>리액트 실습 블로그</h4>
      </div>
      <div className="list">
        <h4>{ title[0] } <span onClick={ ()=>{ setLikes(likes+1) } }>👍</span> { likes } </h4>
        <p>8월 6일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>8월 4일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[2] }</h4>
        <p>8월 1일 발행</p>
      </div>
    </div>
  );
}

export default App;
