import React from 'react'
import Api from './Api.jsx'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
const FoodItems = () => {
     const add = document.getElementById('cart1')
     let num=0;
        const [sum, setCount] = useState(num);

useEffect(() => {
   plus();
   minus();
   
},[sum] );
  
const plus = () => {
    setCount((num) => num+1);

}
const minus = () => {
    setCount((num) => num-1);

}


    return (<>
        <div className='cart' id="cart1">
            <i>Your order</i>
            {sum}
        </div>
        <div><div><button className = "buton btn btn-primary"  ><Link to = '/checkout'>Exit</Link></button></div></div>

        {

            Api.map((elem) => {

                const { id, imgsrc, category } = elem;

                return (
                   
                    <div className="row">
                        
                        <div className="col-lg-4">
                        
                            <div className="cardbox">
                                <p>{id}</p>
                                <img src={imgsrc} />
                                <p>{category}</p>
                                <button className='btn btn-primary' onClick={plus}>+</button>
                                <button className="btn btn-secondary" onClick={minus}>-</button>
                            </div>
                        </div>
                        </div>
                         
                       
                     
                       
                       

                )

            })


        }

    </>)
}
export default FoodItems;