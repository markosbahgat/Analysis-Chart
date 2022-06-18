import { useTranslation } from 'react-i18next';
import { changeLang } from 'slices';
import { useAppDispatch } from 'store/hooks';

const useLang = () => {
	const { i18n } = useTranslation();
	const dispatch = useAppDispatch();
	const chLang = (value: string) => {
		i18n.changeLanguage(value.toLowerCase());
		localStorage.setItem('Lang', value);
		dispatch(changeLang(value));
	};
	return chLang;
};

export default useLang;
