import React, {useState} from 'react'
import { useAppSelector } from 'store/hooks';
import { chartState, setFilters, appendDataSets } from 'slices/chartsData.slice';
import DropDown from 'components/dropDown_Menu/index';
import LineChart from 'components/lineChat'
import Dashboard from 'components/dashboardLayout/index';
import { useAppDispatch } from '../store/hooks';
import RadioButton from 'components/radioGroup';
import { useTranslation } from 'react-i18next';
import { darkMode } from 'slices/essentials.slice';
import { essentialState } from '../slices/essentials.slice';
import { IData } from 'models';
import { colorArray } from 'shared';

type Props = {}

const DashboardHOC:React.FC<Props> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const state = useAppSelector(chartState);
  const essentialsState = useAppSelector(essentialState);
  const dispatch = useAppDispatch();
  
  const handleChange = (item: IData) => {
    // dispatch(setFilters({ key: 'school', value:item.school }));
    
    dispatch(appendDataSets({
      label: item.school,
      data: [...state.allData.filter(filItem => filItem.school === item.school)].map(lesson => lesson.lessons),
      borderColor: colorArray[Math.floor(Math.random() * colorArray.length)],
      fill: false,
      borderWidth: 5,
      backgroundColor:colorArray[Math.floor(Math.random() * colorArray.length)]
    }))
  };
  const themeChanger = () => {
    dispatch(darkMode())
  }
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const { t } = useTranslation();
  const schoolList = [...state.allData.filter(item => state.filters.country ? item.country === state.filters.country : item)
    .filter(item => state.filters.camp ? item.camp === state.filters.camp : item)
    .filter(item => state.filters.school ? item.school === state.filters.school : item)];
  return (
    <Dashboard
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      themeChanger={themeChanger}
      isDarkModeOn={essentialsState?.isDarkModeOn}>
    <div className="py-6 h-[calc(100vh-4rem)]">
            <div className="max-w-7xl mb-10 mx-auto px-4 sm:px-6 md:px-8">
          <h2 className='text-2xl text-purple-500'>{t('Analysis Chart')}</h2>
              <h3 className='text-2xl mt-10 text-purple-500'>{t('Number Of Lessons')}</h3>
            </div>
            <div className='flex flex-row items-center justify-center gap-10 flex-wrap'>
              <DropDown data={[...new Set(state.allData.map(item => item.country))]} type="country" selected={state.filters.country}  label="Select Country"/>
              <DropDown data={[...new Set(state.allData.map(item => item.camp))]} type="camp" selected={state.filters.camp}   label="Select Camp"/>
              <DropDown data={['Show All', ...new Set(state.allData.map(item => item.school))]} type="school" selected={state.filters.school}  label="Select School"/>
            </div>
            <div className="flex flex-row items-center justify-between max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          <LineChart chartLabels={[...new Set(state.allData.map((item: IData) => item.month))].sort((prevMonth, nextMonth) => monthNames.indexOf(prevMonth) - monthNames.indexOf(nextMonth))} dataSets={state.chartDataSets} />
              <hr className='w-[5px] mx-5 h-[50vh] bg-gray-300'/>
              <div className='w-3/12 max-h-[50vh] overflow-auto'>
            {state.allData
              .filter(item => state.filters.country ? item.country === state.filters.country : item)
              .filter(item => state.filters.camp ? item.camp === state.filters.camp : item)
              .filter(item => state.filters.school ? item.school === state.filters.school : item)
              .map((item) => (
                <RadioButton key={item.id}  data={schoolList} handleChange={handleChange} filters={state.filters} />
                ))}
              </div>
            </div>
          </div>
</Dashboard>
  )
}

export default DashboardHOC
