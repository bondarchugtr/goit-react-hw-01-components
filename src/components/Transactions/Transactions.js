import React from 'react';
import PropTypes from 'prop-types';

export default function Transactions (prop){
const {type,amount,currency}=prop
    return(<tbody>
                <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            </tbody>
    )
}


Transactions.propTypes = {
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string,
}