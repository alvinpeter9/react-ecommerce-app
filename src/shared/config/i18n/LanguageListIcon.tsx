import type { FunctionComponent, SVGProps } from "react";
import type { supportedLngs } from "./i18n";

import EnglishIcon from "@/shared/assets/icons/English.svg?react";
import GermanIcon from "@/shared/assets/icons/German.svg?react";

export type SupportedLngsType = (typeof supportedLngs)[number];

type LanguageIconListType = Record<
  SupportedLngsType,
  FunctionComponent<SVGProps<SVGSVGElement>>
>;

export const languageListIcon: LanguageIconListType = {
  en: EnglishIcon,
  de: GermanIcon,
};
