import React from 'react';

class MainContent extends React.Component{    
    render(){
        return(
            <div className="MainContent">                
                <div className="MainContentTop">메인</div>
                <Profile myAbility={this.props.myAbility}/>
            </div>
        );
    }
}

class Profile extends React.Component{
    render(){
        return(
            <div className="MainContentProfileBoard">
                <div className="ProfileItem"><ProfileImg/></div>
                <div className="ProfileItem"><ProfileInfo/></div>
                <div className="ProfileItem"><ProfileAbility myAbility={this.props.myAbility}/></div>
                <div className="ProfileItem"><ProfileProject/></div>
            </div>
        );
    }
}

class ProfileProject extends React.Component{
    render(){
        return(
            <div>
                <h1>ㅇㅇ</h1>
            </div>
        );
    }
}

class ProfileAbility extends React.Component{
    render(){
        return(
            <div className="ProfileAbility">
                <div>기술 및 프레임워크</div>
                <div className="ProfileAbilityBoard">
                    {this.props.myAbility ? this.props.myAbility.map((myAbility,index) => {
                        return <Ability name={myAbility.name} key={index} img={myAbility.img}/>
                    }) : <h1>로딩중</h1>}
                </div>
            </div>
        );
    }
}
class Ability extends React.Component{
    render(){
        return(
            <div className="ProfileAbilityBoardItem">
                <div><img src={this.props.img}/></div>
                <div>{this.props.name}</div>
            </div>
        );
    }
}

class ProfileInfo extends React.Component{
    render(){
        return(
            <div className="ProfileInfo">
                <div>
                    <span>이름 : </span>
                    <span>박태광</span>
                </div>
                <div>
                    <span>나이 : </span>
                    <span>23</span>
                </div>
                <div>
                    <span>이메일 : </span>
                    <span>pty5758@naver.com</span>
                </div>
                <div>
                    <span>깃허브 : </span>
                    <span><a href={"https://github.com/ptk5758"}>https://github.com/ptk5758</a></span>
                </div>
            </div>
        );
    }
}

class ProfileImg extends React.Component{
    render(){
        return(       
            <img src={"https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/UVBJZL3RXAB36BDSHVM3MW2WNY.jpg"} />    
        );
    }
}

export default MainContent;



