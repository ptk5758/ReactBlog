import React from 'react';

class Sections extends React.Component{
    render(){
        return(
            <div>
                <Section1/>
                <Section2/>
            </div>
        );
    }
}

class Section1 extends React.Component{
    render(){
        return(
            <div className="Section">
                <div className="Section_1">
                    <h2>Main</h2>
                    <p>Hello User Document is TaeGwang Park portfolio</p>
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
                    <h2>Profile</h2>
                    <p>Hello User Document is TaeGwang Park portfolio</p>
                </div>             
            </div>
        );
    }
}

export default Sections;