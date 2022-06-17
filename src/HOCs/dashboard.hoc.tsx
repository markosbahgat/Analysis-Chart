import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useTranslation } from 'react-i18next';
import { essentialState, darkMode, showSidebar, chartState, appendDataSets } from 'slices';
import { IData } from 'models';
import { useNavigate } from 'react-router-dom';
import useLang, { colorArray } from 'shared';
import { DropDown, LineChart, Layout, RadioButton } from 'components';

type Props = {};

const DashboardHOC: React.FC<Props> = () => {
	const chLang = useLang();
	const state = useAppSelector(chartState);
	let campLessons: number = 0;
	const filter = localStorage.getItem('filters') ? JSON.parse(localStorage.getItem('filters') ?? '') : state.filters;
	const schoolList = [
		...state.allData
			.filter((item) => item.country === filter.country)
			.filter((item) => item.camp === filter.camp)
			.filter((item) => (state.filters.school ? item.school === state.filters.school : item)),
	];
	schoolList.map((item) => (campLessons += item.lessons));
	const essentialsState = useAppSelector(essentialState);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleChange = (item: IData) => {
		dispatch(
			appendDataSets({
				id: item.id,
				dataSets: {
					label: item.school,
					data: [...state.allData.filter((filItem) => filItem.school === item.school)].map(
						(lesson) => lesson.lessons
					),
					borderColor: colorArray[Math.floor(Math.random() * colorArray.length)],
					fill: false,
					borderWidth: 5,
					hoverRadius: 10,
					radius: 5,
					backgroundColor: colorArray[Math.floor(Math.random() * colorArray.length)],
				},
			})
		);
	};
	const themeChanger = () => {
		dispatch(darkMode());
	};
	const handleSideBar = () => {
		dispatch(showSidebar());
	};
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const handleClick = (name: string, value: number, month: string) => {
		const target = state.allData.find((item) => item.school === name && item.lessons === value);
		navigate('/' + target?.id);
	};
	const { t } = useTranslation();

	useEffect(() => {
		chLang(localStorage.getItem('Lang') ?? essentialsState.lang);
	}, []);
	return (
		<Layout
			isSideBarOpen={essentialsState.isSideBarOpen}
			handleSideBar={handleSideBar}
			themeChanger={themeChanger}
			isDarkModeOn={essentialsState?.isDarkModeOn}>
			<div className='py-6 h-[calc(100vh-4rem)]'>
				<div className='max-w-7xl mb-10 mx-auto px-4 sm:px-6 md:px-8'>
					<h2 className='text-2xl text-purple-500'>{t('Analysis Chart')}</h2>
					<h3 className='text-2xl mt-10 text-purple-500'>{t('Number Of Lessons')}</h3>
				</div>
				<div className='flex flex-row items-center justify-center gap-10 flex-wrap'>
					<DropDown
						data={[...new Set(state.allData.map((item) => item.country))]}
						type='country'
						selected={filter.country}
						label='Select Country'
					/>
					<DropDown
						data={[...new Set(state.allData.map((item) => item.camp))]}
						type='camp'
						selected={filter.camp}
						label='Select Camp'
					/>
					<DropDown
						data={['Show All', ...new Set(state.allData.map((item) => item.school))]}
						type='school'
						selected={filter.school}
						label='Select School'
					/>
				</div>
				<div className='flex xl:flex-row flex-col-reverse items-center justify-between xl:max-w-8xl mt-10 mx-auto px-4 sm:px-6 md:px-8'>
					<LineChart chartLabels={monthNames} dataChart={state.chartDataSets} handleClick={handleClick} />
					<hr className='xl:w-[5px] mx-5 xl:h-[55vh] w-11/12 h-[5px] my-10 xl:my-0 bg-gray-300' />
					<div className='xl:w-3/12'>
						{campLessons > 0 ? (
							<div className='mb-5 capitalize'>
								<span className='font-bold text-xl text-slate-700'>{campLessons}</span> lessons in this
								Camp for the selected (country and school)
							</div>
						) : (
							<div className='text-xl text-center'>
								There is no lessons provided in this camp for the selected country and school
							</div>
						)}
						<div className='max-h-[50vh] overflow-auto'>
							<RadioButton data={schoolList} handleChange={handleChange} filters={state.filters} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default DashboardHOC;
