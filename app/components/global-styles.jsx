import { injectGlobal } from 'styled-components';
import caslon from  './fonts/caslonpro-regular-webfont.woff';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'Roboto', Arial, sans-serif;
    color: #282633;
    font-size: 16px;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  p {
    line-height: 1.5em;
  }

  @font-face {
	  font-family: 'Caslon';
	  src: url(${caslon});
	}
`;
