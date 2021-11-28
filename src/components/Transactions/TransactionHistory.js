import React from "react";
import s from "./Transactions.module.css";
function TransactionHistory({ items }) {
  return (
    <>
      <h2 className={s.title}>Transactions</h2>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.trTitle}>
            <th className={s.thTitle}>Type</th>
            <th className={s.thTitle}>Amount</th>
            <th className={s.thTitle}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className={s.row}>
              <td className={s.call}>{item.type} </td>
              <td className={s.call}>{item.amount} </td>
              <td className={s.call}>{item.currency} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TransactionHistory;
