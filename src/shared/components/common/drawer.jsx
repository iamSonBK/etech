import LangDropdown from "./lang-dropdown";
import { useTranslations } from "next-intl";

export default function Drawer({show, onClose}) {
    const t = useTranslations();
    return (
        <div className={`fixed top-0 left-0 w-full h-full z-10 bg-white bg-opacity-50 block transition-all duration-300 ${show ? 'translate-x-[0%]' : 'translate-x-[100%]'}`}>
            <div className="px-4">
                <div className="flex justify-between py-6">
                    <div className="bg-[#F6F6F6] border border-[#AFAFAF] rounded-lg w-[100px] flex items-center justify-center">
                        <LangDropdown iconDropdown="/images/ic_dropdown_black.png" />
                    </div>
                    <button onClick={onClose} className="w-[30px] h-[30px]">
                        <img src="/images/ic_close.png" alt="close" />
                    </button>
                </div>
                <nav className="flex flex-col gap-4 text-black">
                    <a className="text-center border-b border-gray-light py-6">{t("header.about_us")}</a>
                    <a className="text-center border-b border-gray-light py-6">{t("header.game")}</a>
                    <a className="text-center border-b border-gray-light py-6">{t("header.partners")}</a>
                    <a className="text-center py-6">{t("header.contact_us")}</a>
                </nav>
            </div>
        </div>
    )
}