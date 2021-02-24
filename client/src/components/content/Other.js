import React from 'react';
import eiyoungthum from '../../img/asdfasdfasdfsdfa.png';
import project1 from '../../img/freeptkmain.png';
import project2 from '../../img/22222.png';
import project3 from '../../img/game.png';

class Other extends React.Component{
    render(){
        return(
            <div>
                <div className="Other">
                    <div className="OtherContent">
                        <div className="OtherContentItem">
                            <div className="OtherContentItem_Title">관련 교육이수 과정 및 프로잭트</div>
                            <div className="OtherContentItem_Text">
                                <div className="ProjectAbout">
                                    <Project0/>
                                    <Project1/>
                                    <Project2/>
                                    <Project3/>                         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class Project0 extends React.Component{
    render(){
        return(
            <div className="ProjectItem">
                <div className="Project_IMG"><img src={eiyoungthum} /></div>
                <div className="Project_Text">
                    <div>
                        <span>프로잭트</span>
                        <span>이영산업기계 기술교육원</span>
                    </div>
                    <div>
                        <span>기간</span>
                        <span>2020-09-15 ~ 2021-03-19</span>
                    </div>
                    <div>
                        <span>내용</span>
                        <span>빅데이터 기반 선체생산관리 IT융합시스템(3기) 이수</span>
                    </div>
                </div>
            </div>
        );
    }
}

class Project1 extends React.Component{
    render(){
        return(
            <div className="ProjectItem">
                <div className="Project_IMG"><img src={project1} /></div>
                <div className="Project_Text">
                    <div>
                        <span>프로잭트</span>
                        <span>오픈마켓 쇼핑몰 사이트</span>
                    </div>
                    <div>
                        <span>기간</span>
                        <span>2020.12.31 ~ 2021.01.31</span>
                    </div>
                    <div>
                        <span>내용</span>
                        <span>Spring 프레임 워크를 이용한 Spring MVC 패턴기반의 웹 애플리케이션</span>
                    </div>
                    <div>
                        <span>기타</span>
                        <span>
                            <div>개발환경 - windows+JSP+MySQL+MariaDB+Tomcat (Spring MVC 패턴)</div>
                            <div>개발기술 - JAVA, spring, HTML5, CSS3, javascript, jQuery, REST API</div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

class Project2 extends React.Component{
    render(){
        return(
            <div className="ProjectItem">
                <div className="Project_IMG"><img src={project2} /></div>
                <div className="Project_Text">
                    <div>
                        <span>프로잭트</span>
                        <span>커뮤니티 및 오픈마켓 사이트</span>
                    </div>
                    <div>
                        <span>기간</span>
                        <span>2020.12.12 ~ 2020.12.24</span>
                    </div>
                    <div>
                        <span>내용</span>
                        <span>Java Servlet MCV 패턴 기반 웹 애플리케이션</span>
                    </div>
                    <div>
                        <span>기타</span>
                        <span>
                            <div>개발환경 - windows+JSP+MySQL+Servlet+Tomcat</div>
                            <div>개발기술 - JAVA, spring, HTML5, CSS3, javascript, jQuery</div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

class Project3 extends React.Component{
    render(){
        return(
            <div className="ProjectItem">
                <div className="Project_IMG"><img src={project3} /></div>
                <div className="Project_Text">
                    <div>
                        <span>프로잭트</span>
                        <span>커뮤니티 사이트</span>
                    </div>
                    <div>
                        <span>기간</span>
                        <span>2020.11.12 ~ 2020.11.19</span>
                    </div>
                    <div>
                        <span>내용</span>
                        <span>JSP 기반 웹 애플리케이션</span>
                    </div>
                    <div>
                        <span>기타</span>
                        <span>
                            <div>개발환경 - windows+JSP+MySQL+Tomcat</div>
                            <div>개발기술 - JAVA, spring, HTML5, CSS3, javascript, jQuery</div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Other;



