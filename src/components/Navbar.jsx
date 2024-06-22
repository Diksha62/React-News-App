
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-5'>NewsMag</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("technology")}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("business")}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("health")}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("science")}>Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("sports")}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("entertainment")}>Entertainment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

