import { useCallback } from "react";
import { darkMode } from "@/slices/index";
import { useAppDispatch } from "@/store/hooks";

const useEssential = () => {
  const dispatch = useAppDispatch();
  const themeChanger = useCallback(() => {
    dispatch(darkMode());
  }, [dispatch]);
  return {
    themeChanger
  };
};
export default useEssential;
