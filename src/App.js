/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState(['코딩 애플 후기', '뷰란 무엇인가?', '리액트 강의 추천']);
  let [titleIndex, setTitleIndex] = useState(0);
  let [likes, setLikes] = useState([0, 0, 0]); // state 바꿀 때는 state를 바꾸는 전용 함수를 써야함. 그래야 html 자동 재렌더링됨
  let [dates, setDates] = useState(['2024-08-08 발행','2023-07-31 발행','2022-05-16 발행']);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState(''); // 입력값 저장용

  let copyTitles = [...title];
  let copyLikes = [...likes];
  let copyDates = [...dates];

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
      //  let copyTitles = [...title];
        copyTitles.sort((a, b)=>{
          if(a > b) {
            return 1;
          } else if(a < b) {
            return -1;
          } else {
            return 0;
          }
        })
        setTitle(copyTitles);
      }}>가나다순정렬</button>
      <button onClick={ ()=>{ 
        //  let copyTitles = [...title]; // 원본데이터를 보존하기 위해 카피본을 만들어서 카피본 데이터를 수정
          copyTitles[0] = 'vue 강의 추천';
          setTitle(copyTitles); 
        }}>제목바꾸기</button>

      {/* <div className="list">
        <h4>{ title[0] } <span onClick={ ()=>{ setLikes(likes+1) } }>👍</span> { likes } </h4>
        <p>8월 6일 발행</p>
      </div>
      <div className="list">
        <h4>{ title[1] }</h4>
        <p>7월 4일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ 
          if(!modal) {
            setModal(true);
          } else {
            setModal(false);
          } 
         }}>{ title[2] }</h4>
        <p>6월 1일 발행</p>
      </div> */}
      
      {/* 반복되는 div 태그 뭉텅이 반복해서 만들기 */}
      {
        title.map((item, i)=>{
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                setModal(!modal);
                setTitleIndex(i);
              }}>{ item } <span onClick={ (e)=>{ 
                e.stopPropagation(); // 이벤트버블링(상위 요소로 이벤트가 번지는 현상) 막는 함수
              //  let copyLikes = [...likes];
                copyLikes[i] = copyLikes[i] + 1;
                setLikes(copyLikes);
              }}>👍</span> 
              <span>{ likes[i] } </span> 
              <span>
                <button onClick={(e)=>{
                e.stopPropagation();
                
                copyTitles = copyTitles.filter((t, index)=>{
                  return index !== i;
                })
                copyLikes = copyLikes.filter((l, index)=>{
                  return index !== i;
                })
                copyDates = copyDates.filter((d, index)=>{
                  return index !== i;
                })

                setTitle(copyTitles);
                setLikes(copyLikes);
                setDates(copyDates);
              }}>삭제</button>
              </span></h4>
              <p>{ dates[i] }</p>
            </div>
          );
        })
      }
      
      <input onChange={(e)=>{ setInput(e.target.value) }}></input>
      <button onClick={()=>{
        if(input === null || input ==='') {
          alert('내용을 입력해주세요.');
          return;
        }

        // input값을 title array에 추가
        copyTitles.unshift(input);
        copyLikes.unshift(0);
        copyDates.unshift(new Date().toDateString());

        setTitle(copyTitles);
        setLikes(copyLikes);
        setDates(copyDates);

      }}>발행</button>

      {/* 자바스크립트를 html 쓰는 공간에 쓰려면 중괄호 안에 작성 */}
      {
        modal === true ? <Modal color={'skyblue'} title={title} setTitle={setTitle} titleIndex={titleIndex}/> : null
      }
       
    </div>
  );
}

function Modal(props) {
  return(
    <> 
      <div className="modal" style={{background : props.color}}>
        <h4>{props.title[props.titleIndex]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
          let copyTitles = [...props.title];
          copyTitles[0] = '코딩 사과 후기!!';
          props.setTitle(copyTitles);
        }}>글수정</button>
      </div>
    </>
  );
}

export default App;
