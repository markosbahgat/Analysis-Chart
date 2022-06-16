import React from 'react'
import { useTranslation } from 'react-i18next';

interface Props {}

const LangSwitcher:React.FC<Props> = () => {
    const { i18n } = useTranslation();
    return (
      <>
      <select
        id="lang"
        name="lang"
        className="mt-1 block  py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="EN"
        onChange={(e) => i18n.changeLanguage(e.target.value.toLowerCase())}
      >
        <option>EN</option>
        <option>AR</option>
      </select>
      </>
  )
}

export default LangSwitcher
