import React from 'react';
import Amount from "./Amount";

function Euro(props) {
    return <div>Initial amount {props.amount} has been converted to {props.amount / 2} Euro</div>
};

function Pound(props) {
    return <div>Initial amount {props.amount} has been converted to {props.amount / 3} pound</div>
};

const Converter = () => {
    return (
        <div>
            <Amount>{
                (amount) => (<div><Euro amount={amount}/>
                    <Pound amount={amount}/></div>)
            }
            </Amount>
        </div>
    );
};

export default Converter;