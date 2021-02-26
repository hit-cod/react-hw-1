import Proptypes from 'prop-types';
import s from './Transactions.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.tableHeads}>
        <tr>
          <th className={s.tableHead}>Type</th>
          <th className={s.tableHead}>Amount</th>
          <th className={s.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={s.tableData}>{item.type}</td>
            <td className={s.tableData}>{item.amount}</td>
            <td className={s.tableData}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

TransactionHistory.propTypes = {
    items: Proptypes.array.isRequired
}

export default TransactionHistory;
