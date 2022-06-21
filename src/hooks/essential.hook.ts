import { darkMode } from 'slices';
import { useAppDispatch } from 'store/hooks';

const useEssential = () => {
	const dispatch = useAppDispatch();
	const themeChanger = () => {
		dispatch(darkMode());
	};
	return {
		themeChanger,
	};
};
export default useEssential;
