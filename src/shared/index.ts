import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';
export const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}
export const colorArray = [
	'#FF6633',
	'#FFB399',
	'#FF33FF',
	'#FFFF99',
	'#00B3E6',
	'#E6B333',
	'#3366E6',
	'#999966',
	'#99FF99',
	'#B34D4D',
	'#80B300',
	'#809900',
	'#E6B3B3',
	'#6680B3',
	'#66991A',
	'#FF99E6',
	'#CCFF1A',
	'#FF1A66',
	'#E6331A',
	'#33FFCC',
	'#66994D',
	'#B366CC',
	'#4D8000',
	'#B33300',
	'#CC80CC',
	'#66664D',
	'#991AFF',
	'#E666FF',
	'#4DB3FF',
	'#1AB399',
	'#E666B3',
	'#33991A',
	'#CC9999',
	'#B3B31A',
	'#00E680',
	'#4D8066',
	'#809980',
	'#E6FF80',
	'#1AFF33',
	'#999933',
	'#FF3380',
	'#CCCC00',
	'#66E64D',
	'#4D80CC',
	'#9900B3',
	'#E64D66',
	'#4DB380',
	'#FF4D4D',
	'#99E6E6',
	'#6666FF',
];

export const flagIdentifier = (value: string) => {
	switch (value) {
		case 'Egypt':
			return '🇪🇬';
		case 'Kenya':
			return '🇰🇪';
		case 'Tunisia':
			return '🇹🇳';
		case 'Tanzania':
			return '🇹🇿';
		default:
			break;
	}
};

export const currentItemClasses = (current: boolean, trueClasses: string, falseClasses: string) => {
	if (current) return trueClasses;
	else return falseClasses;
};

export const navigation = [
	{ name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
	{ name: 'Details', href: '#', icon: ChartBarIcon, current: false },
	{ name: 'Team', href: '#', icon: UsersIcon, current: false },
	{ name: 'Projects', href: '#', icon: FolderIcon, current: false },
	{ name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
	{ name: 'Documents', href: '#', icon: InboxIcon, current: false },
];
export const userNavigation = [
	{ name: 'Your Profile', href: '/profile' },
	{ name: 'Settings', href: '/settings' },
	{ name: 'Sign out', href: 'SignIn' },
];

export const dummyDataSet = {
	id: Date.now().toLocaleString(),
	dataSets: {
		label: 'Testing School',
		data: [200, 150, 100, 230, 40, 90, 150, 80, 180, 260, 200, 100],
		borderColor: 'rgb(53, 162, 235)',
		fill: false,
		borderWidth: 3,
		hoverRadius: 10,
		radius: 5,
		backgroundColor: 'transparent',
	},
};
