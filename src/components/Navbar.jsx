/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export default function Navbar({user}) {
  return (
      <div>
          <ul className="nav-list">
              <li className="nav-item">
                  <Link to='/'>
                  home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/add'>
                  {user && 'add'}
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/cards'>
                  cards
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/service'>
                  service
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/login'>
                  <button>
                      {user ? user.name : 'login'}
                  </button>
                  </Link>
              </li>
              
          </ul>
    </div>
  )
}
