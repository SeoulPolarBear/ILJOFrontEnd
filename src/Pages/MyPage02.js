
import MainContents from "../components/MainContents";
import { Link } from "react-router-dom";

export default function MyPage03() {
    return (
        <div style={{ background: "whitesmoke" }}>
            <div> 
                <div id="InfoContainer1">
                    {/* 별점 */}
                    <img style={{ width: '200px' }} src="https://cdn0.iconfinder.com/data/icons/twitter-23/512/166_Heart_Love_Like_Twitter-512.png"></img>
                    {/* 정보변경 */}
                    <img style={{ width: '200px' }} src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-43-512.png"></img>
                    <div class="text-center">0점</div>
                    <div class="text-center"><a href="/" class="btn btn-primary">정보 변경</a></div>
                </div>
            </div>
            <hr></hr>
            <div className="d-flex flex-column">
                <div className="row mt-4">
                    <div className="ms-3 row">
                        <div>
                            <h1>My Room</h1>
                        </div>
                        <hr />
                        {Array(16)
                            .fill(1)
                            .map((a, i) => a + i)
                            .map((a2, i) => {
                                return (
                                    <div key={i} className="ms-2 mb-5 width-22">
                                        <MainContents />
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <hr></hr>

                <div className="d-flex">
                    <div className="row mt-4">
                        <div className="ms-3 row">
                            <div>
                                <h1>Room History</h1>
                            </div>
                            <hr />
                            {Array(16)
                                .fill(1)
                                .map((a, i) => a + i)
                                .map((a2, i) => {
                                    return (
                                        <div key={i} className="ms-2 mb-5 width-22">
                                            <MainContents />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>

                </div>

            </div>
        </div>
          
    );
}