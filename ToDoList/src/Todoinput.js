import React, { Component } from 'react'
import './todo.css'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            a : '',
            b : '',
            c : ''
        }
        
    }
    handleInput = (e) => {
        if(e.keyCode === 13){//按下回车键
            this.props.add(e.target.value);
            this.state.a = '';
        }
        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    componentDidMount(){
        console.log(this);
        this.a.focus();
    }
    render() {
        return (
            <div>
                <div className="head">
                    <div className="a">
                        <span>ToDoList</span>
                        <input className="inp" id="inp" ref={(inp)=>{this.a=inp}} 
                                name='a' type="text" onChange={this.handleChange} 
                                value={this.state.a} onKeyDown={this.handleInput}
                                placeholder="添加ToDo"/>
                    </div>
                    <div className="b">
                    
                    </div>
                </div>
            </div>
        )
    }
}
