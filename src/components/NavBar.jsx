import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="header">
        <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
          {/* <p className='blue-gradient_text'>SM</p> */}
          <img src='/logo-1.png'/>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
          <NavLink to='/about' className={({ isActive })=> isActive ? 'text-blue-500' : 'text-black'}>Sobre mi</NavLink>
          <NavLink to='/projects' className={({ isActive })=> isActive ? 'text-blue-500' : 'text-black'}>Proyectos</NavLink>
          <NavLink to='/contact' className={({ isActive })=> isActive ? 'text-blue-500' : 'text-black'}>Contacto</NavLink>
        </nav>

    </header>
  )
}

export default NavBar