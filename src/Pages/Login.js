import React, { useEffect, useState } from 'react'



const User = {
  id: 'test@example.com',
  pw: 'test2323@@@'
}


export default function Login() {
    /* 기능박는부분. 아직 공부 안된 상태고. 아직 안 써서 주석처리 
    const [id, setid] = useState('');
    const [pw, setPw] = useState('');

    const [idValid, setidValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(idValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [idValid, pwValid]);

    const handleid = (e) => {
      setid(e.target.value);
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setidValid(true);
      } else {
        setidValid(false);
      }
    };

    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };

    const onClickConfirmButton = () => {
      if(id === User.id && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    };
    */
    async function postUser() {
      try {
      // POST 요청은 body에 실어 보냄
        await axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        });
      } catch (e) {
        console.error(e);
      }
    }

    return (
      <div className="page container">
        <div className="titleWrap">
          로그인
        </div>

        <div className="contentWrap">
          <div className="inputTitle">아이디</div>
          <div
            className="inputWrap"
          >
            <input
              className="input"
              type="text"
              placeholder="아이디를 입력하세요"
              name=""
            />
          </div>
          

          <div style={{ marginTop: "26px" }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            />
          </div>
          


          <div className="loginOptionWrap">
            <span>&nbsp;&nbsp;회원가입&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;아이디찾기&nbsp;&nbsp;</span>
            <span>&nbsp;&nbsp;비밀번호찾기&nbsp;&nbsp;</span>
          </div>

        </div>
        <div className="mt-5">
          <button className="bottomButton">
            확인
          </button>
        </div>
      </div>
    );
}