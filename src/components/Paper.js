import React from 'react'
import { Row, Col} from './common'


const Paper = (props)=>{
    return(
        <section className="main card animated fadeIn">
            <Row aligment="center" screen="xs">
                <Col spaceXS="12" spaceMD="4">
                <h2>{props.member}</h2>
            </Col>
            <Col spaceXS="12" spaceMD="3">
                <img src={props.avatar} alt={props.avatar}/>
            </Col>
            
            
        </Row>
        <Row aligment="center" screen="xs">
            <Col spaceXS="12" spaceMD="3">
                <img src={props.gif} />
            </Col>
            <Col spaceXS="12" spaceMD="3">
                <p className="quote">
                    {props.quote}
                </p>
            </Col>
            
        </Row>
        </section>
        
        
    )
}

export default Paper