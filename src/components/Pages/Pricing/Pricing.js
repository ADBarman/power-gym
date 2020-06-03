import React from 'react';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import PricingPlans from '../../PricingPlans/PricingPlans';
import Footer from '../../Footer/Footer';

const Pricing = () => {
    return (
        <>
            <Breadcrumb title="Pricing Plans"></Breadcrumb>
            <PricingPlans></PricingPlans>
            <Footer></Footer>
        </>
    );
};

export default Pricing;