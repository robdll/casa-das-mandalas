import { NextRequest, NextResponse } from 'next/server';
import { locales } from './i18n';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get locale from cookie or Accept-Language header
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const acceptLanguage = request.headers.get('accept-language');
  
  let locale = cookieLocale || 'en';
  
  // If no cookie, try to detect from Accept-Language header
  if (!cookieLocale && acceptLanguage) {
    const preferredLanguages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase().substring(0, 2));
    
    for (const lang of preferredLanguages) {
      if (locales.includes(lang as any)) {
        locale = lang;
        break;
      }
    }
  }
  
  // Set locale cookie if not present
  const response = NextResponse.next();
  if (!cookieLocale) {
    response.cookies.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
  }
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

