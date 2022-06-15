import { essentialState } from "slices/essentials.slice";
import { useAppSelector } from '../store/hooks';

export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }

const useLang = () => {
  const state = useAppSelector(essentialState);
  const getLang = () => state.lang;
  return getLang;
};

export default useLang;
