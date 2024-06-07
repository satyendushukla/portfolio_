import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/sat.png"
import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'


const AnimatedNumbers=({value}) =>{


const ref = useRef(null)

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue,{duration:3000})

const isInView =useInView(ref,{once: true});

useEffect(()=>{
if (isInView){
  motionValue.set(value);
}
},[isInView, value,motionValue])

useEffect(()=>{
  springValue.on("change",(latest)=>{
    if (ref.current && latest.toFixed(0)<= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })
},[springValue,value])
  

  return <span ref={ref}></span> 
}

const about = () => {
  return (
    <>
        <Head>
            <title> Satyendu Shukla| About Page</title>
            <meta name="description" content="Generated by create next app" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
         <AnimatedText text="Dedication Powers Innovation !" className='mb-16'/>
         <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                <p className='font-medium'>
                    Greetings, I'm Satyendu Shukla, a third-year B.Tech student 
                    specializing in Data Science. With a diverse skill set, I'm proficient in HTML, CSS, JavaScript, Bootstrap, ReactJS, Tailwind, Next.js, as well as data analysis tools like NumPy, 
                    Pandas, Matplotlib, and Seaborn. I also have expertise in Excel and MySQL.
                </p>
                <p className='my-4 font-medium'>
                Over the course of my studies, I've developed several impressive projects, showcasing my ability to translate my technical knowledge into practical applications.
                 My passion lies in creating intuitive and user-friendly digital experiences, whether it's building responsive websites or crafting data-driven visualizations.
                </p>
                <p className='font-medium'>
                As a lifelong learner, I'm constantly exploring new technologies and techniques to enhance my capabilities.
                 I'm driven by the desire to solve real-world problems and deliver innovative solutions that make a tangible impact. With a keen eye for detail and a collaborative mindset,
                 I'm excited to bring my skills and enthusiasm to your next project.
                </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[106%] h-[103%] rounded-[2rem] bg-dark'/>
                       <Image src={profilePic} alt="satyendu shukla" className="w-full h-auto rounded-2xl"/>
   
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
  <div className='flex flex-col items-end justify-center'>
    <span className='inline-block text-7xl font-bold'>
     <AnimatedNumbers value={5}/>+
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75'>Relevant Coursework</h2>
  </div>

  <div className='flex flex-col items-end justify-center'>
    <span className='inline-block text-7xl font-bold'>
    <AnimatedNumbers value={8.0}/>
    </span>
    <h2>CGPA </h2>
  </div>

  <div className='flex flex-col items-end justify-center'>
    <span className='inline-block text-7xl font-bold'>
    <AnimatedNumbers value={6}/>+
    </span>
    <h2>Personal Projects</h2>
  </div>
</div>


            
         </div>
         <Skills/>
         </Layout>
        </main>
    </>
  )
}

export default about