import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="headerContent">
                        <div onClick={()=>{
                            window.location.reload();
                        }}>DOC LOGO</div>
                        <div onClick={function(){
                            this.props.adminGo();
                        }.bind(this)}>Admin System</div>
                    </div>
                    <Nav
                        onChangePage={this.props.onChangePage}
                    />
                </header>                
            </div>
        );
    }
}

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <a href="/main" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage("main");
                }.bind(this)}>메인</a>
                <a onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage("aboutme");
                }.bind(this)}>자기소개</a>
                <a onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage("other");
                }.bind(this)}>기타소개</a>
            </nav>
        );
    }
}

export default Header;