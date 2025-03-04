import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import sky from '../public/assets/bg3.jpg';
import { motion } from 'framer-motion';
import { RiMenu4Line } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';

const list = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: 100 },
};

export const Header = () => {
	const [active, setActive] = useState(false);
	const wrapperRef = useRef(null);

	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setActive(false);
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);

	return (
		<div className="h-[50vh] sm:h-[70vh] w-[100vw] sm:w-full relative">
			<Image
				src={sky}
				width={3950}
				height={4937}
				alt="Header"
				className="w-[100vw] h-[50vh] sm:h-[70vh] object-cover"
				priority
			/>

			<div className="absolute top-0 w-full text-white z-10">
				<div className="bg-cyan-600/10">
					<nav
						className={`flex justify-between items-center lg:max-w-5xl md:max-w-3xl mx-auto py-5 px-5 z-30 ${
							active ? 'bg-[#81BFCB] text-white' : ''
						}`}
					>
						<Link href={'#home'} className="sm:text-lg font-bold z-30">
							D.R.G.C
						</Link>

						<div className="hidden md:flex space-x-6 uppercase">
							<Link href={'#home'} className="navlinks">
								Home
							</Link>
							<Link href={'events'} className="navlinks">
								Events
							</Link>
							<Link href={'gallery'} className="navlinks">
								Gallery
							</Link>
							<Link href={'#contact'} className="navlinks">
								Contact
							</Link>
						</div>

						<div className="md:hidden z-30">
							{!active && (
								<RiMenu4Line
									onClick={() => setActive(!active)}
									className="w-8 h-8"
								/>
							)}
							{active && (
								<TfiClose
									onClick={() => setActive(!active)}
									className="w-5 h-5"
								/>
							)}
						</div>
					</nav>
				</div>
			</div>

			<div className="absolute top-0 h-full w-full text-white">
				<div className="h-full relative flex flex-col justify-center items-center space-y-5">
					<h2 className="text-sm sm:text-[1rem] font-bold text-gray-100">
						
					</h2>

					<div className="space-y-1 text-center font-bold text-[2.7rem] leading-[2.7rem] text-xl sm:leading-none md:text-5xl lg:text-7xl">
						<h2></h2>
						<h2 className="hidden md:block"></h2>
					</div>

					{active && (
						<>
							<motion.div
								initial="hidden"
								animate="visible"
								variants={list}
								ref={wrapperRef}
								className="fixed top-8 bottom-0 right-0 left-0 bg-[#81BFCB] md:hidden flex flex-col space-y-5 uppercase items-center justify-center font-semibold z-20"
							>
								<motion.div variants={item}>
									<Link
										href={'#home'}
										onClick={() => setActive(!active)}
										className="btns !text-white text-2xl"
									>
										Home
									</Link>
								</motion.div>

								<motion.div variants={item}>
									<Link
										href={'events'}
										onClick={() => setActive(!active)}
										className="btns !text-white text-2xl"
									>
										Events
									</Link>
								</motion.div>

								<motion.div variants={item}>
									<Link
										href={'gallery'}
										onClick={() => setActive(!active)}
										className="btns !text-white text-2xl"
									>
										Gallery
									</Link>
								</motion.div>

								<motion.div variants={item}>
									<Link
										href={'#contact'}
										onClick={() => setActive(!active)}
										className="btns !text-white text-2xl"
									>
										Contact
									</Link>
								</motion.div>
							</motion.div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
