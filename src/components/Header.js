import logo from '../logo.svg';

function Header(props) {
    return (
      <header className={props.darkMode ? "dark" : ""}>
        <nav className="nav">
          <img className="nav-logo" src={logo} alt="logo" />
          <h3>ReactFacts</h3>
          <div className='toggler'>
            <p className='toggler--light'>Light</p>
            <div className='toggler--slider' onClick={props.toggleDarkMode}>
              <div className='toggler--slider--circle'></div>
            </div>
            <p className='toggler--dark'>Dark</p>
          </div>
        </nav>
      </header>
    );
  }

  export default Header;