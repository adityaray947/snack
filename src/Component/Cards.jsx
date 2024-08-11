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
                    <h3 className="card-title text-yellow-200">{item.name}</h3>
                    <div className="card-description">
                        <span className="company-name font-bold">{item.company_name || "No description"}</span>
                        <span className=" location ml-10 text-red-600 font-bold">{item.location}</span>
                    </div>
                    <div className="card-price font-bold">₹{item.price}</div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
