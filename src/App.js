import React from "react";
import AvApi, {
  AvMicroserviceApi,
  AvProxyApi,
  avCodesApi,
  avDisclaimersApi,
  avFilesApi,
  avFilesDeliveryApi,
  avLogMessagesApi,
  avNavigationApi,
  avNotificationApi,
  avOrganizationsApi,
  avPdfApi,
  avPermissionsApi,
  avProvidersApi,
  avRegionsApi,
  avSettingsApi,
  avSlotMachineApi,
  avSpacesApi,
  avUserApi,
  avUserPermissionsApi,
  avWebQLApi
} from "@availity/api-axios";

import "./style.css";

const download = () => {
  const payload = {
    applicationId: "credentialing-app",
    html: "<html><body>hello world</body></html>",
    fileName: "cp.pdf"
  };
  const headers = {
    "Content-Type": "application/json",
    "X-Availity-Customer-ID": "1194"
  };
  avPdfApi.getPdf(payload, headers);
};
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={() => download()}>Download</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
