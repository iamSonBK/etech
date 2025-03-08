import {useTranslations} from 'next-intl';

export default function AboutUs() {
    const t = useTranslations();
    const items = [
        {
            title: t("about_us.hours"),
            description: t("about_us.hours_description"),
            icon: "/images/ic_calendar.png"
        },
        {
            title: t("about_us.design"),
            description: t("about_us.design_description"),
            icon: "/images/ic_design.png"
        },
        {
            title: t("about_us.team"),
            description: t("about_us.team_description"),
            icon: "/images/ic_team.png"
        },
        
        
    ]
    return (
        <div className='sm:max-w-[calc(100%_-_760px)] mx-auto mt-12 sm:mt-32 mb-32'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                <div className='flex flex-col px-4 sm:px-0 '>
                    <h2 className='text-black text-[40px] sm:text-6xl font-black mb-4 sm:mb-10'>{t("about_us.title")}</h2>
                    <p className='text-gray2 font-mont text-sm font-normal mb-[39px] sm:mb-[60px]'>{t("about_us.description")}</p>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='font-mont mb-[39px]'>
                            <p className='font-bold text-[44px] sm:text-[80px] text-blue'>600<small className='text-[56%]'>M</small>+</p>
                            <p className='text-black text-2xl font-bold'>{t("about_us.users")}</p>
                        </div>
                        <div className='font-mont mb-[39px]'>
                            <p className='font-bold text-[44px] sm:text-[80px] text-blue'>135+</p>
                            <p className='text-black text-2xl font-bold'>{t("about_us.games")}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-gray-light py-10 sm:py-[113px] px-4 sm:px-[75px] gap-10 font-mont'>
                    {items.map((item, index) => {
                        return <div className='flex items-start justify-center gap-6' key={index}>
                            <img src={item.icon} alt={item.title} className='w-[50px] h-[50px]' />
                            <div>
                                <p className='text-black text-2xl font-bold mb-2'>{item.title}</p>
                                <p className='text-gray2 text-sm font-normal'>{item.description}</p>
                            </div>
                        </div>
                    })}
                </div>
                
                
            </div>
            <div>
                <div className='max-w-[533px] translate-y-[100px] mx-auto '>
                    <img className='animate-fly' src="/images/witch.png" alt="game" />
                </div>
                <div className='w-full'>
                    <img className='w-full h-full object-contain' src="/images/map.png" alt="game" />
                </div>
            </div>
        </div>
    )
}