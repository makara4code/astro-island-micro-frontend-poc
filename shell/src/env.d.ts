/// <reference types="astro/client" />

// Type declarations for remote microfrontend modules
declare module "http://localhost:7100/bundle.js" {
  const MicroFrontendReact1: () => JSX.Element;
  export default MicroFrontendReact1;
}

declare module "http://localhost:7200/bundle.js" {
  const MicroFrontendReact2: () => JSX.Element;
  export default MicroFrontendReact2;
}

declare module "http://localhost:7300/bundle.js" {
  const MicroFrontendSolid: () => JSX.Element;
  export default MicroFrontendSolid;
}
