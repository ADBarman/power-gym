import React from 'react';
import './Breadcrumb.scss';


const Breadcrumb = ({title}) => {
    return (
        <div className="breadcrumb banner">
            <div className="container d-flex align-items-center justify-content-center">
                <h1 className="display-4 font-weight-bold text-white text-uppercase">{title}</h1>
            </div>
        </div>
    );
};

export default Breadcrumb;