import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer>
      <div className="bg-cover sm:h-[446px]"
        style={{
          backgroundImage: "url('/images/footer.png')",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          width: "100%",
          
        }}
      >
        <div className="sm:max-w-[calc(100%_-_460px)] mx-auto flex flex-col sm:flex-row justify-between items-start pt-[108px] pb-[62px] sm:pb-0">
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/3 mb-[68px] sm:mb-0">
            <img
              className="w-[163px] mb-10"
              src="/images/white_logo.png"
              alt="logo"
            />
            <div className="flex items-center justify-start gap-6">
              <a>
                <img src="/images/ic_x.png" alt="twitter" />
              </a>
              <a>
                <img src="/images/ic_fb.png" alt="facebook" />
              </a>
              <a>
                <img src="/images/ic_linked.png" alt="instagram" />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row font-mont w-full sm:w-2/3 gap-10 text-white px-4 sm:px-0">
            <div className="flex flex-col gap-10 w-full sm:w-1/2">
              <p className="text-2xl font-bold font-mont">
                {t("footer.address")}
              </p>
              <div className="text-white flex gap-[13px]">
                <img
                  className="w-10 h-10 object-contain"
                  src="/images/ic_address.png"
                />
                <div>
                  <p className="text-sm font-normal">{t("footer.address_description1")}</p>
                  <p className="text-sm font-normal">{t("footer.address_description2")}</p>
                </div>
              </div>
              <div className="text-white flex gap-[13px] items-center">
                <img
                  className="w-10 h-10 object-contain"
                  src="/images/ic_phone.png"
                />
                <div>
                  <p className="text-sm font-normal">{t("footer.phone")}</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-10">
              <p className="text-white text-2xl font-bold font-mont">
                {t("footer.subscribe")}
              </p>
              <p className="text-sm font-normal">{t("footer.subscribe_description")}</p>
              <form className="gap-4 max-w-[560px] font-mont w-full">
                <div className="w-full flex items-center justify-between bg-transparent border border-white rounded-lg px-[14px] ">
                  <input
                    type="email"
                    placeholder={t("form.email.placeholder")}
                    className="py-[18px] text-white text-sm w-full outline-0 shadow-none"
                  />
                  <button>
                    <img src="/images/ic_arrow_right_white.png" alt="arrow_right" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-black text-center text-white pt-[30px] pb-[27px] font-mont text-lg">
        2017 Copyright, Policy
      </p>
    </footer>
  );
}
