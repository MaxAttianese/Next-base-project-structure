import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

const SUPPORTED_LANGUAGES = ['en', 'it'];

export default getRequestConfig(async () => {
  const store = await cookies();
  const headersList = await headers();
  const deviceLanguage = headersList.get('accept-language')?.split(',')[0].split('-')[0];

  const locale =
    store.get('locale')?.value ||
    (deviceLanguage && SUPPORTED_LANGUAGES.includes(deviceLanguage) && deviceLanguage) ||
    'en';

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
