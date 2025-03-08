import { useEffect, useState } from "react";
import Footer from "../common/footer";
import Header from "../common/header";

export default function Layout({ children }) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Header />
      {children}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          fontSize: "24px",
          padding: "10px",
          borderRadius: "50%",
          color: "white",
          border: "none",
          cursor: "pointer",
          transform: isTop ? "rotate(0deg)" : "rotate(180deg)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <img src="/images/ic_arrow-circle-up.png" alt="arrow_up" />
      </button>
      <Footer />
    </>
  );
}
