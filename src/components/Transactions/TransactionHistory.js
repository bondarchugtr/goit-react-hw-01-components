import React from 'react';
import Transactions from '../Transactions/Transactions';


function TransactionHistory ({items}){
    return (
            <>
                <h2 className="title">Transactions</h2>
                <table class="transaction-history">
                    <thead>
                        <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        </tr>
                    </thead>

                    <tbody >
                        {items.map(item =>(
                            <tr key ={item.id}>
                              <Transactions
                              type={item.type}
                              amount={item.amount}
                              currency={item.currency}
                              />  
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>)
}

export default TransactionHistory
