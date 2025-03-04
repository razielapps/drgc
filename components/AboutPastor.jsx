import Image from 'next/image';

export const AboutPastor = () => {
	return (
		<div className="min-h-[45vh] md:min-h-[40vh] relative bg-stone-800 text-white">
			<Image
				src={'/assets/pastor3.png'}
				width={1200}
				height={400}
				alt=""
				className="h-[45vh] md:h-[40vh] w-[100vw] object-cover"
			/>

			<div className="absolute top-0 h-full w-full text-center">
				<div className="ml-5 sm:ml-10 lg:ml-28 max-w-[12rem] sm:max-w-xs lg:max-w-lg h-full flex flex-col justify-center space-y-5 items-center">
					<h1 className="font-bold meetour uppercase text-lg sm:text-xl md:text-2xl">
						MEET OUR SPIRITUAL FATHER & MOTHER
					</h1>

					

					

					{/* <button className="btns">FOLLOW REV. NICHOLAS</button> */}
				</div>
			</div>
		</div>
	);
};
