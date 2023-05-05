import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveAppBar from '@/components/navbar'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particle from "../styles/particle.js"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
      console.log(engine);
      await loadFull(engine);
      }, []);

const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
      }, []);
  return (
    <div className=''>
      <div className='flex w-[100wh] h-[100vh] flex-col items-center'>
        <ResponsiveAppBar/>
        <div className='absolute h-[90vh] -z-10'>
          <Particles className=''
                init={particlesInit}
                loaded={particlesLoaded}
                params={particle} />
        </div>
        <div className='z-30 flex justify-center items-center text-zinc-100 flex-col m-auto'>
              <div className='text-3xl font-bold font-serif text-center'>Undergraduate Association of Computing Science</div>
              <div className='titles justify-center items-center flex flex-col pt-3 mt-2 font-serif'>
                <div className='title'>For CS Students @UofA</div>
                <div className='title'>Since 1977 </div>
              </div>
        </div>
      </div>
      {/* All other components go here */}
      <div className=' bg-[#212429] flex flex-col'>
        <div className='z-10 text-white'>hi</div>
        <div className='z-10 text-white'>hi</div>
      </div>
      
    </div>
  )
}
