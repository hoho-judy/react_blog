/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState(['코딩 애플 후기', '뷰란 무엇인가?', '리액트 강의 추천']);
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
      <button onClick={ ()=> {
        let copy = [...title];
        copy.sort((a, b)=>{
          if(a > b) {
            return 1;
          } else if(a < b) {
            return -1;
          } else {
            return 0;
          }
        })
        setTitle(copy);
      }}>가나다순정렬</button>
      <div className="list">
        <h4>{ title[0] } <span onClick={ ()=>{ setLikes(likes+1) } }>👍</span> { likes } 
        <button onClick={ ()=>{ 
          let copy = [...title]; // 원본데이터를 보존하기 위해 카피본을 만들어서 카피본 데이터를 수정
          copy[0] = 'vue 강의 추천';
          setTitle(copy); 
        }}>제목바꾸기</button></h4>
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

      <Modal />
      <Homework />
      
    </div>
  );
}

function Modal() {
  return(
    <> 
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

// 함수 컴포넌트는 이렇게 만들어도 됨
const Homework = () => {
  return (
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

export default App;
