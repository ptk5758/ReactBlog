import React from 'react';
import { post } from 'axios';

class InputBoard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            file: null,
            fileName: "",
            name: ""
        }
    }

    submitEvent = (e) => {
        e.preventDefault();
        this.addAbility()
        .then(res => console.log(res));
    }

    addAbility = () => {
        const url = "/api/Abilitys";
        const formData = new FormData();
        formData.append("img", this.state.file);
        formData.append("imgName", this.state.fileName);
        formData.append("name", this.state.name);

        const config = {
            headers:{
                "Content-type": "multipart/form-data"
            }
        }

        return post(url, formData, config);

    }

    fileChange = (e) => {
        console.log(e.target.files[0].name);
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        });
    }

    handlevalueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        console.log(nextState);
        this.setState(nextState);
    }

    render(){
        return(
            <form className="inputBoard" onSubmit={this.submitEvent}>
                <div>
                    <span>이름</span>
                    <span><input type="text" name="name" value={this.state.name} onChange={this.handlevalueChange}/></span>
                </div>
                <div>
                    <span>파일</span>
                    <span><input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.fileChange}/></span>
                </div>
                <div><button>전송</button></div>
            </form>
        );
    }
}

export default InputBoard;