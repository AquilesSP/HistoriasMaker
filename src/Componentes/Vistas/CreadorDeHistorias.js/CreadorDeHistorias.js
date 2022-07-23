import React, { useState } from 'react'
import "./CreadorDeHistorias.css"

export default function CreadorDeHistorias() {
  const[primera] = useState('https://www.placecage.com/640/720')
  const[segunda] = useState('https://placeimg.com/640/720')

  return (
    <article className='CreadorDeHistorias'>
      <div
        className="Caja__ Caja__Primera"
        style={{backgroundImage: `url(${primera})`}}
      >
        <blockquote>
          <h4>Primera Imagen</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </blockquote>
      </div>
      
      <br />
        <p>Hola</p>
      <br />
      
      <div
        className="Caja__ Caja__Segunda"
        style={{backgroundImage: `url(${segunda})`}}
      >
        <blockquote>
          <h4>Primera Imagen</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </blockquote>

      </div>

    </article>
  )
}
