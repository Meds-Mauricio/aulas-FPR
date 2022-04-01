import React from 'react'


export default function Link({happy}) {

  return (
    
    <section className='test'>
        {happy && <a href='/'>Peace</a>}        
    </section>
  )
}

