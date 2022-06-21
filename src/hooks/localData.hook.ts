import { useAppSelector } from "store/hooks";
import { chartState } from "slices/chartsData.slice";
import { useMemo } from "react";
import { IData } from "models";

const useLocal = () => {
  const state = useAppSelector(chartState);
  const filter = localStorage.getItem("filters")
    ? JSON.parse(localStorage.getItem("filters") ?? "")
    : state.filters;
  const schoolList = useMemo(
    () => [
      ...state.allData
        .filter(
          (item: IData) =>
            item.country === filter.country && item.camp === filter.camp
        )
        .filter((item: IData) =>
          state.filters.school ? item.school === state.filters.school : item
        ),
    ],
    [filter, state.allData]
  );
  console.log(schoolList);

  return {
    filter,
    schoolList,
  };
};
export default useLocal;