//                    <div className="ProfileAbilityBoardItem">
//                        <div><img src={"data:image/png;base64,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"} /></div>
//                        <div>JAVA</div>
//                    </div>
//                    <div className="ProfileAbilityBoardItem">
//                        <div><img src={"data:image/png;base64,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"} /></div>
//                        <div>Spring</div>
//                    </div>
//                    <div className="ProfileAbilityBoardItem">
//                        <div><img src={"data:image/png;base64,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"} /></div>
//                        <div>HTML</div>
//                    </div>
//                    <div className="ProfileAbilityBoardItem">
//                        <div><img src={"data:image/png;base64,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"} /></div>
//                        <div>CSS</div>
//                    </div>
//                    <div className="ProfileAbilityBoardItem">
//                        <div><img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEX///8AdY/ykREAbYkAaocAco0Ac44Ab4vxigDyjgDxiwAAaIUAa4fxiADyjwCxzdX0+fr//PiWvMf86dZso7Ps9PaQuMTd6+96qrn+9+71rmL4yZr98+j97d3S4ue40NiGrrv506/4w5D2uHjznz30pU33vYL73sPzmSz62bkdfpZlnq+lxc/H3OI0hpxRlKf1sWv50ajzmjD1qVb4yJn1r2T2tXNFjqJJlagAX38bj9FBAAAIPklEQVR4nO2aaVejShCGBRo6LAkE2ZxxAPfIqrNcxv//x243S1iMcUZhIH3q+aAeTHKq0t1Vb1XX2RkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIBvcxswOVdf57Zgar6tt3ObMDVr5hdxs5vbgqnh15dzmzAx/OpqbhMmRlau5zZhWi7W8tPcNkzLw2rzZW4bpuValhn3cLdhfJeer3n5fm4jJuWLzCtMZ4tva55fM11e3G54np/biCl5XvG8fDO3FRNC9yi/Pp/bjOnY7sge3dzObcaE3Ml0CR/mNmM6nhTi4OZubjOm44ZEGaZTxVPpIMOV0xe6RXmZ2TCzvS0d5DcXc1syERc7uXSQ2VR4Lm8qB1lNFFdljCEODmqK8ytG9uz1unbwuft0+3z7OJdFI/Pj0Ape3K9Z0d8X3+Xawc6KEf82rMScJsbwqzbIbK9Xa2Z6UY/1Edwo7ZJdbRR27ma+1g7K/P6m4vJ2tVGYSRpNEJV3+xvDK2XDK6wcwbOb2kGlrZfuyaMVMw7e11lC+bF/dKewpGuaLbraN7i3tyRxrJgJMleNg21ipw7KP46856T41pzB9oqiLBBlRpQovX6pHGwz+zP1WWamwv9Z1budiv6ifMLMoMm2kTKtQ7+oPGXn4vBaGRa8l6XP7Fw61VKms2L3ZYXBTLI/rzbpqjM2U0UeZgZpvlaNw1/tk2qTsuPhf/KgIjx7qBQcM7v0qfRw3XlyVYUehZXOTLWG3fm8xzo//jebTeNyQz3sXRPWHvLKbDaNS5UOu2t43shURrZpHVc6T7Z1P4qV+9/L0sNV99GvAz3FU6YcKeklv4d6m7IyafKsDPJh7TQ9iWzU+FvlVS3YxBpeYaMGptF087336Et9ElkZTCyjSm8m4aL2kJVRBRpZBkOWz3V3kRVhc6+86lk0wWbFSCvjVh4uYtN/WzHSE97u5F4NfFbrVWYSBgktvDyY8KrrYOXnTBaNzsVOHvTw7zYsye+zckyoP0BTFcJrNnJ+xf26NwRVChvGhhMf17tObtjSlMjaXNTlbUe8bWWW+t57frZVLwmmG/5gvneDxHGS1PhnVn0S2+/aerkPqI/KMEXW6J4VqQhr2HKnt+5TGL4e5lEUJ/7B1biTj0wpuLnGSVh1JjPu09iBl6EXbAVvbrXz9eZo09tEHMdp1vimjYGdZKqA1Tg99qLd3Tua2xGIiygZ07CRMCwNS5wk+Udfdf7+BXAmcZwk2GPZNRo2h8l3z4nxpz9Jp4uIl3cUy/NDTfP+8ts30sEbbOqhFI1n2kjYItmjpYuoMA9H0dfv8RMrExAeHDqRfowwgY2fxPBw7aOIkcrloZ66hx01bDfVHStDCGGRvkWNeoe3/BRtiYnfNiMkiNVmJW4Kgoa5KMstz3FMiuOEVl5kkYSQIFS+ke1IXpcnXXdsXD6ezY3j2LpFvMSNm8RSSRRxiyjWjtXfgiZkXjD4DJ+eaDGfxf4/ww6cOCK2E0e77nSQiNNkgaP44IF16BoK+r83/O8w3DRx4iLiBBXRTVmBNIRUHBVxmARvHNKzs+pL+KfWfg4SV/w0DXRdD9LUd+33IkiiUU2z+CX8OAbd2HjJp7Di46E+J1EKZyOaMgFGEGYf1lyeQB1cYi7ck+YkW3xYcoUkU6DPS9sJsQtEc6H0wUXwECcusnBqiXCdy8339bedOv0XGYUgoWLhLYysUTNYyEL9TWNdKgqIJBC65zUlAi5afJawI6GRMcRehEhy95yE5kKCniRmGOeZpO6FHZb2e9JT0fL9oyQRwlJfoOFG0lTKtP2vhFFkVkc25V7yo92PJeGHtF3Tiu/DENWtRmFdNbk5dhZ+/gYYqZNHAtmLtEbqq+9KdQtRHgZtnNGPN3eWiuEGiUfEN1YJRH4j8kuIstgzgz/sAZwQhmETmHMLAJaOqy+vpzsiRpIhNZzbignxRardsMNs8LRR0/3Ok3SYIww7TSxu6RXEYVw9/F32Pl21lWYIiVGRxx7FIqo7kkrVLSLrxBbYTXL1ZX9x6Kl9nVY3hXvtYKye0Cb2w4hIsq7Buii8q7yROGx2LxVaLnFCPqjpg4IUS4c73uXm5axTqZUSTqNh03v9HyP1MlFA+5JQqq4wSF3B5ebJ1BJGoZUn7c3eGgmcjkcDDCGjEcfU/WMdnGBpreC68YTDkT7P4NRlrW4i1NFypB61G4nCssKPh5vQX4wwOmE4RCmoy5rBSNvUjqxPbi83lMj3tbhpKEeVWh8j58NO+makYvoZ5pjWjUIaoX1qlzCS8j8dw9hj+0kulQ1IImMbtbqovmlQoE7nsBnDOJoSKmzaqMo5tXo7EUHeXo0XC9urdlIIXS/pGAZJ69Fvy0mqa19aX5S9KNdPA910aAeOLBltNlav18S4jaEppy5PsRqpU6CyaOg0tEsFU17dl41E+gtpxPdO41sizqG+xHFjVV2qoKNjpWRl0NszGD3vBYSkKHaC3n52Yw2jZaXEIaTA1R0rz0SVLpjQjtFUf5A1JQsqRrnl6K+KY6LZEEbZqRTH5QiGntBRqNCzLMsLHTNJdHosD78h9UQBC9yiwuh42LolaRifyPXaX2L4icWpZDtrkrcs1X0I9+/ukNzAtDKRJg0BReFSA2gf3yy4LPZIGnzzHobkRT9IQqvg6E0wLr2L374PXyKuHhZYfVEFsZy8DCs8K/5dZFGpeqqkKJCfYmaZwxHhE4HeHYbl3eGLWoEqNKoAqO9e8ifS7hQgSYMO7tHJPTqv8Ha2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDp+R++aY7u12rwTQAAAABJRU5ErkJggg=="} /></div>
//                        <div>Javascript</div>
//                    </div>