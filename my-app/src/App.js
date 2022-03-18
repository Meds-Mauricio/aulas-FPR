import React from 'react'

import { Filter } from './components/Filter'
import { Map } from './components/Map'

export default function App() {
    return (
        <>
            <section className='section'>
                <h1>Aula presencial - Map</h1>
                
                <Map />
            </section>

            <section className='section'>
                <h1>Aula filter</h1>

                <Filter />
            </section>
        </>
    )
}
