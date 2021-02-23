import React from 'react'

class Aboutme extends React.Component{
    render(){
        return(
            <div className="Aboutme">
                <div className="AboutmeBoard">
                    <div className="AboutmeBoard_Title">자기소개</div>
                    <div className="AboutmeBoard_Content">
                        <div className="AboutmeBoard_Item">
                            <div className="Aboutme_Text">
                                <b>{`"성실함 S랭크의 개발자"`}</b>
                                <br/>
                                {`안녕하십니까 언잰가는 최고의 풀스택 개발자가 되는것이 목표인 박태광입니다.
                                개발자로서 가장 중요한 덕목이라 생각하는 것은 성실함이라고 생각합니다. 저는 옛날부터 지각하거나 결근, 결석하는 것을 매우 싫어하여 고등학교에서 개근하였고 현재 다니고 있는 학원에서 또한 지각 및 결석을 한 적이 없습니다. 그리고 전역 후에 일하였던 공사 회사에서도 다른 분들보다 성실하고자 하였고 회사에 출근하였을 때도 다른 사람들보다 일찍 출근하여 회사를 청소하고 자재를 챙겼습니다. 하지만 코로나 사태와 회사 사정으로 인해 저는 그만두게 되었고 이번 기회에 조금씩 배워둔 Java를 제대로 배워보고 싶어져 저는 학원을 다니면서 웹 프로그래밍을 공부하게 되었습니다. 처음에는 웹 프로그램의 흥미를 느낄 수 없었지만 Javascript, CSS를 배우면서 기능이 하나하나 추가가 되는 것을 보며 저는 웹 프로그래밍에도 흥미를 느끼게 되었고 더욱 열심히 공부하여 지금은 Java Servlet MVC Model 웹 애플리케이션 개발 Java Spring 프레임워크를 이용한 웹 애플리케이션 개발과 같은 기술도 사용할 수 있게 되었습니다.
                                `}
                            </div>
                        </div>
                        <div className="AboutmeBoard_Item">                            
                            <div className="Aboutme_Title">
                                <span>{`"자기 소개"`}</span>
                            </div>
                        </div>
                        <div className="AboutmeBoard_Item">
                            <div className="Aboutme_Title">
                                <span>{`"성장 과정"`}</span>
                            </div>
                        </div>
                        <div className="AboutmeBoard_Item">
                            <div className="Aboutme_Text">
                                <b>{`"도전 그리고 도전"`}</b>
                                <br/>
                                {`저는 군 복무를 마친 후 사회로 나와 전기공사 회사에서 3개월간 일을 하였습니다. 이 일을 하면서 힘든 업무 강도 잦은 주말 출근을 많이 하였었지만 이 일 만의 매력을 느낄 수 있었고 묵묵히 일을 하였습니다. 하지만 저는 더욱 성장하고 싶었지만 코로나 사태와 회사사정으로 인하여 그만두게 되었고 이 일을 경험 삼아 프로그래밍에 도전하게 되었습니다. 처음 HTML5, CSS3를 배우면서 프로그래밍에 즐거움을 배우고 Javascript, JAVA를 배우면서 처음으로 벽을 느끼고 매일 새벽까지 공부하면서 극복해내기도 하였습니다. 웹 프로그래밍을 배우면서 새로운 것을 배우는 것에 재미가 들렸던 저는 JQuery, Ajax, REST API 또한 계속해서 공부하였고 이 이를 활용하여 포트폴리오에 적용하여 사용할 수 있었습니다. 저는 더 나아가서 다양한 언어 다양한 개발 환경에서 개발할 수 있는 다재다능한 개발자가 되는 것이 목표입니다.
                                `}
                            </div>
                        </div>
                        <div className="AboutmeBoard_Item">5</div>
                        <div className="AboutmeBoard_Item">6</div>
                        <div className="AboutmeBoard_Item">7</div>
                        <div className="AboutmeBoard_Item">8</div>                
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutme