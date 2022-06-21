import React, { useEffect } from 'react';
import { useAppDispatch } from 'store/hooks';
import { useTranslation } from 'react-i18next';
import { appendDataSets, setFilters } from 'slices';
import { IData } from 'models';
import { useNavigate } from 'react-router-dom';
import { colorArray, monthNames } from 'shared';
import { DropDown, LineChart, Layout, RadioButton } from 'components';
import { useLang, useLocal, useEssential } from 'hooks';
import useStates from 'hooks/states.hook';

interface Props {}

const DashboardHOC: React.FC<Props> = () => {
	let campLessons: number = 0;
	const { chartState, essentialState } = useStates();
	const { themeChanger } = useEssential();
	const { schoolList, filter } = useLocal();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const chLang = useLang();
	schoolList.map((item) => (campLessons += item.lessons));

	const handleChange = (item: IData) => {
		dispatch(
			appendDataSets({
				id: item.id,
				dataSets: {
					label: item.school,
					data: [...chartState.allData.filter((filItem) => filItem.school === item.school)].map(
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

	const handleClick = (name: string, value: number) => {
		const target = chartState.allData.find((item) => item.school === name && item.lessons === value);
		navigate('/' + target?.id);
	};
	const { t } = useTranslation();
	const handleChangeSelection = (item: string, type: string) => {
		if (item === 'Show All') {
			dispatch(setFilters({ key: type, value: null }));
		} else {
			dispatch(setFilters({ key: type, value: item }));
		}
	};
	useEffect(() => {
		chLang(localStorage.getItem('Lang') ?? essentialState.lang);
	}, [chLang, essentialState.lang]);
	return (
		<Layout themeChanger={themeChanger} isDarkModeOn={essentialState?.isDarkModeOn}>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
				<h2 className='text-2xl text-purple-500' data-testingId='Header'>
					{t('Analysis Chart')}
				</h2>
				<h3 className='text-2xl mt-10 text-purple-500'>{t('Number Of Lessons')}</h3>
			</div>
			<div className='flex flex-row items-center justify-center gap-10 flex-wrap'>
				<DropDown
					data={[...new Set(chartState.allData.map((item) => item.country))]}
					type='country'
					selected={filter.country}
					label='Select Country'
					handleChangeSelection={handleChangeSelection}
					t={t}
				/>
				<DropDown
					data={[...new Set(chartState.allData.map((item) => item.camp))]}
					type='camp'
					selected={filter.camp}
					label='Select Camp'
					handleChangeSelection={handleChangeSelection}
					t={t}
				/>
				<DropDown
					data={['Show All', ...new Set(chartState.allData.map((item) => item.school))]}
					type='school'
					selected={filter.school}
					label='Select School'
					handleChangeSelection={handleChangeSelection}
					t={t}
				/>
			</div>
			<div className='flex xl:flex-row flex-col-reverse items-center justify-between xl:max-w-8xl mt-10 mx-auto px-4 sm:px-6 md:px-8'>
				<LineChart chartLabels={monthNames} dataChart={chartState.chartDataSets} handleClick={handleClick} />
				<hr className='xl:w-[5px] mx-5 xl:h-[55vh] w-11/12 h-[5px] my-10 xl:my-0 bg-gray-300' />
				<div className='xl:w-3/12'>
					{campLessons > 0 ? (
						<div className='mb-5 capitalize'>
							<span className='font-bold text-xl text-slate-700'>{campLessons}</span> lessons in this Camp
							for the selected (country and school)
						</div>
					) : (
						<div className='text-xl text-center'>
							There is no lessons provided in this camp for the selected country and school
						</div>
					)}
					<div className='max-h-[50vh] overflow-auto'>
						<RadioButton data={schoolList} handleChange={handleChange} filters={chartState.filters} />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default DashboardHOC;
