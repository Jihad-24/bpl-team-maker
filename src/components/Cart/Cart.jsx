/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from 'react';
import "./Cart.css"

const Cart = ({ selectedActors,totalRemaining,totalCosting }) => {
    return (
        <div>
            <h3>Selected Actors : {selectedActors.length }</h3>
            <h3>Remaining Bugdet : {totalRemaining}</h3>
            <h3>Total Actors Cost : {totalCosting}</h3>
            <div className="name-list">
                <ol>
                {
                selectedActors.map((actor) => (
                    <li key={actor.id}>{actor.name }</li>
                ))
            }
           </ol>
           </div>
        </div>
    );
};

export default Cart;