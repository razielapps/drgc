import Link from 'next/link';

export const Footer = () => {
	return (
		<div className="footer-bg bg-neutral-800 p-5">
			<div className="my-10 flex flex-col md:flex-row items-center md:items-start justify-center space-y-10 md:space-y-0 md:space-x-16 lg:space-x-32">
				<div className="flex flex-col items-center md:items-start space-y-5">
					<h2 className="htxtw text-neutral-500 uppercase text-xl font-bold">
						Quick Links
					</h2>

					<div className="flex flex-col items-center md:items-start space-y-3 uppercase">
						<Link href={'/#home'} className="btns reftext">
							Home
						</Link>
						<Link href={'events'} className="btns reftext">
							Events
						</Link>
						<Link href={'gallery'} className="btns reftext">
							Gallery
						</Link>
						<Link href={'/#about'} className="btns reftext">
							About
						</Link>
						<Link href={'/#contact'} className="btns reftext">
							Contact
						</Link>
					</div>
				</div>

				<div className="flex flex-col items-center md:items-start space-y-5">
					<h2 className="htxtw text-neutral-500 uppercase text-xl font-bold">
						Policies
					</h2>

					<div className="flex flex-col items-center md:items-start space-y-3 socialsxx">
						<button className="btns uppercase reftext">Privacy Policy</button>
						<button className="btns uppercase reftext">Cookie Policy</button>
						<button className="btns uppercase reftext">Terms and Conditions</button>
					</div>
				</div>

				
				</div>
			</div>
	
	);
};
