// telemetry.js

import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    connectionString:
        window.APP_CONFIG.appInsightsConnectionString
  }
});

appInsights.loadAppInsights();

export default appInsights;