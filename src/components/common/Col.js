import React from 'react'


const Col = (props) =>{
    return(
        <div className={`col-xs-${props.spaceXS} col-md-${props.spaceMD} colo`}>
            <div className="box">
                {props.children}
            </div>
        </div>
    )
}

export {Col}