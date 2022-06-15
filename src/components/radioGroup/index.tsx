import React from 'react';
import { IData, IFilters } from 'models';

interface Props {
    item: IData,
    filters: IFilters,
    handleChange:(value:string) => void,
}

const RadioGroup:React.FC<Props> = ({item, filters, handleChange}) => {
    return (
        <div key={item.id} className="relative flex items-start p-3">
            <div className="flex items-center h-5">
                <input
                    id={item.id}
                    aria-describedby={`${item.id}-description`}
                    name="school"
                    type="radio"
                    defaultChecked={item.school === filters.school}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    value={item.school}
                    onChange={() => handleChange(item.school)}
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor={item.id} className="font-medium text-gray-700">
                    {item.lessons} Lessons in
                </label>
                <p id={`${item.id}-description`} className="text-gray-500">
                    {item.school}
                </p>
            </div>
        </div>
    )
}

export default RadioGroup
