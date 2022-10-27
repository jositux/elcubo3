import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="google" content="notranslate" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
         
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,500;1,300;1,400;1,500&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Dosis:300,400,500,600,700&display=swap"
          />
          <link rel="preconnect" href={process.env.MEDIA_CONTENT_URL} />

          <meta name="theme-color" content="#000000" />
          
          <script defer src="/js/elcubo.js"></script>

          <script src="https://assets.adobedtm.com/e933046cf85b/43bda685d511/launch-857ec8f058be.min.js" async></script>

          {/* Facebook Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '310094500701365');
              fbq('track', 'PageView');`,
            }}
          />
          
          {/* End Facebook Pixel Code */}
          
        </Head>
        <body>
        <noscript dangerouslySetInnerHTML={{__html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=310094500701365&ev=PageView&noscript=1"
/>`}} />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
