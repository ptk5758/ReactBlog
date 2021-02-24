import React from 'react';
import profileimg from '../../img/park.jpg';
import mysqlpng from '../../img/mysql.png';
import mariadbpng from '../../img/mariadb.png';

class Sections extends React.Component{
    render(){
        return(
            <div>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
            </div>
        );
    }
}
class Section1 extends React.Component{
    render(){
        return(
            <div className="Section">
                <div className="Section_1">
                    <h2>Hello User</h2>
                    <p>박태광 의 포트폴리오 사이트입니다.</p>
                </div>
            </div>
        );
    }
}

class Section2 extends React.Component{
    render(){
        return(
            <div className="Section">
                <div className="Section_2">
                    <div className="Section_2_Title">
                        <h1>ProFile</h1>
                    </div>                    
                    <div className="Section_2_ImgBoard">
                        <div className="Section_2_ImgBoard_Item">
                            <div><img src={profileimg}/></div>
                            <div>실전경험은 부족하지만 누구보다 빠르게 배우고 성장할수있는 초특급 인재 박태광입니다.</div>
                        </div>
                    </div>
                    <div className="Section_2_Content">
                        <div className="Section_2_Content_Item">
                            <span>이름</span>
                            <span>박태광</span>                            
                        </div>
                        <div className="Section_2_Content_Item">
                            <span>연락처</span>
                            <span>010-5530-4542</span>                            
                        </div>
                        <div className="Section_2_Content_Item">
                            <span>나이</span>
                            <span>23</span>  
                        </div>
                        <div className="Section_2_Content_Item">
                            <span>이메일</span>
                            <span>pty5758@naver.com</span>  
                        </div>
                        <div className="Section_2_Content_Item">
                            <span>깃허브</span>
                            <span><a href={"https://github.com/ptk5758"}>https://github.com/ptk5758</a></span>
                        </div>
                        <div className="Section_2_Content_Item">
                            <span>취미</span>
                            <span>자전거, 게임, 노래방</span>
                        </div>
                        <div className="Section_2_Content_Item" style={{fontFamily:"도트"}}>
                            <span>Level</span>
                            <span>신입</span>
                        </div>
                        <div className="Section_2_Content_Item" style={{fontFamily:"도트"}}>
                            <span>Lenk</span>
                            <span>SSS</span>
                        </div>
                        <div className="Section_2_Content_Item" style={{fontFamily:"도트"}}>
                            <span>Status</span>
                            <span>STR:4   DEX:4   INT:4   LUK:4</span>
                        </div>                        
                    </div>
                </div>             
            </div>
        );
    }
}

class Section3 extends React.Component{
    render(){
        return(
            <div className="Section">
                <div className="Section_3">
                    <div className="Section_3_Title">
                        <div>Skill</div>
                    </div>
                    <div className="Section_3_Content">
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><i className="fab fa-html5 fa-7x"></i></div>
                            <div className="iconText">HTML5</div>
                        </div>
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><i className="fab fa-css3-alt fa-7x"></i></div>
                            <div className="iconText">CSS3</div>
                        </div>
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><i className="fab fa-js fa-7x"></i></div>
                            <div className="iconText">Javascript</div>
                        </div>
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><i className="fab fa-java fa-7x"></i></div>
                            <div className="iconText">Java</div>
                        </div>
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><i className="fas fa-leaf fa-7x"></i></div>
                            <div className="iconText">Spring</div>
                        </div>
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><i className="fab fa-github fa-7x"></i></div>
                            <div className="iconText">github</div>
                        </div>
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><i className="fab fa-php fa-7x"></i></div>
                            <div className="iconText">php</div>
                        </div>
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><i className="fab fa-react fa-7x"></i></div>
                            <div className="iconText">React</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Section4 extends React.Component{
    render(){
        return(
            <div className="Section">
                <div className="Section_3">
                    <div className="Section_3_Title">
                        <div>Database</div>
                    </div>
                    <div className="Section_3_Content">
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><img src={mysqlpng} /></div>
                            <div className="iconText">MySQL</div>
                        </div>
                        <div className="Section_3_Item">                            
                            <div className="iconimg"><img src={mariadbpng} /></div>
                            <div className="iconText">MariaDB</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sections;