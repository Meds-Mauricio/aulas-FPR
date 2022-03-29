import React from 'react'

export default function Header() {
  return (
    <header>
        <ul>
            <li onClick={() => window.location.href = "/"}>shoopping</li>
            <li onClick={() => window.location.href = "/cinema"}>cinema</li>
            <li onClick={() => window.location.href = "/lojas"}>lojas</li>
            <li onClick={() => window.location.href = "/mercado"}>mercado</li>
        </ul>
    </header>
  )
}
