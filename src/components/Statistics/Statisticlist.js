import React from 'react';
import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';

function StatisticList({ items }) {
    return (
        < section className=" statistics" >
            <ul className="stat-list">
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