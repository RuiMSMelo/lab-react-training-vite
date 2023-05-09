import React from 'react'

function Greetings({lang}) {
  return (
    <div>
        {lang === 'de' ? (
            <p>Hallo </p>
        ) : null}
        {lang === 'fr' ? (
            <p>Bonjour </p>
        ) : null}
        {lang === 'es' ? (
            <p>Hola </p>
        ) : null}
        {lang === 'en' ? (
            <p>Hello </p>
        ) : null}
    </div>
  )
}

export default Greetings
