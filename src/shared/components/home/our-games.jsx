import { useTranslations } from "next-intl";
import Title from "../common/title";

export default function OurGames() {
  const t = useTranslations();
  const items = [
    {
      title: "E-Space",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/e-space.png",
    },
    {
      title: "Pirates",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/pirates.png",
    },
    {
      title: "Magic tree",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/magic-tree.png",
    },
    {
      title: "Kingland",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/kingland.png",
    },
    {
      title: "Witch Party",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/witch-party.png",
    },
    {
      title: "Aborigines",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/aborigines.png",
    },
    {
      title: "The Last Game",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/the-last-game.png",
    },
    {
      title: "Rocky",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/rocky.png",
    },
    {
      title: "Cinderella",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/cinderella.png",
    },
    {
      title: "G-Dragon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/g-dragon.png",
    },
    {
      title: "Blue Fire",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/blue-fire.png",
    },
    {
      title: "Egypt Game",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: "/images/games/egypt-game.png",
    },
  ];
  return (
    <div className="mb-24 sm:mb-[246px]">
      <div className="container mx-auto">
        <Title title={t("our_games.title")} />
        <p className="text-sm text-center mb-[80px] text-gray2 whitespace-pre-line font-mont">
          {t("our_games.description")}
        </p>
        <div className="grid grid-cols-2 gap-5 sm:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
            {items.slice(0, 6).map((item, index) => {
              const className = index % 2 !== 0 ? "sm:translate-y-[118px] translate-y-0" : "";
              return <div
                key={index}
                className={`relative ${className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 w-full px-2 sm:px-8 pb-10 font-mont">
                  <p className="text-white text-lg sm:text-5xl font-bold mb-[15px]">{item.title}</p>
                  <p className="text-white text-xs sm:text-sm font-normal">{item.description}</p>
                </div>
              </div>
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 translate-y-[48px] sm:translate-y-0">
            {items.slice(6, 12).map((item, index) => {
              const className = index % 2 !== 0 ? "sm:translate-y-[118px] translate-y-0" : "";

              return <div
                key={index}
                className={`relative ${className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 w-full px-2 sm:px-8 pb-10 font-mont">
                  <p className="text-white text-lg sm:text-5xl font-bold mb-[15px]">{item.title}</p>
                  <p className="text-white text-xs sm:text-sm font-normal">{item.description}</p>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
