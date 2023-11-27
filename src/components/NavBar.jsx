import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';


const NavBar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav)

	return (
		<div className='fixed w-full h-[80px] justify-between flex items-center px-4 bg-[#0a192f] text-gray-300'>
			<div>
				{/* <img src='' alt="Logo" style={{ width: '50px' }} /> */}
			</div>

			{/*menu*/}
			<ul className='hidden md:flex'>
				<li>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			{/*Hamburgues*/}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars /> : <FaTimes />}

			</div>

			{/* mobile menu*/}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{' '}
					<Link onClick={handleClick} to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{' '}
					<Link onClick={handleClick} to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{' '}
					<Link onClick={handleClick} to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{' '}
					<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>


			{/*menu*/}
			<div className='hidden  lg:flex  fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-[400ms] bg-blue-600' > <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/bernardo-wobeto/" target='_blank' rel="noreferrer">LinkedIn <FaLinkedin size={30} /></a></li>
					<li className='w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-[400ms] bg-[#333333]' > <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/bernardo1mw" target='_blank' rel="noreferrer">GitHub <FaGithub size={30} /></a></li>
					<li className='w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-[400ms] bg-[#e44141]' >
						<Link className='flex justify-between items-center w-full text-gray-300' to='contact' smooth={true} duration={500}>
							Email<HiOutlineMail size={30} />
						</Link></li>
					<li className='w-[165px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-[400ms] bg-[#565f69]' > <a className='flex justify-between items-center w-full text-gray-300' href="../assets/CV-BERNARDO.pdf" download="CV_Bernardo_Maia">Resume <BsFillPersonLinesFill size={30} /></a></li>
				</ul>
			</div>

		</div>
	)
}

export default NavBar