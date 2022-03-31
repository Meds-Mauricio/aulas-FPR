import React from 'react'

export default function Card({texto, link}) {

  return (
    
    <section className='cartão'>
        <p>{texto}</p>
        { link && <a>Surpresa</a> }
    </section>
  )
}

