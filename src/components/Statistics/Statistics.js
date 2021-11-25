import React from 'react';
import PropTypes from 'prop-types';
export default function Statistics(props) {
    const { label, percentage} = props
    return <section className="statistics">
        <ul className="stat-list">
            <li className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
            </li>
        </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}