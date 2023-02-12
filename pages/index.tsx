import Head from 'next/head'
import Mode from './Mode'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import Image from 'next/image'
import picture from '/public/—Pngtree—designer thinking line painting_6399125.png'
import exo from '/public/exo2.png'
import pomodoro from '/public/pomodoro.png'
import logo from '/public/Logo.png'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Shymala Sidharth Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className='bg-white pr-32 pl-32 pb-32'>
        <section>
         
          <nav className='py-10 mb-12 flex justify-end'>

            
            <ul className='flex items-center gap-5'>
              <li>
                <Mode />
              </li>
              <li><a className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded ml-8' href="https://drive.google.com/file/d/1ZIR0Kk3gqkLgXpVU9QLfq5Ggkrnv0EGE/preview" target='_blank' rel='noreferrer'>Resume</a> 
              </li>
              <li><a className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded ml-8' href="https://drive.google.com/file/d/1ZIR0Kk3gqkLgXpVU9QLfq5Ggkrnv0EGE/preview" target='_blank' rel='noreferrer'>Projects</a> 
              </li>
              <li><a className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded ml-8' href="https://drive.google.com/file/d/1ZIR0Kk3gqkLgXpVU9QLfq5Ggkrnv0EGE/preview" target='_blank' rel='noreferrer'>About</a> 
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-7xl text-purple-600 font-medium font-Amiko'>Shymala Sidharth</h2>
            <h3 className='text-2xl pt-10 font-Amiko'>Full Stack Software Developer</h3>
            <p className='text-xl py-5 leading-8 text-gray-800 font-Amiko'>Software developer from Auckland, New Zealand. I have a passion for building web applications and I love to learn new technologies.</p>
          </div>
          <div className='text-5xl flex justify-center gap-20 py-3 text-gray-700'>
            <a href='https://github.com/shymala-sidharth' target='_blank' rel="noreferrer">
            <AiFillGithub/>
            </a>
            <a href='https://www.linkedin.com/in/shymala-sidharth-5420a1129/' target='_blank' rel='noreferrer'>
            <AiFillLinkedin/> 
            </a>
            <a href='mailto: shymala.sidharth22@gmail.com'>
            <MdEmail/>
            </a>
          </div>
          <div className='h-auto max-w-lg mx-auto'>
            <Image src={picture} alt='main' />
          </div>

        </section>
        <section>
          <div>
            <h3 className='text-center text-7xl py-1 mt-20 text-purple-500 font-medium font-Amiko'>Projects</h3>
            <div>

          <div className='flex flex-row gap-10'>
            
              <div className='text-center shadow-xl p-20 rounded-xl'>
                <a href="https://exo-exo.up.railway.app/" target='_blank' rel="noreferrer">
                <Image className='relative mx-auto rounded-full w-60 h-60 mt-2.5' src={exo} alt='planets' />
                </a>
                <h3 className='mt-2.5 text-xl font-medium'>Exo Exo: Discover Planets Beyond our Solar System</h3>
                <p className='text-xl mt-5'>Exo Exo is a web application that allows users to discover planets beyond our solar system.</p>
                <div className='flex justify-center mt-2.5 mb-2.5'>
                  <button className='bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl px-10 py-2 rounded ml-8'>View</button>
                </div>
              </div>

              <div className='text-center shadow-xl p-20 rounded-xl'>
                <a href="https://exo-exo.up.railway.app/" target='_blank' rel="noreferrer">
                <Image className='relative mx-auto rounded-full w-60 h-60 mt-2.5' src={pomodoro} alt='pom' />
                </a>
                <h3 className='mt-2.5 text-xl font-medium'>Pomodoro Productivity App</h3>
                <p className='text-xl mt-5'>Users can set timer intervals to focus and increase productivity. More functionality coming soon!</p>
                <div className='flex justify-center mt-2.5 mb-2.5'>
                  <button className='bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl px-10 py-2 rounded ml-8'>View</button>
                </div>
              </div>

              <div className='text-center shadow-xl p-20 rounded-xl'>
                <a href="https://exo-exo.up.railway.app/" target='_blank' rel="noreferrer">
                <Image className='relative mx-auto rounded-full w-60 h-60 mt-2.5' src={pomodoro} alt='pom' />
                </a>
                <h3 className='mt-2.5 text-xl font-medium'>Pomodoro Productivity App</h3>
                <p className='text-xl mt-5'>Users can set timer intervals to focus and increase productivity. More functionality coming soon!</p>
                <div className='flex justify-center mt-2.5 mb-2.5'>
                  <button className='bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl px-10 py-2 rounded ml-8'>View</button>
                </div>
              </div>

              
             


              </div>

            </div>
            
          </div>
        </section>
      </main>

      </div>
  
  )
}
