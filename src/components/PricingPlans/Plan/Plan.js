import React from 'react';
import { Link } from 'react-router-dom';
import './Plan.scss';

const Plan = (props) => {
    const {plan, features, price ,id , image} = props.plan;
    return (
        <div className="plan card p-5 text-white"
        style={{
            backgroundImage: `url(${image})`
        }}
        >
            <h6 className="text text-uppercase text-center">Billed Monthly</h6>
            <h2 className="text-center">{plan}</h2>
            <h1 className="text text-center">${price}</h1>
            <ul className="my-5">
                {
                   features.map(feature => <li>{feature}</li>)
                }
            </ul>
            <Link className="btn btn-primary" to={'/purchase/' + id }> Purchase </Link>
        </div>
    );
};

export default Plan;