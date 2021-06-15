import React from 'react'
import  './cryptoPrice.css'
export default function cryptoPrice(props) {
    return (
  
        <>
            <input className="checkbox-budget" type="radio" name="budget" id={props.number} />
						<label className="for-checkbox-budget" for={props.number}>
                        <span>{props.name}</span>							
							<span data-hover={props.price}>{props.price} </span>
						</label>
                       </> 
        
    )
}
