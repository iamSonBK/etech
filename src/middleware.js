import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['vi', 'en'],
  
  // Used when no locale matches
  defaultLocale: 'vi',
  
  // Enable locale detection
  localeDetection: false
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|.*\\..*).*)']
};