// This is the default configuration for the dev mode of the web console.
// A generated version of this config is created at run-time when running
// the web console from the openshift binary.
//
// To change configuration for local development, copy this file to
// assets/app/config.local.js and edit the copy.
window.OPENSHIFT_CONFIG = {
  apis: {
    hostPort: "master.ocp.ck.osecloud.com:8443",
    prefix: "/apis"
  },
  api: {
    openshift: {
      hostPort: "master.ocp.ck.osecloud.com:8443",
      prefix: "/oapi"
    },
    k8s: {
      hostPort: "master.ocp.ck.osecloud.com:8443",
      prefix: "/api"
    }
  },
  auth: {
    oauth_authorize_uri: "https://master.ocp.ck.osecloud.com:8443/oauth/authorize",
    oauth_redirect_base: "https://localhost:9000/dev-console",
    oauth_client_id: "openshift-web-console",
    logout_uri: ""
  },
  loggingURL: "",
  metricsURL: ""
};

window.OPENSHIFT_VERSION = {
  openshift: "dev-mode",
  kubernetes: "dev-mode"
};
