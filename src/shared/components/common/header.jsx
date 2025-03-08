import { useState } from "react";
import {useTranslations} from 'next-intl';
import Drawer from "./drawer";
import LangDropdown from "./lang-dropdown";


export default function Header() {
    const t = useTranslations();
    const [showDrawer, setShowDrawer] = useState(false);

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
                <LangDropdown />
            </nav>
            <div className="block sm:hidden" onClick={() => setShowDrawer(!showDrawer)}>
                <img src="/images/ic_menu.png" alt="menu"/>
            </div>
            <Drawer show={showDrawer} onClose={() => setShowDrawer(false)} />
        </div>
    </header>
}