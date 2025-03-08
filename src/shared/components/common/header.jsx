import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {useTranslations} from 'next-intl';
import Link from "next/link";

const LANG = {
    vi: {
        short_name: "vi",
        name: "header.vietnamese",
        icon: "/images/ic_vn_flg.png"
    },
    en: {
        short_name: "en",
        name: "header.english",
        icon: "/images/ic_en_flg.png"
    }
}
export default function Header() {
    const t = useTranslations();
    const [lang, setLang] = useState(LANG.vi.short_name);
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    useEffect(() => {
        
        setLang(router.locale);
        // i18n.on("languageChanged", (val) => {
        //     setLang(val)
        // })
        // return () => {
        //     i18n.off("languageChanged")
        // }
    }, []);

    return <header className="font-mont absolute top-0 left-0 right-0 z-10 text-white uppercase font-bold">
        <div className="container flex justify-between items-center mx-auto absolute top-0 left-0 right-0 py-5">
            <div className="w-[70px] sm:w-[108px]">
                <img src={"/images/white_logo.png"} alt="Logo"/>
            </div>
            <nav className="items-center gap-[85px] hidden sm:flex">
                <a>{t("header.about_us")}</a>
                <a>{t("header.game")}</a>
                <a>{t("header.partners")}</a>
                <a>{t("header.contact_us")}</a>
                <div>
                    <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-2">
                        <img src={LANG[lang].icon} alt="flag"/>
                        <img src={"/images/ic_dropdown.png"} alt="arrow"/>
                    </button>
                    <div className={`absolute top-full right-0 w-[156px] p-2 !capitalize text-[10px] rounded-lg bg-white ${showDropdown ? "block" : "hidden"} text-black`}>
                        {Object.keys(LANG).map((key
                        , index) => (
                            <div key={key}>
                                <Link className="flex items-center gap-2" onClick={() => setLang(key)} href={router.asPath} locale={key}>
                                    <div className="w-6">
                                        {lang === key && <img src={"/images/ic_check.png"} alt="check"/>}
                                    </div>
                                    <img src={LANG[key].icon} alt="flag"/>
                                    <span>{t(LANG[key].name)}</span>
                                </Link>
                                {index !== Object.keys(LANG).length - 1 && <div className="h-[1px] bg-gray w-full"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
            <div className="block sm:hidden">
                <img src="/images/ic_menu.png" alt="menu"/>
            </div>
        </div>
    </header>
}