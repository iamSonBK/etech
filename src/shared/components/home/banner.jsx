import { padStart } from '@/shared/utils/utils';
import {useTranslations} from 'next-intl';
import { useEffect, useState } from 'react';

export default function Banner() {
    const t = useTranslations();
    const deadline = "December, 30, 2025";
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(padStart(Math.floor((time / (1000 * 60 * 60 * 24)) % 24)));
        setHours(padStart(Math.floor((time / (1000 * 60 * 60)) % 24)));
        setMinutes(padStart(Math.floor((time / 1000 / 60) % 60)));
        setSeconds(padStart(Math.floor((time / 1000) % 60)));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, [])
  return (
    <div>
        <div
        className="relative h-[75vh] sm:h-[100vh] max-h-[1018px] bg-[url('/images/banner_sp.png')] sm:bg-[url('/images/banner_pc.png')] bg-cover sm:bg-contain"
        style={{
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            width: "100vw",
        }}
        >
            <div className="flex flex-col items-center justify-center h-full max-h-[650px] sm:max-h-[1018px]">
                <h3 className='text-white text-[40px] sm:text-[80px] font-black mb-[21px] mt-10 sm:mt-0 text-center px-12 sm:px-0'>{t("banner.we_re_getting_ready")}</h3>
                <div className='container sm:!max-w-[756px] bg-white rounded-[21px] flex items-center justify-between text-4xl sm:text-6xl sm:gap-14 px-[39px] py-[26px] drop-shadow-[0_4px_10px_hsla(0,0%,0%,0.25)] tabular-nums mb-10 sm:mb-[97px]'>
                    <p className='flex flex-col items-center justify-center gap-3'>
                        <span className='font-black'>{days}</span>
                        <span className='text-[15px] font-mont font-bold'>{t("days")}</span>
                    </p>
                    <span>:</span>
                    <p className='flex flex-col items-center justify-center gap-3'>
                        <span className='font-black'>{hours}</span>
                        <span className='text-[15px] font-mont font-bold'>{t("hours")}</span>
                    </p>
                    <span>:</span>
                    <p className='flex flex-col items-center justify-center gap-3'>
                        <span className='font-black'>{minutes}</span>
                        <span className='text-[15px] font-mont font-bold'>{t("minutes")}</span>
                    </p>
                    <span>:</span>
                    <p className='flex flex-col items-center justify-center gap-3'>
                        <span className='font-black'>{seconds}</span>
                        <span className='text-[15px] font-mont font-bold'>{t("seconds")}</span>
                    </p>
                </div>
                <p className='text-white text-sm sm:text-lg font-mont font-normal mb-4 sm:mb-8 text-center sm:whitespace-pre-line px-4 sm:px-0'>{t("banner.we_will_back_to_something")}</p>
                <form className='gap-4 max-w-[560px] font-mont w-full px-4 sm:px-0'>
                    <div className='w-full flex items-center justify-between bg-white rounded-lg px-[14px] '>
                        <input type="email" placeholder={t("form.email.placeholder")} className='py-[18px] text-gray-dark text-sm w-full outline-0 shadow-none' />
                        <button>
                            <img src="/images/ic_arrow_right.png" alt="arrow_right" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className='block sm:hidden translate-y-[-60px]'>
            <img src="/images/witch_man.png" alt='witch man'/>
        </div>
    </div>
  );
}
