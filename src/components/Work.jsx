import React, { forwardRef } from 'react';
import { data } from "../data/data.js";


const Work = forwardRef((props, ref) => {

	// projects file
	const project = data;
	//setProject(data);

	return (
		<div name='work' ref={ref} className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
						Work
					</p>
					<p className='py-6'>// Check out some of my recent work</p>
				</div>

				{/* container for projects */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

					{/* Grid Item */}
					{project.map((item, index) => (
						<div
							key={index}
							style={{ backgroundImage: `url(${item.image})` }}
							className="shadow-lg shadow-[#040c16] group container rounded-md flex  text-center  mx-auto content-div relative "
						>
							{/* Hover effect for images */}
							<div className="opacity-0 group-hover:opacity-100 mx-auto pt-5 ">
								<span className="text-[24px] font bold text-white tracking-wider ">
									{item.name}
								</span>
								<div className="absolute left-11 bottom-10   ">
									{/* eslint-disable-next-line */}
									<a href={item.github} target="_blank">
										<button
											className=" hover:bg-slate-200 rounded-lg px-4 py-2 mx-1  bg-white text-gray-700 font-bold text-base"
										>
											Code
										</button>
									</a>
									{/* eslint-disable-next-line */}
									<a href={item.live} target="_blank">
										<button
											className=" rounded-lg px-4 py-2 mx-2  bg-white hover:bg-slate-200 text-gray-700 font-bold text-base"
										>
											Live
										</button>
									</a>
								</div>
							</div>
						</div>
					))}


				</div>
			</div>
		</div>
	);
});

export default Work;