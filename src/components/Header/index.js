import React from 'react';
import { Link } from 'react-router-dom';

// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/signup'>Sign In</Link></li>
//         <li><Link to='/about'>About</Link></li>
//       </ul>
//     </nav>
//   </header>
// )

// export default Header;

export default function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Simple React App</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <Link class="nav-item nav-link active" to="/">
      Home</Link>
      <Link class="nav-item nav-link" to="/signup">
      Sign Up</Link>
      <Link class="nav-item nav-link" to="/about">
      About</Link>
    </ul>
    
  </div>
</nav>
    );
}