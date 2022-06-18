import { classNames, currentItemClasses, navigation, userNavigation } from 'shared';
import { Dialog, Menu } from '@headlessui/react';
import { BellIcon, MenuAlt2Icon, SearchIcon, XIcon } from '@heroicons/react/outline';
import { ReactNode } from 'react';
import { Toggle, LangSwitcher } from 'components';
import Logo from 'assets/images/pic.jpg';
import { Link } from 'react-router-dom';

type Props = {
	handleSideBar: () => void;
	isSideBarOpen: boolean;
	children: ReactNode;
	themeChanger: () => void;
	isDarkModeOn: boolean;
};

const Layout: React.FC<Props> = ({ children, isSideBarOpen, handleSideBar, themeChanger, isDarkModeOn }) => {
	const darkModeClasses = (dark: string, light: string) => {
		if (isDarkModeOn) return dark;
		else return light;
	};
	return (
		<>
			<Dialog as='div' className='relative z-40 md:hidden ' open={isSideBarOpen} onClose={handleSideBar}>
				<div className='fixed inset-0 bg-gray-600 bg-opacity-75' />

				<div className='fixed inset-0 flex z-40'>
					<Dialog.Panel
						className={classNames(
							isDarkModeOn ? 'bg-gray-400' : ' bg-white',
							'relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4'
						)}>
						<div className='absolute top-0 right-0 -mr-12 pt-2'>
							<button
								type='button'
								className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
								onClick={handleSideBar}>
								<span className='sr-only'>Close sidebar</span>
								<XIcon className='h-6 w-6 text-white' aria-hidden='true' />
							</button>
						</div>
						<div className='flex-shrink-0 flex items-center px-4'>
							<img
								className='h-8 w-auto'
								src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
								alt='Workflow'
							/>
						</div>
						<div className='mt-5 flex-1 h-0 overflow-y-auto'>
							<nav className='px-2 space-y-1'>
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										className={classNames(
											darkModeClasses(
												currentItemClasses(
													item.current,
													'bg-gray-900 text-white',
													'text-gray-300 hover:bg-gray-700 hover:text-white'
												),
												currentItemClasses(
													item.current,
													'bg-gray-100 text-gray-900',
													'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
												)
											),
											'group flex items-center px-2 py-2 text-base font-medium rounded-md'
										)}>
										<item.icon
											className={classNames(
												item.current
													? 'text-gray-500'
													: 'text-gray-400 group-hover:text-gray-500',
												'mr-4 flex-shrink-0 h-6 w-6'
											)}
											aria-hidden='true'
										/>
										{item.name}
									</Link>
								))}
							</nav>
						</div>
					</Dialog.Panel>
					{/* Dummy element to force sidebar to shrink to fit close icon */}
					<div className='flex-shrink-0 w-14' aria-hidden='true' />
				</div>
			</Dialog>

			{/* Static sidebar for desktop */}
			<div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div
					className={classNames(
						isDarkModeOn ? 'bg-gray-400' : 'bg-white',
						'flex flex-col flex-grow border-r border-gray-200 pt-5 overflow-y-auto'
					)}>
					<div className='flex items-center flex-shrink-0 px-4'>
						<img
							className='h-8 w-auto'
							src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
							alt='Workflow'
						/>
					</div>
					<div className='mt-5 flex-grow flex flex-col'>
						<nav className='flex-1 px-2 pb-4 space-y-1'>
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className={classNames(
										item.current
											? 'bg-gray-100 text-gray-900'
											: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
										'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
									)}>
									<item.icon
										className={classNames(
											item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
											'mr-3 flex-shrink-0 h-6 w-6'
										)}
										aria-hidden='true'
									/>
									{item.name}
								</Link>
							))}
						</nav>
					</div>
				</div>
			</div>
			<div className='md:pl-64 flex flex-col flex-1'>
				<div
					className={classNames(
						isDarkModeOn
							? 'sticky top-0 z-10 flex-shrink-0 flex h-16 bg-gray-400 shadow'
							: 'sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow'
					)}>
					<button
						type='button'
						className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
						onClick={handleSideBar}>
						<span className='sr-only'>Open sidebar</span>
						<MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
					</button>
					<div className='flex-1 px-4 flex justify-between'>
						<div className='flex-1 flex'>
							<form className='w-full hidden md:flex items-center gap-10 md:ml-0'>
								<label htmlFor='search-field' className='sr-only'>
									Search
								</label>
								<div className='relative w-full text-gray-400 focus-within:text-gray-600'>
									<div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
										<SearchIcon className='h-5 w-5 mx-5' aria-hidden='true' />
									</div>
									<input
										id='search-field'
										className='block w-full rounded-lg h-full pl-12 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
										placeholder='Search'
										type='search'
										name='search'
									/>
								</div>
							</form>
						</div>
						<div className='ml-4 flex items-center md:ml-6 gap-6'>
							<LangSwitcher />
							<Toggle themeChanger={themeChanger} />
							<button
								type='button'
								className='bg-white p-1 hidden md:flex rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
								<span className='sr-only'>View notifications</span>
								<BellIcon className='h-6 w-6' aria-hidden='true' />
							</button>

							{/* Profile dropdown */}
							<Menu as='div' className='ml-3 relative'>
								<div>
									<Menu.Button
										className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
										data-testid='menuButton'>
										<span className='sr-only'>Open user menu</span>
										<img className='h-8 w-8 rounded-full' src={Logo} alt='' />
									</Menu.Button>
								</div>
								<Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
									{userNavigation.map((item) => (
										<Menu.Item key={item.name}>
											{({ active }: any) => (
												<a
													href={item.href}
													className={classNames(
														active ? 'bg-gray-100' : '',
														'block px-4 py-2 text-sm text-gray-700'
													)}
													onClick={() =>
														item.href === 'SignIn' && localStorage.removeItem('token')
													}>
													{item.name}
												</a>
											)}
										</Menu.Item>
									))}
								</Menu.Items>
							</Menu>
						</div>
					</div>
				</div>
				<main
					data-testid='main'
					className={classNames(isDarkModeOn ? 'bg-gray-400' : 'bg-white', 'min-h-[100vh] h-fit flex-1')}>
					{children}
				</main>
			</div>
		</>
	);
};

export default Layout;
