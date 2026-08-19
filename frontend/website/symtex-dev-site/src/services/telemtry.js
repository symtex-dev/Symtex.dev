// telemetry.js

import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const connectionString = window.APP_CONFIG?.appInsightsConnectionString;

let appInsights = null;
const hasConnectionString = connectionString && !connectionString.startsWith('__');

if (hasConnectionString) {
  appInsights = new ApplicationInsights({
    config: { connectionString }
  });
  appInsights.loadAppInsights();
}

export default appInsights;