import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

import GreetingAstronaut from '../../animations/GreetingAstronaut';

import './Hero.css';


const Hero = () => {
  return (
    <div className='flex h-screen'>
      <div className='flex-1'>
        <div className='w-full h-full'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sit dignissimos fugit provident, consectetur reprehenderit et cupiditate placeat vitae, tempora distinctio sunt asperiores aliquid eligendi ipsa. Modi magnam amet obcaecati, laborum explicabo ad placeat ipsam molestias eligendi voluptas! Nesciunt voluptatum a repellendus debitis explicabo. Accusamus sint ipsum incidunt nisi! Laudantium!
        </div>
      </div>
      <div className='flex-1'>
        <Canvas shadows className='z-[1]'>
          <Environment preset="city" />
          <GreetingAstronaut />
        </Canvas>
      </div>
    </div>
  );
}

export default Hero;