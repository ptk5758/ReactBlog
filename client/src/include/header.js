import React, { Component } from 'react';

class Header extends React.Component{
    render(){
        return(
            <header>
                <Nav/>
            </header>
        );
    }
}

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <div>메인</div>
                <div>자기소개</div>
                <div><ProfileImg/></div>
                <div>기타소개</div>
                <div>프로잭트</div>
            </nav>
        );
    }
}

class ProfileImg extends React.Component {
    render(){
        return(
            <img className="ProfileImg" src={"https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg"} />
        );
    }
}

export default Header;