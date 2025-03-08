import AboutUs from "@/shared/components/home/about-us";
import Banner from "@/shared/components/home/banner";
import OurGames from "@/shared/components/home/our-games";
import OurPartners from "@/shared/components/home/our-partners";
import Layout from "@/shared/components/layout/layout";

function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <OurGames />
      <OurPartners />
    </>
  );
}
Home.Layout = Layout;

export async function getServerSideProps({ locale }) {
  
  return {
    props: {
      messages: (await import(`../assets/locales/${locale}/common.json`)).default
    },
  };
}
export default Home;