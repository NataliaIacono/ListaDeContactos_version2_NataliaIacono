import React from 'react';
import '../../styles/card.css';

const Card = ({ name, address, phone, email }) => {
    return (
        <div className="container d-flex">
            <div>
                <img className="imagenContacto" src="https://relojinteligente.org/attachments/bart-gif.4164/" alt="Bart"></img>
            </div>
            <div>
                <h2>{name}</h2>
                <h6>
                    <i className="fa-solid fa-location-dot"></i>
                    {address}
                </h6>
                <h6>
                    <i className="fa-solid fa-phone"></i>
                    {phone}
                </h6>
                <h6>
                    <i className="fa-solid fa-envelope"></i>
                    {email}
                </h6>
            </div>
        </div>
    );
};

export default Card;
