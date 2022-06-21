import { chartState as State1, essentialState as State2 } from "@/slices/index";
import { useAppSelector } from "@/store/hooks";

const useStates = () => {
  const chartState = useAppSelector(State1);
  const essentialState = useAppSelector(State2);
  return {
    chartState,
    essentialState
  };
};

export default useStates;
