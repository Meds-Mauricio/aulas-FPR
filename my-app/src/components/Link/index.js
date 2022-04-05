import React from 'react'


export default function Link({happy}) {

  return (
    happy &&
    <section className='test'>
         <a href='/'>Peace</a>        
    </section>
  )
}

