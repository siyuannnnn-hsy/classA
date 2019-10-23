import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        var {todo2} = this.props;
        return (
            <div style={{float:'left',marginLeft:'300px'}}>
                <h1>正在进行{todo.length}</h1>
                <form>
                    {
                        todo.map((item,idx) =><div key={item} className="div"><input onClick={(e) => {this.props.input(idx,e.target.value)}} type="checkbox" className="input" /><span className="span">{item}</span><button className="btn" onClick={(e) => this.props.del(idx,e)}>删除</button></div>)
                
                    }
                </form>
                <h1>已经完成{todo2.length}</h1>
                    {
                        todo2.map((item,idx) =><div key={item} className="div"><input onClick={(e) => {this.props.input2(idx,e.target.value)}} type="checkbox" checked className="input" /><span className="span">{item}</span><button className="btn" onClick={(e) => this.props.del2(idx,e)}>删除</button></div>)
                
                    }
            </div>
        )
    }
}
Todoing.propTypes = {
    todo : PropTypes.array,
    del : PropTypes.func
}
Todoing.defaultProps = {
    todo : [1,2,3,4]
}