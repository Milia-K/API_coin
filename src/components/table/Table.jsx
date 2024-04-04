import React from 'react'
import './row.css'

function Table(props) {

    const {id, symbol, name, index} = props;

    const tableClass = index < 5 ? 'blue-background' : '';
    const rowClass = (symbol === 'inv') ? 'green-background' : '';

  return (
        <div className={`row ${tableClass} ${rowClass}`}>
        <p className='item'>{id}</p>
        <p className='item'>{symbol}</p>
        <p className='item'>{name}</p>
    </div>
  )
}

export default Table