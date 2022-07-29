import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from './particle.config';

const ParticleBackground = () => {
    const particlesInit = async (main) => {
   
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
      
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                particleConfig
            }
        />
    );
};

export default ParticleBackground;