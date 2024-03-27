import React, { useEffect } from 'react';
import { AppCore } from '@influenzanet/case-web-app-core';
import { useTranslation } from 'react-i18next';

import { AppConfig } from '@influenzanet/case-web-app-core';
import { FooterConfig } from '@influenzanet/case-web-app-core';
import { HeaderConfig } from '@influenzanet/case-web-app-core';
import { NavbarConfig } from '@influenzanet/case-web-app-core';
import { PagesConfig } from '@influenzanet/case-web-app-core';

import { it } from 'date-fns/locale';

import * as appConfig from './configs/appConfig.json';
import * as footerConfig from './configs/footer.json';
import * as headerConfig from './configs/header.json';
import * as navbarConfig from './configs/navbar.json';
import * as pagesConfig from './configs/pages.json';

const dateLocales = [{ code: 'it', locale: it, format: 'dd/MM/yyyy' }];

let appConfig_: AppConfig = { ...appConfig };
if (process.env.REACT_APP_DEFAULT_INSTANCE) {
  appConfig_.instanceId = process.env.REACT_APP_DEFAULT_INSTANCE;
}

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppCore
        appConfig={appConfig_}
        headerConfig={headerConfig as HeaderConfig}
        navbarConfig={navbarConfig as NavbarConfig}
        pagesConfig={pagesConfig as PagesConfig}
        footerConfig={footerConfig as FooterConfig}
        dateLocales={dateLocales}
      />
    </React.Fragment>
  );
};

export default App;
