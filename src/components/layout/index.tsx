import { classNames } from 'shared';
import { ReactNode } from 'react';
import { Toggle, LangSwitcher } from 'components';

type Props = {
	children: ReactNode;
	themeChanger: () => void;
	isDarkModeOn: boolean;
};

const Layout: React.FC<Props> = ({ children, themeChanger, isDarkModeOn }) => {
	return (
		<main
			data-testid='main'
			className={classNames(isDarkModeOn ? 'bg-gray-400' : 'bg-white', 'min-h-[100vh] h-fit flex-1')}>
			<LangSwitcher />
			<Toggle themeChanger={themeChanger} />
			{children}
		</main>
	);
};

export default Layout;
