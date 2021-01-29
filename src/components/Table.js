import React from 'react'
import numeral from 'numeral'

function Table({ countries }) {
    return (
        <div className="table">
            {
                countries.map(({country, cases}) => (
                    // type tr>td*2 to get 1 tr with 2 td's
                    <tr>
                        <td>{country}</td>
                        <td>
                            <strong>{numeral(cases).format()}</strong>
                        </td>
                    </tr>
                ))
            }
        </div>
    )
}

export default Table