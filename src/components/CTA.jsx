import React from 'react'
import {Link} from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>

        <p className=' font-bold text-gray-50'>Tienes alguna idea o proyecto en mente? <br className='sm:block hiden'/> 
        Trabajemos juntos!
        </p>
        <Link>
        </Link>
        <Link to='/contact' className='btn'>
        Contacto
        </Link>

    </section>
  )
}

export default CTA