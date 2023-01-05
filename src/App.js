import "./App.css";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Routers from "./Routers/Routers";
import RoomArticle from "./components/RoomArticle";
import SideBarRoom from "./components/SideBarRoom";
import RoomComment from "./components/RoomComment";
import SimpleRoomParticipants from "./components/SimpleRoomParticipants";
import SimpleRoomPicture from "./components/SimpleRoomPicture";
import SimpleRoomText from "./components/SimpleRoomText";
import MainContents from "./components/MainContents";
import RoomJoinButton from "./components/RoomJoinButton";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import SignUp2 from "./Pages/SignUp2";
import MyPage01 from "./Pages/MyPage01";
import CreateRoom from "./Pages/CreateRoom";
import MyPage2 from "./components/MyPage2";
import Profile02 from "./Pages/Profile02";
import SimpleRoom from "./Pages/SimpleRoom";
import Axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setDate] = useState([])






  return (
    <div className="App pt-5">
      <div className="mb-5"><NavBar /></div>
      <div className="">
        <Routes>
          <Route path="/*" element={<Routers />} />
        </Routes>
      </div>
      <div className="width-100"><Footer /></div>
      {/* <SimpleRoom/> */}
      {/* <NavigationBar /> */}
      {/* <NavBar /> */}
      {/* <Profile /> */}
      {/* <ProfileMini /> */}
      {/* <SortList /> */}

      {/* 주용 로그인 페이지 시작 */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <SignUp2/> */}
      {/* <CreateRoom /> */}
      {/* { <MyPage2 />  } */}
      {/* 주용 로그인 페이지 끝 */}

      {/* <Pagination /> */}
      {/* <Footer /> */}

      {/* HansooComponents*/}
      {/* <SideBarMain /> */}
      {/* <SideBarRoom /> 
      <RoomArticle /> */}
      {/* <RoomComment /> */}
      {/* <JoinRoomButton /> */}
      {/* <SimpleRoomPicture /> */}
       {/* <SimpleRoomText /> */}
      {/* <SimpleRoomParticipants /> */}
      
      {/* <MainContents /> */}

      {/* <MyPage01/> */}
      <Profile02 />
    </div>
  );
}

export default App;
