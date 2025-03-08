import { Montserrat, Playfair_Display } from "next/font/google";
import "@/assets/styles/globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { useRouter } from "next/router";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const Noop = ({ children }) => children;
const App = ({ Component, pageProps }) => {
  const _Layout = Component.Layout || Noop;
  const router = useRouter();
  const locale = router.locale || 'vi';
  return (
     <NextIntlClientProvider
      locale={locale}
      messages={pageProps.messages}
    >
      <_Layout>
        <Component {...pageProps} />
      </_Layout>
    </NextIntlClientProvider>
  );
}

export default App;