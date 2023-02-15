import Head from 'next/head'
import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import Image from 'next/image'
import picture from '/public/—Pngtree—designer thinking line painting_6399125.png'
import exo from '/public/exo9.png'
import pomodoro from '/public/pomodoro2.png'
import logo from '/public/logo.png'
import { useState } from 'react'
import portfolio from '/public/portfolio5.png'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (

    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Shymala Sidharth Portfolio</title>
       
       
        
      </Head>
      <main className='bg-purple-100 dark:bg-purple-900'>
        <section>
         
          <nav className='py-5 mb-12 flex justify-end'>

            
            <ul className='container px-5 mx-auto flex flex-wrap justify-end'>
              <li>
                <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className='text-3xl text-purple-700 dark:text-pink-400 cursor-pointer'
                size={30} />
              </li>
              <li><a className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-1 rounded ml-8' href="https://drive.google.com/file/d/1Me4wKLFmgBP-WPWB5Uu9y_HWg9FE-xFZ/view?usp=sharing" target='_blank' rel='noreferrer'>RESUME</a> 
              </li>
              <li><a className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-1 rounded ml-8' href='#Projects'>PROJECTS</a> 
              </li>
              <li><a className='bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-1 rounded ml-8' href='mailto: shymala.sidharth22@gmail.com'>CONTACT</a> 
              </li>
            </ul>
          </nav>

          <div className = 'text-center'>
          <h2 className='text-center text-5xl text-purple-700 font-semibold font-Amiko md:text-5xl sm:text-5xl dark:text-pink-500'>S  H  Y  M  A  L  A</h2>
          <h3 className='text-center text-xl py-2 text-purple-600 font-Amiko md:text-xl md:p-3  dark:text-pink-300'>Full Stack Software Developer</h3>
          <p className='text-lg text-gray-700 leading-loose font-Amiko md:text-lg md:leading-loose sm:text-lg max-w-5xl mx-auto dark:text-pink-200'>I am a software developer with a passion for the environment and a love for data. My unique background in Environmental Science and computer programming allows me to bring a fresh perspective to the tech world. I believe that technology has the power to make a real impact on our planet, and I strive to use my skills to create solutions that make a difference. 
            </p>



          </div>

         



          <div className='py-2 text-5xl flex justify-center gap-20 md:p-3 text-purple-700 dark:text-pink-400'>
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
          <div className='container mx-auto flex flex-wrap justify-center h-auto max-w-lg'>
            <Image src={picture} alt='main' />
          </div>

        </section>

       
        <section>
          
            <h3 className='text-center text-5xl text-purple-700 font-semibold font-Amiko md:text-5xl md:pt-9 sm:text-5xl dark:text-pink-500' id='Projects'>P R O J E C T S</h3>
            
           
         <div className='container px-5 py-5 mx-auto flex flex-wrap justify-center gap-10'>


          <div className='bg-purple-100 p-7 rounded-xl border shadow-2xl shadow-purple-700 my-6 max-w-sm hover:shadow-xl transition ease-in-out hover:duration-200 hover:scale-105 duration-200 dark:shadow-pink-600'>
              <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                
                <Image className='rounded-xl shadow-xl' width={400} height={215} src={exo} alt='planets' />
                
                <div className='p-6'>
                <h3 className='text-center text-gray-900 text-xl font-Amiko mb-2'>Exo Exo: Discover Planets Beyond our Solar System</h3>
                <p className='text-center text-gray-700 text-base mb-4 font-Amiko'>Exo Exo is a web application that allows users to discover planets beyond our solar system.</p>
                <ul className='text-center text-gray-900 font-extrabold text-base mb-4 font-Amiko'>
                  <li> - React.js</li>
                  
                  <li> - Three.js</li>

                  <li> - React Three Fiber</li>
                </ul>
                </div>
                <div className='flex justify-center p-10'>
                <a href="https://exo-exo.up.railway.app/" target='_blank' rel="noreferrer">
                  <button className='inline-block px-9 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-Amiko rounded ml-8'>Live</button>
                  </a>
                  
                  <a href="https://github.com/shymala-sidharth/React-Three-Fiber-3D-EXOPLANETS" target='_blank' rel="noreferrer">
                  <button className='inline-block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-Amiko rounded ml-8'>GitHub</button>
                  </a>
                </div>
              </div>
               </div>
               



               <div className='bg-purple-100 p-7 rounded-xl border shadow-2xl shadow-purple-700 my-6 max-w-sm hover:shadow-lg transition ease-in-out hover:duration-200 hover:scale-105 duration-200  dark:shadow-pink-600'>
            <div className='relative overflow-hidden bg-no-repeat bg-cover'>
           
              <Image className='rounded-xl shadow-xl' width={400} height={215} src={pomodoro} alt='planets' />
              
              <div className='p-6'>
              <h3 className='text-center text-gray-900 text-xl font-Amiko mb-2'>Pomodoro Inspired App</h3>
              <p className='text-center text-gray-700 text-base mb-4 font-Amiko'>Users can set time intervals to increase their productivity. More Functionality coming soon!</p>
              <ul className='text-center text-gray-900 font-extrabold text-base mb-4 font-Amiko'>
                  <li> - React.js</li>

                  <li> - JavaScript</li>

                  
                  <li> - Next.js</li>

                  <li> - TailwindCSS</li>
                </ul>
              </div>
              <div className='flex justify-center pr-10 '>
                <button className='inline-block px-9 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-Amiko rounded ml-8'>Live</button>
                <a href="https://github.com/shymala-sidharth/pomodoro-app" target='_blank' rel="noreferrer">
                  <button className='inline-block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-Amiko rounded ml-8'>GitHub</button>
                  </a>
              </div>
            </div>
             </div>


             <div className='bg-purple-100 p-7 rounded-xl border shadow-2xl shadow-purple-700 my-6 max-w-sm hover:shadow-lg transition ease-in-out hover:duration-200 hover:scale-105 duration-200  dark:shadow-pink-600'>
            <div className='relative overflow-hidden bg-no-repeat bg-cover'>
              
              <Image className='rounded-xl shadow-xl' width={400} height={215} src={portfolio} alt='portfolio'  />
              
              <div className='p-6'>
              <h3 className='text-center text-gray-900 text-xl font-Amiko mb-2'>Personal Portfolio</h3>
              <p className='text-center text-gray-700 text-base mb-4 font-Amiko'>Made to showcase my work. Compatible with dark mode.</p>
              <ul className='text-center text-gray-900 font-extrabold text-base mb-4 font-Amiko'>
                  <li> - React.js</li>

                  <li> - JavaScript</li>

                  
                  <li> - Next.js</li>

                  <li> - TailwindCSS</li>
                </ul>
              </div>
              <div className='flex justify-center pr-10'>
              <a href="https://shymala-sidharth-portfolio.vercel.app/" target='_blank' rel="noreferrer">
                <button className='inline-block px-9 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-Amiko rounded ml-8'>Live</button>
                
                </a>


                <a href="https://github.com/shymala-sidharth/react-portfolio" target='_blank' rel="noreferrer">
                <button className='inline-block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xl font-Amiko rounded ml-8'>GitHub</button>
                </a>

              </div>
            </div>
             </div>

             </div>
        </section>
       
       
      </main>

      </div>
  
  )
}
