import React from 'react';
import "../Style/Card.css";

function Cards({ item }) {
    return (
        <div className="card-container">
            <div className="card">
                <img
                    src={item.image}
                    alt={item.name}
                    className="card-image"
                />
                <div className="card-overlay"></div>
                <div className="card-content">
                    <h3 className="card-title">{item.name}</h3>
                    <div className="card-description">{item.company_name || "No description"}</div>
                    <div className="card-price">₹{item.price}</div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
