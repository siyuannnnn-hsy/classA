import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import './todo.css';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[],
            todo2:[]
        }
    }

    componentDidMount(){
        let todoLocal = JSON.parse(localStorage.getItem("add"));
        let todoLocal2 = JSON.parse(localStorage.getItem("add2"));
        if(todoLocal){
            this.setState((state)=>{
                return{
                    todo:todoLocal
                }
            })
        }
        if(todoLocal2){
            this.setState((state)=>{
                return{
                    todo2:todoLocal2
                }
            })
        }
    }

    addItem = (data)=>{
        this.setState({
            todo: [...this.state.todo,data]
        },()=>{
            localStorage.setItem('add',JSON.stringify(this.state.todo))
        })
    }

    delItem = (idx)=>{
        this.setState((state,props)=>{
            console.log(state.todo);
            return {
                todo: state.todo.filter((item,index)=>idx!==index)
            }
        },()=>{
            localStorage.setItem('add',JSON.stringify(this.state.todo))
        })
    }

    delItem2 = (idx) =>{
        this.setState((state,props)=>{
            return {
                todo2:state.todo2.filter((item,index)=>idx!==index)
            }
        },()=>{
            localStorage.setItem('add2',JSON.stringify(this.state.todo2))
        })
    }

    input = (idx) => {
        this.setState({
                todo2 : [...this.state.todo2,this.state.todo[idx]] ,
                todo : this.state.todo.filter((item,index)=>idx!==index) 
        },()=>{
            localStorage.setItem('add',JSON.stringify(this.state.todo))
            localStorage.setItem('add2',JSON.stringify(this.state.todo2))
        }) 
    }

    input2 = (idx) => {
        this.setState({
                todo2 : this.state.todo2.filter((item,index)=>idx!==index),
                todo : [...this.state.todo,this.state.todo2[idx]]  
        },()=>{
            localStorage.setItem('add',JSON.stringify(this.state.todo))
            localStorage.setItem('add2',JSON.stringify(this.state.todo2))
        })
    }

    render() {
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} del2={this.delItem2} 
                        todo={this.state.todo} todo2={this.state.todo2} 
                        input={this.input} input2={this.input2}/>
            </div>
        )
    }
}