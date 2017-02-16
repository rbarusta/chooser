import React from 'react'


const Button = (props) =>{
    
    return (
        <a onClick={props.Click.bind(this)} className={'waves-effect waves-light btn '+props.color}>{props.children}</a>
    )
}

export {Button}