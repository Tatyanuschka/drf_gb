import React from 'react'

function NavbarItem({name, href}) {
    return (
        <button className="btn nav-item active">
            <a className="nav-link" to={href}>{name}</a>
        </button>
    )
}


export default function Navbar({navbarItems}) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark inline-group">
            <a className="navbar-brand" href="https://roto.ru/">Roto Frank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse-1"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse-1">
                <div className="btn-group">
                    <div className="btn-group btn-group-md" data-toggle="buttons">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                {navbarItems.map((item) => <NavbarItem name={item.name} href={item.href}/>)}
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </nav>
    )
}


