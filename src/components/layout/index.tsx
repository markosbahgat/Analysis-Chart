import { ReactNode } from "react";
import { classNames } from "@/shared";
import { Toggle, LangSwitcher } from "@/components/index";

interface Props {
  children: ReactNode;
  themeChanger: () => void;
  isDarkModeOn: boolean;
}

export default function Layout({
  children,
  themeChanger,
  isDarkModeOn
}: Props) {
  return (
    <main
      data-testid="main"
      className={classNames(
        isDarkModeOn ? "bg-gray-400" : "bg-white",
        "min-h-[100vh] h-fit flex-1"
      )}
    >
      <LangSwitcher />
      <Toggle themeChanger={themeChanger} />
      {children}
    </main>
  );
}
