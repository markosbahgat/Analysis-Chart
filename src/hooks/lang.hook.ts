import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { changeLang } from "@/slices/index";
import { useAppDispatch } from "@/store/hooks";

const useLang = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const chLang = useCallback(
    (value: string) => {
      i18n.changeLanguage(value.toLowerCase());
      localStorage.setItem("Lang", value);
      dispatch(changeLang(value));
    },
    [dispatch, i18n]
  );
  return chLang;
};

export default useLang;
