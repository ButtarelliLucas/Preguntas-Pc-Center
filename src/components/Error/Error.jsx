import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <div>Error 404</div>
        <Link to="/">
            <a
              href="#"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orenge-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Volver al inicio
            </a>
        </Link>
    
    </div>

  )
}

export default Error