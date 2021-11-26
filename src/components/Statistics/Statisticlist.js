import React from 'react';
import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function StatisticList({ items }) {
    return (
        < section className={s.statistics} >
          <h2 class="title">Upload stats</h2>
            <ul className={s.statlist}>
                {items.map(item => (
                    <li key={item.id}>
                        <Statistics
                            label={item.label}
                            percentage={item.percentage}
                        />
                    </li>
                ))}
            </ul>
        </section >
    )
}
StatisticList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })),
}

export default StatisticList;