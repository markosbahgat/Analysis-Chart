import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { classNames } from 'shared';
interface Props {
	themeChanger: () => void;
}

const Toggle: React.FC<Props> = ({ themeChanger }) => {
	const [enabled, setEnabled] = useState<boolean>(false);
	const handleChange = () => {
		themeChanger();
		setEnabled((enabled) => !enabled);
	};
	return (
		<div className='absolute right-10 top-8 w-fit flex flex-row items-center justify-between gap-3'>
			<span className='hidden md:flex'>{enabled ? 'Dark Mode' : 'Light Mode'}</span>
			<Switch
				checked={enabled}
				onChange={handleChange}
				className='flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
				<span className='sr-only'>Use setting</span>
				<span aria-hidden='true' className='pointer-events-none absolute bg-white w-full h-full rounded-md' />
				<span
					aria-hidden='true'
					className={classNames(
						enabled ? 'bg-indigo-600' : 'bg-gray-200',
						'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
					)}
				/>
				<span
					aria-hidden='true'
					className={classNames(
						enabled ? 'translate-x-5' : 'translate-x-0',
						'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
					)}
				/>
			</Switch>
		</div>
	);
};

export default Toggle;
