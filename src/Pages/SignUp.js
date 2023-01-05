import axios from "axios";
import {useState} from "react";
import {NavLink} from "react-router-dom";

export default function Signup() {
  const [userId, setUserId] = useState("");     //렌더링되는 상태값들을 저장했다가 나중에 사용. name을 리턴부분에서 사용하고 set하겠다. ""는 userId의 초기값("":빈 값)
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userInterest, setUserInterest] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userEmail, setUserEmail] = useState("");


  const register = () => {
    axios.post('http://localhost:8000/test', {
    userId : userId,
    userPw : userPw,
    userName : userName,
    userBirth : userBirth,
    userInterest : userInterest,
    userGender : userGender,
    userAddress : userAddress,
    userEmail : userEmail,    //쉼표는 적어주는게 좋다. 다음에 데이터가 나올 수도 있다는 의미.
  })
  .then(response => {   
    // Handle success. 위에 post가 끝나야 then이 동작. 받아오는 부분.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    localStorage.setItem('token',response.data.jwt);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });





  }


  //return 위에다 JS 함수 선언해주고 return(렌더링되는 부분)에서 사용
  return (
    <div className="page container text-bg-info bg-opacity-50">
      <div className="titleWrap">
        ※회원가입※
      </div>

      <div className="contentWrap">

        <div className="inputTitle">🆔아이디</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="아이디를 입력하세요"
            value={userId}
            onChange={(event) => {
              setUserId(event.target.value);
            }}    //변화가 있으면 event로 받아서 실행하는 함수.

          />
        </div>

        <div className="inputTitle">
          🅿️비밀번호
        </div>

        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={userPw}
            onChange={(event) => {
              setUserPw(event.target.value);
            }} />
        </div>

        <div className="inputTitle">
          ✅비밀번호확인
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"

          />
        </div>

        <div className="inputTitle">✍️이름</div>
        <div className="inputWrap">
          <input
            className="input"
            type="text"
            placeholder="이름을 입력하세요"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>



        <div className="inputTitle">🎂생년월일</div>
        <div className="inputWrap">
          <input className="date"
            type="date"
            value={userBirth}
            onChange={(event) => {
              setUserBirth(event.target.value);
            }}

          />
        </div>


        <div className="inputTitle">🏊관심사</div>
        <div className="inputWrap">
          <span className="interest">운동<input type="checkbox" value={userInterest} onChange={(event) =>{setUserInterest(event.target.value)}}/></span>
          <span className="interest">여행<input type="checkbox" value={userInterest} onChange={(event) =>{setUserInterest(event.target.value)}}/></span>
          <span className="interest">독서<input type="checkbox" value={userInterest} onChange={(event) =>{setUserInterest(event.target.value)}}/></span>
          <span className="interest">음악<input type="checkbox" value={userInterest} onChange={(event) =>{setUserInterest(event.target.value)}}/></span>
          <span className="interest">게임<input type="checkbox" value={userInterest} onChange={(event) =>{setUserInterest(event.target.value)}}/></span>
          <span className="interest">영화<input type="checkbox" value={userInterest} onChange={(event) =>{setUserInterest(event.target.value)}}/></span>
          <span className="interest">음식<input type="checkbox" value={userInterest} onChange={(event) =>{setUserInterest(event.target.value)}}/></span>
        </div>

        <div className="inputTitle">🎎성별</div>
        <div className="inputWrap">
          <select className="gender">
            <option value={userGender} onChange={(event) => {
              setUserGender(event.target.value);
            }}>남</option>
            <option value={userGender} onChange={(event) => {
              setUserGender(event.target.value);
            }}>여</option>
          </select>
        </div>

        <div className="inputTitle">
          📧이메일
        </div>
        <div className="inputWrap">
          <input
            className="input"
            type="email"
            placeholder="이메일을 입력하세요"
            value={userEmail}
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
          />
        </div>

        <div className="inputTitle">📮주소</div>
        <div className="inputWrap"><input className="input" type="text" value={userAddress}
          onChange={(event) => {
            setUserAddress(event.target.value);
          }} /></div>


        <div>
          <NavLink className="nav-link" to="/Users/SignUp2">
            <button className="bottomButton">
              ⏭️다음
            </button>
          </NavLink>
        </div>

      </div>

    </div>
  );
}