import React from 'react'


const Row = (props) =>{
    return(
        <div className={'row '+props.aligment+'-'+props.screen}>
            {props.children}
        </div>
    )
}

export { Row }