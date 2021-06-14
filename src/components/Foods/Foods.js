import React from 'react';
import { connect } from 'react-redux';
import './style.css'

const Foods=({foodItems})=>
{

    return(
        <>
        <div className="foods">
            {
                foodItems.map(
                    (x)=>(
                      <div className="background">
                          <img src={x.image} alt="food pics"/>
                          <div className="footer"> 
                          <span style={{color:"green"}}>{x.name.toUpperCase()}</span>
                          <br></br>

                          <span style={{color:"red"}}>Rs:{x.price}/-</span>
                          <h3 style={{color:"blue"}}>City:<b>{x.city}</b></h3>

                          <p>{x.description}</p>
                          </div>

                      </div>  
                    )
                )
            }
        </div>
        </>
    )
}

const food=(store)=>
{
    return{foodItems:store.food.Foods}
}

export const FoodHoc=connect(food,null)(Foods)