import Image from 'next/image';
import youth from '../public/assets/youth.jpg';

export const Youth = () => {
	return (
		<div className="min-h-[40vh] relative text-white">
			<Image src={youth} alt="" className="h-[40vh] w-[100vw] object-cover" />

			<div className="absolute top-0 bg-emerald-700/60 h-full w-full text-center">
				<div className="mr-5 sm:mr-10 lg:mr-28 absolute right-0 max-w-[12rem] sm:max-w-xs lg:max-w-lg h-full flex flex-col justify-center space-y-5 items-center">
					<h1 className="font-bold uppercase text-xl md:text-4xl">
						Lorem ipsum
					</h1>

					<p className="text-gray-100 text-sm text-center">
						Lorem ipsum dolor sit amet! Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pastores nostri, doctrina Dei abundantes, pueros a 5 ad 15 annos docent de mirabili verbo Dei.
					</p>
				</div>
			</div>
		</div>
	);
};
