import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { classNames } from 'shared';
import { useAppDispatch } from 'store/hooks';
import { setFilters } from 'slices';
import { useTranslation } from 'react-i18next';

interface Props {
	data: string[];
	label: string;
	type: string;
	selected: string | null;
}

const DropDown: React.FC<Props> = ({ data, type, label, selected }) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const handleChangeSelection = (item: string) => {
		if (item === 'Show All') {
			dispatch(setFilters({ key: type, value: null }));
		} else {
			dispatch(setFilters({ key: type, value: item }));
		}
	};

	return (
		<Listbox value={selected} onChange={handleChangeSelection}>
			{({ open }) => (
				<div className='flex flex-col gap-3'>
					<Listbox.Label className='block text-sm font-medium text-gray-700'>{t(label)}</Listbox.Label>
					<div className='mt-1 relative'>
						<Listbox.Button className='bg-white relative w-[300px] border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
							<span className='block truncate'>
								{selected ? selected : type === 'school' ? data[0] : 'Select your ' + type}
							</span>
							<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
								<SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'>
							<Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
								{data.map((item: string) => (
									<Listbox.Option
										key={item}
										onClick={() => handleChangeSelection(item)}
										className={({ active }) =>
											classNames(
												active ? 'text-white bg-indigo-600' : 'text-gray-900',
												'cursor-default select-none relative py-2 pl-3 pr-9'
											)
										}
										value={item}>
										{({ selected, active }) => (
											<>
												<span
													className={classNames(
														selected ? 'font-semibold' : 'font-normal',
														'block truncate'
													)}>
													{item}
												</span>

												{selected ? (
													<span
														className={classNames(
															active ? 'text-white' : 'text-indigo-600',
															'absolute inset-y-0 right-0 flex items-center pr-4'
														)}>
														<CheckIcon className='h-5 w-5' aria-hidden='true' />
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</div>
			)}
		</Listbox>
	);
};
export default DropDown;
