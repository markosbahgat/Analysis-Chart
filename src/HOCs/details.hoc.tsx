import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/index";
import Error404 from "@/pages/404";
import { classNames, flagIdentifier } from "@/shared";
import { useEssential, useStates } from "@/hooks/index";
import { IData } from "@/models/index";

interface Props {
  id: string | undefined;
}

export default function DetailsHOC({ id }: Props) {
  const { chartState, essentialState } = useStates();
  const { themeChanger } = useEssential();
  const targetSchool = chartState.allData.find((item: IData) => item.id === id);

  if (targetSchool) {
    localStorage.setItem("dataSets", JSON.stringify(chartState.chartDataSets));
    localStorage.setItem("filters", JSON.stringify(chartState.filters));
    return (
      <Layout
        themeChanger={themeChanger}
        isDarkModeOn={essentialState?.isDarkModeOn}
      >
        <div
          className={classNames(
            essentialState.isDarkModeOn ? "bg-gray-400" : "bg-gray-100",
            "w-full flex h-fit min-h-screen items-center justify-center mt-20 sm:mt-0"
          )}
        >
          <div className="w-[95%] sm:w-[750px] flex flex-1 flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className=" w-full p-10 rounded-3xl shadow-lg bg-white min-h-[65vh] h-fit ">
              <div className="flex flex-col items-center justify-center">
                <Link
                  to="/"
                  className="font-extrabold text-gray-900 text-4xl uppercase text-center"
                >
                  <img
                    className="h-32 w-auto m-auto object-contain"
                    src="/logo.png"
                    alt="Markos"
                  />
                </Link>
                <Link
                  to="/"
                  data-testid="schoolName"
                  className="font-extrabold text-gray-900 text-2xl sm:text-4xl uppercase text-center mt-5 sm:mt-20 "
                >
                  {targetSchool.school}
                </Link>
                <h2 className="mt-6 text-xl ">School ID :{targetSchool.id}</h2>
                <p className="mt-2 text-2xl text-gray-600">
                  Country:{" "}
                  {`${flagIdentifier(targetSchool.country)} ${
                    targetSchool.country
                  }`}{" "}
                </p>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <p className="text-center px-5 sm:px-20">
                    This School has provided{" "}
                    <span className="font-bold text-xl text-slate-700">
                      {targetSchool.lessons}
                    </span>{" "}
                    Lessons For{" "}
                    <span className="font-bold text-xl text-slate-700">
                      {targetSchool.camp}
                    </span>{" "}
                    Camp in{" "}
                    <span className="font-bold text-xl text-slate-700">
                      {targetSchool.month}
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  return <Error404 />;
}
