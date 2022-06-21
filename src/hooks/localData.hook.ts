import { useAppSelector } from "store/hooks";
import { chartState } from "slices/chartsData.slice";

const useLocal = () => {
  const state = useAppSelector(chartState);
  const filter = localStorage.getItem("filters")
    ? JSON.parse(localStorage.getItem("filters") ?? "")
    : state.filters;
  const schoolList = [
    ...state.allData
      .filter((item) => item.country === filter.country)
      .filter((item) => item.camp === filter.camp)
      .filter((item) =>
        state.filters.school ? item.school === state.filters.school : item
      ),
  ];

  return {
    filter,
    schoolList,
  };
};
export default useLocal;
