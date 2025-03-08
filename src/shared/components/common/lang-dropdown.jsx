import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LangDropdown({iconDropdown = "/images/ic_dropdown.png"}) {
  const LANG = {
    vi: {
      short_name: "vi",
      name: "header.vietnamese",
      icon: "/images/ic_vn_flg.png",
    },
    en: {
      short_name: "en",
      name: "header.english",
      icon: "/images/ic_en_flg.png",
    },
  };
  const t = useTranslations();
  const router = useRouter();
  const [lang, setLang] = useState(router.locale);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2"
        >
          <img src={LANG[lang].icon} alt="flag" />
          <img src={iconDropdown} alt="arrow" />
        </button>
      </div>
      <div
        className={`absolute top-[80px] sm:top-[100%] left-0 sm:left-auto sm:right-0 w-[156px] p-2 !capitalize text-[10px] rounded-lg bg-white z-20 ${
          showDropdown ? "block" : "hidden"
        } text-black`}
      >
        {Object.keys(LANG).map((key, index) => (
          <div key={key}>
            <Link
              className="flex items-center gap-2"
              onClick={() => setLang(key)}
              href={router.asPath}
              locale={key}
            >
              <div className="w-6">
                {lang === key && (
                  <img src={"/images/ic_check.png"} alt="check" />
                )}
              </div>
              <img src={LANG[key].icon} alt="flag" />
              <span>{t(LANG[key].name)}</span>
            </Link>
            {index !== Object.keys(LANG).length - 1 && (
              <div className="h-[1px] bg-gray w-full"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
