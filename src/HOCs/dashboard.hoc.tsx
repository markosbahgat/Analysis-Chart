import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { appendDataSets, setFilters } from "@/slices/index";
import { IData } from "@/models/index";
import { colorArray, monthNames } from "@/shared";
import { LineChart, Layout, RadioButton, DropDown } from "@/components/index";
import { useStates, useLang, useLocal, useEssential } from "@/hooks/index";

export default function DashboardHOC() {
  let campLessons: number = 0; // The number of all the lessons in the selected camp and country.

  //= ========================Hooks=================================
  /**
   * @type the type of the following hooks is a custom hook:
   * ```useStates```
   * ```useEssential```
   * ```useLocal```
   * ```useAppDispatch```
   * ```useAppSelector```
   * ```useLang```
   * ```useNavigate```
   * ```useTranslation```
   * All of the following are custom hooks that has been declared outside of this module for (performance , debugging and cleaning) reasons
   */
  const { chartState, essentialState } = useStates();
  const { themeChanger } = useEssential();
  const { schoolList, filter } = useLocal();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const chLang = useLang();
  const { t } = useTranslation();
  useEffect(() => {
    chLang(localStorage.getItem("Lang") ?? essentialState.lang);
  }, [chLang, essentialState.lang]);
  //= ========================================================

  // Here we are mapping over the schoolList to get the number of lessons inside each one and add it to the campLessons variable
  schoolList.forEach((item) => {
    campLessons += item.lessons;
  });

  /**
   * @functionExplanation This function is responsible for reshaping and dispatching the incoming item to the dataSets inside our state
   * @params it takes one arg which is (item) and it reshape the structure of this object to get align with the shape of the required object
   * @param item type IData.
   * @returns this function doesn't return anything which is type void.
   */
  const handleChange = (item: IData) => {
    // this object what we pass it to the chart to render the datasets inside it.
    const dataSetObj = {
      id: item.id,
      dataSets: {
        label: item.school,
        data: [
          ...chartState.allData.filter(
            (filItem: IData) => filItem.school === item.school
          )
        ].map((lesson) => lesson.lessons),
        borderColor: colorArray[Math.floor(Math.random() * colorArray.length)],
        fill: false,
        borderWidth: 5,
        hoverRadius: 10,
        radius: 5,
        backgroundColor:
          colorArray[Math.floor(Math.random() * colorArray.length)]
      }
    };
    dispatch(appendDataSets(dataSetObj));
  };

  /**
   * @functionExplanation This function is responsible for the routing logic, it takes the name which is the "School Name" and the value which is the "Number of lessons" and it try to find this object after that it extract the id from this object and pass it to the navigate method to navigate to the targeted item.
   * @param name string
   * @param value number
   * @returns void.
   */
  const handleClick = (name: string, value: number) => {
    const target = chartState.allData.find(
      (item: IData) => item.school === name && item.lessons === value
    );
    navigate(`/${target?.id}`);
  };

  /**
   * @functionExplanation This function is responsible for the filtering logic, it takes the item which is the "Filter Name" and the type which is the "Filter Type (Country or Camp or School)" and it dispatch these two parameters to the store to use them inside our application.
   * @param item string
   * @param type string
   * @returns void.
   */
  const handleChangeSelection = (item: string, type: string) => {
    if (item === "Show All") {
      dispatch(setFilters({ key: type, value: null }));
    } else {
      dispatch(setFilters({ key: type, value: item }));
    }
  };

  return (
    <Layout
      themeChanger={themeChanger}
      isDarkModeOn={essentialState?.isDarkModeOn}
    >
      <div className="sm:mt-6 mt-28 w-full">
        <div className=" mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl text-purple-500" data-testid="Header">
            {t("Analysis Chart")}
          </h2>
          <h3 className="text-2xl mt-10 text-purple-500">
            {t("Number Of Lessons")}
          </h3>
        </div>
        <div className="mt-10 m-auto flex flex-row items-center justify-around flex-wrap">
          <DropDown
            data={[
              ...new Set(chartState.allData.map((item: IData) => item.country))
            ]}
            type="country"
            selected={filter.country}
            label="Select Country"
            handleChangeSelection={handleChangeSelection}
          />
          <DropDown
            data={[
              ...new Set(chartState.allData.map((item: IData) => item.camp))
            ]}
            type="camp"
            selected={filter.camp}
            label="Select Camp"
            handleChangeSelection={handleChangeSelection}
          />
          <DropDown
            data={[
              "Show All",
              ...new Set(chartState.allData.map((item: IData) => item.school))
            ]}
            type="school"
            selected={filter.school}
            label="Select School"
            handleChangeSelection={handleChangeSelection}
          />
        </div>
      </div>
      <div className="flex w-full bg-white rounded-lg xl:flex-row flex-col-reverse items-center justify-between xl:max-w-8xl mt-10  px-4 sm:px-6 md:px-8 sm:py-0 py-16">
        <LineChart
          chartLabels={monthNames}
          dataChart={chartState.chartDataSets}
          handleClick={handleClick}
        />
        <hr className="xl:w-[3px] mx-5 xl:h-[70vh] w-11/12 h-[5px] my-10 xl:my-0 bg-gray-300" />
        <div className="xl:w-3/12">
          {campLessons > 0 ? (
            <div className="mb-5 text-gray-500 px-10">
              <p className="font-bold text-center text-3xl text-slate-700 flex gap-2 items-center justify-start">
                {campLessons}{" "}
                <span className="font-medium text-xl text-slate-400">
                  lessons
                </span>
              </p>{" "}
              in {filter.camp}
            </div>
          ) : (
            <div className="text-xl text-center">
              There is no lessons provided in this camp for the selected country
              and school
            </div>
          )}
          <div className="scrollable-div max-h-[50vh] overflow-auto">
            <RadioButton
              data={schoolList}
              colorArr={colorArray}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
