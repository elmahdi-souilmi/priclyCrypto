import React from 'react'
import './contentHolder.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import sketch from './sketch.png';
import Button from 'react-bootstrap/Button'
import { FaBell } from 'react-icons/fa';

export default function contentHolder() {
    return (
        <div className="holder">
        <Row>
            <Col xs={7} className="main" >
            <p className="description1"> Get notified when a coin goes above or below a price target. </p>
            <p className="description2"> Send me an email <input className="emailInput" type="email" placeholder="email" /> as soon as  
            <br> 
            </br><select>
             <option> BTC</option> 
             <option> ETH</option> 
             <option> ADA</option> 
             <option> DOGE</option> 
             </select>
               goes
            <select>
             <option> above</option> 
             <option> below</option> 
             </select>
                the price of 
             <input className="valueInput" type="number" placeholder="00.00" /> $
             </p>
             <Button className="button" variant="primary"> <FaBell  /> Set Alert</Button>
            </Col>
            <Col xs={5} className="pictureHolder" ><img className="sketch" src= {sketch} alt="sketch"/> </Col>
        </Row>
        </div>
        
    )
}
