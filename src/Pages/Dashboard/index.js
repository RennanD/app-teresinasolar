import React from 'react'
import { MdFormatListNumbered, MdLibraryAdd } from 'react-icons/md'

import './styles.css'
import Routes from '../../routes'

function Dashboard() {


  return (
    <div className = "container">

        <aside>
            <header>
                <h1>Teresina Solar</h1>
            </header>
            <ul>
                <li>
                <a href = "/">
                    <MdFormatListNumbered color = "#FEFEFE" size = {22} />
                    <p>Listar projetos</p>
                </a>
                </li>
                <li>
                <a href = "/create">
                    <MdLibraryAdd color = "#FEFEFE" size = {22} />
                    <p>Cadastrar projeto</p>
                </a>
                </li>
                <li></li>
            </ul>
        </aside>
        
        <main>
            <header>
                <h2>Seja Bem vindo!</h2>
            </header>
            <div className = "content-routes">
                <Routes />
            </div>
        </main>
    </div>
  )
}

export default Dashboard
