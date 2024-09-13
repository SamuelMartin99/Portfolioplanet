import { render } from '@react-three/fiber';
import React from 'react';
import {Link} from 'react-router-dom';
import {arrow} from '../assets/icons';


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-normal sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
        

    </div>
)


const renderContent = {
    1:
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Bienvenidos a mi <span className='font-semibold'>Portfolio</span>👋
            <br />
           
        </h1>,
    2:
        <InfoBox 
            text="Sobre mis trabajos y experiencia?"
            link='/about'
            btnText='Conoce mas'
            />,
    3:
        <InfoBox 
            text="Conoce más proyectos como este!"
            link='/projects'
            btnText='ejemplos'
        />,
    4:
        <InfoBox 
            text="Si te interesa mi trabajo, no dudes en contactarme!"
            link='/contact'
            btnText='Contacto'
        />,
    
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo