import { darkMode, showSidebar } from 'slices';
import { useAppDispatch } from 'store/hooks';

const useEssential = () => {
	const dispatch = useAppDispatch();
	const themeChanger = () => {
		dispatch(darkMode());
	};
	const handleSideBar = () => {
		dispatch(showSidebar());
	};
	return {
		themeChanger,
		handleSideBar,
	};
};
export default useEssential;
