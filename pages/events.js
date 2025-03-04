import { Layout } from '../components/Layout';
import { Timeline } from '../components/Timeline';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Events = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			end={{ opacity: 0 }}
		>
			<Layout title={'Events'}>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					className="h-[25vh] md:h-[30vh] text-white relative transition-all duration-300 ease-out"
				>
					<Image
						src={'/assets/women.jpg'}
						alt="Women"
						width={1280}
						height={853}
						className="w-full h-full object-cover"
					/>

					<div className="absolute top-0 bg-gray-800/60 h-full w-full flex flex-col items-center justify-center text-center text-amber-500 px-5">
						<h3 className="font-bold uppercase text-xl md:text-3xl tracking-wider">
							Upcoming Events
						</h3>
						<p className=" font-bold text-gray-300">
							We invite and welcome you to all of our events. Visit us.
						</p>
					</div>
				</motion.div>

				<section className="my-5">
					<Timeline />
				</section>
			</Layout>
		</motion.div>
	);
};

export default Events;
