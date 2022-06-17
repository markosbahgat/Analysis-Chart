import React from 'react';
import useLang from 'shared';
import { useAppSelector } from 'store/hooks';
import { essentialState } from 'slices';

interface Props {}

const LangSwitcher: React.FC<Props> = () => {
	const chLang = useLang();
	const state = useAppSelector(essentialState);
	return (
		<>
			<select
				id='lang'
				name='lang'
				className='mt-1 block  py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
				defaultValue={localStorage.getItem('Lang') ?? state.lang}
				onChange={(e) => chLang(e.target.value)}>
				<option>EN</option>
				<option>AR</option>
			</select>
		</>
	);
};

export default LangSwitcher;
