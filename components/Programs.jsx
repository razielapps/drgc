import { ProgramsCard } from './ProgramsCard';
import cross from '../public/assets/prayer.png';
import prayer from '../public/assets/pray1.png';
import dove from '../public/assets/dove.png';
import church from '../public/assets/church1.png';

export const Programs = () => {
	return (
		<div className="min-h-[59vh] flex flex-col items-center justify-center  bg-stone-100 space-y-8 p-5">
			<h1 className="text-xl text-gray-600 text-center font-bold tracking-wide sm:tracking-widest uppercase">
				Weekly Programs Schedule
			</h1>

			<div className="flex space-x-5 md:space-x-8 pb-3 overflow-auto max-w-full">
				<ProgramsCard
					serviceName={'Prayers & Counselling'}
					day="Monday"
					time={'10am'}
					icon={prayer}
					style={'bg-blue-100'}
				/>

				<ProgramsCard
					serviceName={'Wednesday Service'}
					day="Wednesday"
					time={'9am'}
					icon={cross}
					style={'bg-blue-100'}
				/>

				<ProgramsCard
					serviceName={'Sunday Service'}
					day="Sunday"
					time={'9am'}
					icon={church}
					style={'bg-blue-100'}
				/>
			</div>
			
		</div>
	);
};
