import React from 'react';
import './Heros.css'
const Heros = (props) => {

    const { img, name, characterName, age, fee } = props.heros;
    return (
        <div className="col-md-4 g-4">
            <div className="col">
                <div className="card card-bg h-100 text-light">
                    <img src={img} className="card-img-top mt-2  m-auto image" alt="..." />
                    <div className="card-body ">
                        <h4 className="">{name}</h4>
                        <h6 className="card-text">as {characterName}</h6>
                        <h6>Age:{age}</h6>
                        <h6>Salary:$ {fee}</h6>
                    </div>
                    <button
                        onClick={() => props.handleAddHeros(props.heros)}
                        className="btn btn-success w-50 m-auto mb-2"><i className="fas fa-plus-circle"></i>  Add To Cart</button>
                </div>
            </div>

        </div >
    );
};

export default Heros;