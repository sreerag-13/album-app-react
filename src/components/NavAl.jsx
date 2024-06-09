import React from 'react'
import { Link } from 'react-router-dom'

const NavAl = () => {
  return (
    <div>
        
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/">add</Link>
        <Link class="nav-link" to="/DeleteAl">delete</Link>
        <Link class="nav-link" to="/SearchAl">Search</Link>
        <Link class="nav-link" to="/ViewAlbum">view</Link>
    
      </div>
    </div>
  </div>
</nav>
        
        
        
        </div>
  )
}

export default NavAl