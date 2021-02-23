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
                                <span>{`"5년 이내의 목표"`}</span>
                            </div>
                        </div>
                        <div className="AboutmeBoard_Item">
                            <div className="Aboutme_Text">
                                <b>{`"사람의 가치는 인성이고 능력은 실력이다"`}</b>
                                <br/>
                                {`저의 목표는 다양한 언어를 어떠한 개발 환경에서 개발할 수 있는 풀스택 개발자가 되는것이 목표입니다.                                
                                현재 저는 실무 경험이 부족하지만 확실한 목표가 있기에 실무 경험을 통한 공부를 하게 된다면 더욱 빠르게 성장할 수 있을 것입니다.
                                우선 실무를 경험해보고 저의 능력을 인정받을 수 있게 되었다면 저는 평소부터 배워보고 싶었던 TypeScript를 공부할 것입니다. 그리고 이를 통해 React뿐만 아니라 Vue.js, Angular.js 와 같은 자바스크립트 프레임 워크를 공부하여 웹 애플리케이션을 개발할 수 있는 개발자가 되는 것이 5년 이내의 목표입니다.
                                `}
                            </div>
                        </div>
                        <div className="AboutmeBoard_Item">
                            <div className="Aboutme_Title">
                                <span>{`"회사에서의 되고 싶은 나의 모습"`}</span>
                            </div>
                        </div>
                        <div className="AboutmeBoard_Item">
                            <div className="Aboutme_Text">
                                <b>{`"같이있으면 소모가아닌 충전되는 동료"`}</b>
                                <br/>
                                {`저는 군대와 사회에서 전기공사를 했었습니다. 군대에서는 주로 가로등을 설치하였고 사회에서는 조명설비 및 공장 설비 전기공사를 하였습니다. 공사는 정말 몸이 힘든 일이었지만 같이 일하면 즐거운 사람도 있고 그렇지 않은 사람도 있었습니다. 저는 아무리 힘든 일이더라도 함께 일하면 즐거운 사람과 일을 하며 즐거움과 보람을 느꼈고 저 또한 이러한 사람이 되자 생각하였습니다. 만약 취업하게 되어 같이 일할 수 있게 된다면 같이 일하면 마음이 소모가 아닌 충천이 될 수 있는 사람이 되도록 하겠습니다.
                                `}
                            </div>
                        </div>               
                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutme