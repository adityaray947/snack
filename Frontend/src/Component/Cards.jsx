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
                    <div className="card-description">
                        <span className="company-name">{item.company_name || "No description"}</span>
                        <span className="location">{item.location}</span>
                    </div>
                    <div className="card-price">₹{item.price}</div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
