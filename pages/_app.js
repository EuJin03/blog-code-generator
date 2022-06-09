import '../styles/global.scss';
import { IntlProvider } from 'react-intl';
import { BreakpointProvider } from 'react-socks';
import messages from '../lang/languages.js';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale='en' messages={messages}>
      <BreakpointProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BreakpointProvider>
    </IntlProvider>
  );
}

export default MyApp;
