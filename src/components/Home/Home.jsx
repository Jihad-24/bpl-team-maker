/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Home.css"
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';

const Home = () => {

    const [allActors, setAllactors] = useState([]);
    const [selectedActors, setSelectorActors] = useState([]);
    const [totalRemaining, setTotalRemaining] = useState(0);
    const [totalCosting, setTotalCosting] = useState(0);

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllactors(data));
    }, []);

    const handleSelectorActor = (actor) => {
        const isExist = selectedActors.find((item) => item.id == actor.id);
        let cost = actor.salary;

        if (isExist) {
          return   Swal.fire({
            title: 'Already Booked',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        }
        else {
            selectedActors.forEach((item) => {
                cost = cost + item.salary;
            });
            const totalremaining = 20000 - cost;
            if (cost > 20000) {
               return Swal.fire({
                    title: "You Don't Have Enough Money!",
                    icon: 'error',
                    confirmButtonText: 'OK',
                  });
            }
            else {
                setTotalCosting(cost);
            setTotalRemaining(totalremaining);
            setSelectorActors([...selectedActors, actor]);
            }
        }
        
    };

    return (
        <div className='container'>
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map(actor => (
                            <div key={actor.id} className="card">
                    <div className="card-image">
                        <img className='photo' src={actor.image} alt="" />
                    </div>
                    <h2>{actor.name}</h2>
                    <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, ipsum?</small></p>
                    <div className="info">
                        <p>Salary : ${actor.salary}</p>
                        <p>{actor.role}</p>
                    </div>
                    <button className='card-btn' onClick={()=>handleSelectorActor(actor)}>Select</button>
                </div>
                        ))
                }
                </div>
                <div className="cart">
                    <Cart selectedActors={selectedActors} totalRemaining={totalRemaining} totalCosting={totalCosting}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Home;