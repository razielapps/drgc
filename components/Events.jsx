import Image from 'next/image';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import event1 from '../public/assets/event1.jpg';
import event2 from '../public/assets/event2.png';
import event3 from '../public/assets/event3.jpg';
import event4 from '../public/assets/event4.jpg';
import { Swipe } from './Swiper';
import fs from 'fs';
import path from 'path';



const events = [event1, event2, event3, event4];

export const Events = () => {
	return (
		<div className="h-[45vh] sm:h-[55vh] flex flex-col items-center bg-stone-100 justify-center space-y-3 sm:space-y-5 py-10">
			<h1 className="event-txt font-bold uppercase text-lg md:text-xl text-white">
				Upcoming Events
			</h1>

			<Swipe>
				{events.map((event, i) => (
					<SwiperSlide className="rounded-lg" key={i}>
						<Image src={event} alt="Event" className="w-full h-full" />
					</SwiperSlide>
				))}
			</Swipe>
		</div>
	);
};
