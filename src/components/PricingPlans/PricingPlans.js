import React, { useEffect, useState } from 'react';
import Plan from './Plan/Plan';

const PricingPlans = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://power-x.herokuapp.com/api/v1/pricing')
        .then(res => res.json())
        .then(data => setPackages(data));
    }, [])

    //console.log(packages);
    return (
        <div className="container my-5 ">
            <div className="my-5 text-center">
                <h2 className="text-uppercase font-weight-bolder"><span className="text">Choose the offer</span> That suits you</h2>
                <p className="col-md-5 mx-auto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deserunt fugit veniam iusto.
                </p>
            </div>
            <div className="row ">
                {
                    packages.map(plan => <Plan plan={plan}/>)
                }
            </div>
        </div>
    );
};

export default PricingPlans;