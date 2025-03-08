import { useTranslations } from "next-intl";
import Slider from "react-slick";

export default function OurPartners() {
    const t = useTranslations();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <div>
      <img className="" src="/images/ic_next.png" />
    </div>,
    prevArrow: <div>
       <img className="!w-10 !h-10" src="/images/ic_prev.png" />
    </div>,
    responsive: [
        {
            breakpoint: 475,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: "15%",
            }
        }
    ]
  };
  const items = [
    "/images/partners/ea.png",
    "/images/partners/game.png",
    "/images/partners/power_up.png",
    "/images/partners/disney.png",
    "/images/partners/book_pro.png",
    "/images/partners/sega.png",
    "/images/partners/2k.png",
  ];
  return (
    <div className="bg-[#F6F6F6] py-10 sm:py-[120px]">
        <div className="sm:max-w-[calc(100%_-_460px)] mx-auto">
            <h2 className="text-[40px] sm:text-6xl font-black text-center mb-6">
                {t("our_partners")}
            </h2>
            <Slider {...settings} className="mt-20">
                {items.map((item, index) => (
                    <div key={index}>
                        <img className="mx-auto" src={item} alt={`Partner ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  );
}
