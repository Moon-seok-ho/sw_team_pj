import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    return(
        <div>
            <h1>HomePage.jsx</h1>
            <Link to="/">
                <h1>페이지 이름</h1>
            </Link>
            <Link to="/writetest">
                <h1>일기 쓰러 가기</h1>
            </Link>
            <Link to="/diaries/id/date">
                <h1>10일</h1>
            </Link>
            /*
            <Link to="/">
                <button onclick="logout()">로그아웃</button>
            </Link>
            */
        </div>
    )
}
/*
function logout() {
    localStorage.removeItem("token");
}
*/

export default HomePage;