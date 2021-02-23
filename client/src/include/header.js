import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <div className="headerContent">
                        <div>DOC LOGO</div>
                        <div>Admin System</div>
                    </div>                
                </header>
                <Nav
                    onChangePage={this.props.onChangePage}
                />
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
                }.bind(this)}>자기소게</a>
                <a onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage("other");
                }.bind(this)}>기타소게</a>
            </nav>
        );
    }
}

export default Header;