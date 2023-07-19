import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { Link } from 'react-scroll'

function Header({sticky}) {

  const [menu, setMenu] = useState(true)
  const [active, setActive] = useState('navbar')
  
  function navToggle() {
    setMenu(!menu)
    if(!menu) {
      setActive('navbar')
    }else {
      setActive('navbar active')
    }
  }


  return (
    <header className={`header ${sticky}`}>
        <a className="logo" href="#">Tilav</a>

        <div onClick={()=> navToggle()} className={menu ? 'bi bi-justify' : 'bi bi-x-lg'} id='menu-icon'></div>

        <nav className={active}>
            <Link onClick={navToggle} to="home" spy={true} smooth={true} offset={0} duration={0}>Home</Link>
            <Link onClick={navToggle} to="about" spy={true} smooth={true} offset={0} duration={0}>About</Link>
            <Link onClick={navToggle} to="education" spy={true} smooth={true} offset={0} duration={0}>Education</Link>
            <Link onClick={navToggle} to="skills" spy={true} smooth={true} offset={0} duration={0}>Skills</Link>
            <Link onClick={navToggle} to="contact" spy={true} smooth={true} offset={0} duration={0}>Contact</Link>
        </nav>
    </header>
  )
}

export default Header