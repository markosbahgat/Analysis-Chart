import { ReactNode } from "react";
import { classNames } from "@/shared";
import { Toggle, LangSwitcher } from "@/components/index";

interface Props {
  children: ReactNode;
  themeChanger: () => void;
  isDarkModeOn: boolean;
}

/**
 * @component The layout component is the wrapper of our application, it takes the children prop and render it inside our wrapper.
 * @params takes 3 parameters which are (children, themeChanger, isDarkModeOn)
 * @param children type ReactNode.
 * @param isDarkModeOn type boolean.
 * @param themeChanger type callback function that takes 0 params and return void.
 * @returns it should return a jsx.Element type of data
 * The layout component is responsible for giving the look for the whole application
 */

export default function Layout({
  children,
  themeChanger,
  isDarkModeOn
}: Props) {
  return (
    <main
      data-testid="main"
      className={classNames(
        isDarkModeOn ? "bg-gray-400" : "bg-slate-100",
        "min-h-[100vh] w-screen px-4 sm:px-10 h-fit flex-1 flex flex-col text-left items-baseline justify-between"
      )}
    >
      <LangSwitcher />
      <Toggle themeChanger={themeChanger} />
      {children}
    </main>
  );
}
