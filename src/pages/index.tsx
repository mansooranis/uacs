import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveAppBar from '@/components/navbar'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);
      await loadFull(engine);
      }, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
      }, []);
  return (
    <main className='flex w-screen h-screen flex-col items-center'>
      <ResponsiveAppBar/>
        <Particles id="tsparticles"
          className=' z-0 absolute'
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                      value: "#000000",
                  },
              },
                "particles": {
                  "number": {
                    "value": 19,
                    "density": {
                      "enable": true,
                      "value_area": 1763.747964424402
                    }
                  },
                  "color": {
                    "value": "#6dc892"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                  },
                  "opacity": {
                    "value": 0.400851810096455,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 0.32483187412764875,
                      "opacity_min": 0,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 28.05962670675185,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4,
                      enable: true,
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }} />
      <div className='z-30 flex justify-center items-center text-zinc-100 w-screen h-screen flex-col'>
            <div className=' text-3xl font-bold font-serif'>Undergraduate Association of Computing Science</div>
            <div className='titles justify-center items-center flex flex-col pt-3 mt-2 font-serif'>
              <div className='title'>For CS Students @UofA</div>
              <div className='title'>Since 1977 </div>
            </div>
      </div>
    </main>
  )
}
