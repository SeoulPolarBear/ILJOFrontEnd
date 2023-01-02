import RoomShortForm from "../components/RoomShortForm";
import MainContents from "../components/MainContents";

export default function MyPage01() {
    return (
        <div >
            <div>


                <div>
                

                    {/* 별점 */}
                    
                    <div class="starpoint_wrap">
                        <div class="card" >
                        <img src="https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843__340.jpg" width="3em"class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                        <div class="starpoint_box">
                            <label for="starpoint_1" class="label_star" title="0.5"><span class="blind">0.5점</span></label>
                            <label for="starpoint_2" class="label_star" title="1"><span class="blind">1점</span></label>
                            <label for="starpoint_3" class="label_star" title="1.5"><span class="blind">1.5점</span></label>
                            <label for="starpoint_4" class="label_star" title="2"><span class="blind">2점</span></label>
                            <label for="starpoint_5" class="label_star" title="2.5"><span class="blind">2.5점</span></label>
                            <label for="starpoint_6" class="label_star" title="3"><span class="blind">3점</span></label>
                            <label for="starpoint_7" class="label_star" title="3.5"><span class="blind">3.5점</span></label>
                            <label for="starpoint_8" class="label_star" title="4"><span class="blind">4점</span></label>
                            <label for="starpoint_9" class="label_star" title="4.5"><span class="blind">4.5점</span></label>
                            <label for="starpoint_10" class="label_star" title="5"><span class="blind">5점</span></label>
                            <input type="radio" name="starpoint" id="starpoint_1" class="star_radio" />
                            <input type="radio" name="starpoint" id="starpoint_2" class="star_radio" />
                            <input type="radio" name="starpoint" id="starpoint_3" class="star_radio" />
                            <input type="radio" name="starpoint" id="starpoint_4" class="star_radio" />
                            <input type="radio" name="starpoint" id="starpoint_5" class="star_radio" />
                            <input type="radio" name="starpoint" id="starpoint_6" class="star_radio" />
                            <input type="radio" name="starpoint" id="starpoint_7" class="star_radio" />
                            <input type="radio" name="starpoint" id="starpoint_8" class="star_radio" />
                            <input type="radio" name="starpoint" id="starpoint_9" class="star_radio" />
                            <input type="radio" name="starpoint" id="starpoint_10" class="star_radio" />
                            <span class="starpoint_bg"></span>
                        </div>
                    </div>
                    {/* 정보변경 */}
                    <img src="https://cdn0.iconfinder.com/data/icons/basic-outline/64/icon-basic-set_10-information-128.png"></img>
                </div>
                <hr></hr>
                <div className="Page Room Container">
                    <RoomShortForm />
                </div>
                {/* <h6> 내가 만든 방이 없습니다. </h6> */}
                <hr></hr>
                {/* <div className="Page Room Container">
                    <RoomShortForm />
                </div> */}
                <div className="m-auto row w-75">
                        <hr />
                        {Array(8)
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
                {/* <h6> 내가 가입한 방이 없습니다. </h6> */}
            </div>

        </div>
    );
}