import React from 'react'

export default function Esporte({ baskete, boxe, futebol }) {
    return (
        <div>
            {futebol &&
                <span>{baskete}</span>
            }
            <span>{boxe}</span>
        </div>
    )
}
