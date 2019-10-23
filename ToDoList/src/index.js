import React ,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Todolist from './Todolist/Todolist';

let id = 1234;

ReactDOM.render(
    <Todolist/>,
    document.getElementById('root')
);


// var div = document.getElementById('root');
// div.className = 'active';
