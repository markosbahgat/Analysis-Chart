import React from "react";
import { useAppSelector } from "store/hooks";
import { essentialState } from "slices";
import { useLang } from "hooks";

export default function LangSwitcher() {
  const chLang = useLang();
  const state = useAppSelector(essentialState);
  return (
    <select
      data-testid="lang-switcher"
      id="lang"
      name="lang"
      className="absolute right-56 top-6 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      defaultValue={localStorage.getItem("Lang") ?? state.lang}
      onChange={(e) => chLang(e.target.value)}
    >
      <option value="EN">EN</option>
      <option value="AR">AR</option>
    </select>
  );
}
