import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = ({ workRef }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        workRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div id='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Bernardo</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Web Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Specializing in building exceptional digital experiencies. Currently, I'm focused on learning how to make websites acessible and responsive</p>
                <div>
                    <button onClick={onSubmit} className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:duration-[500ms]'>

                        View Work

                        <span className='group-hover:rotate-90 duration-300 group-hover:mb-2'>
                            <HiArrowNarrowRight className='ml-2' />
                        </span>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Home