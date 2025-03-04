import { ImLocation, ImPhone } from 'react-icons/im';
import { MdAccessTime } from 'react-icons/md';
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaYoutube,
	FaInstagram,
	FaPodcast,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import getInTouch from '../public/assets/getintouch.jpg';
import Image from 'next/image';
import { useState } from 'react';
import Map, {
	FullscreenControl,
	GeolocateControl,
	Marker,
	NavigationControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Contact = () => {
	const [lng, setLng] = useState(-0.029529);
	const [lat, setLat] = useState(5.694385);

	return (
		<div className="w-full lg:grid lg:grid-cols-6 space-y-10 lg:space-y-0">
			<div className="relative h-full w-full col-span-2">
				<Image
					src={getInTouch}
					alt="Get In Touch"
					className="w-full h-[40vh] sm:h-[44vh] object-cover"
				/>

				<div className="absolute top-0 flex flex-col items-center justify-center h-full w-full">
					<div className="text-center bg-gray-500/50 w-full py-5 text-white font-bold text-2xl">
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="uppercase"
						>
							Contact Us
						</motion.p>
						<h1 className="text-sm font-normal">
							We will love to hear from you
						</h1>
					</div>
				</div>
			</div>

			<div className="lg:col-span-2 flex flex-col items-center justify-center space-y-10  text-gray-900">
				<div className="space-y-2 font-semibold">
					<p className="flex items-center text-sm">
						<span>
							<ImLocation className="socialsxx w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-amber-400" />
						</span>
						5, First Utagban Road Off Ekehuan Road, Benin City.
					</p>

					<p className="flex items-center text-sm">
						<span>
							<ImPhone className="w-4 h-4 sm:h-4 sm:w-5 mr-1 sm:mr-2 text-amber-400 socialsxx" />
						</span>
						0907 709 5700 | 0907 709 5700
					</p>

					<p className="flex items-center text-sm">
						<span>
							<MdAccessTime className="socialsxx w-4 h-5 sm:w-5 mr-1 sm:mr-2 text-amber-400" />
						</span>
						Main Service: Sundays 8:00am (Miracle & Celebration Service)
					</p>
				</div>

				<div className="space-y-2">
					<p className="font-bold">Social Media</p>

					<span className="flex space-x-3 sm:space-x-5 socialsxx text-amber-400">
					  <a href="https://www.facebook.com/share/1D5U8Zeu4p/?mibextid=LQQJ4d"></a>
						<FaFacebook className="w-5 h-5 " />
						
					</span>
				</div>
			</div>

			
			
			
		</div>
	);
};
