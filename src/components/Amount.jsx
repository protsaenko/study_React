import React, {useState} from 'react';

const Amount = (props) => {
    let [amount, setAmount] = useState(0);
    const onIncrement = () => setAmount(amount + 1);
    const onDecrement = () => setAmount(amount - 1);
    return (
        <div>
            <span>US Dollar: {amount} </span>
            {props.amountOne(amount)}
            <button type='button' onClick={onIncrement}>+</button>
            <button type='button' onClick={onDecrement}>-</button>
            {props.amountTwo(amount)}
        </div>

    );
};

export default Amount;