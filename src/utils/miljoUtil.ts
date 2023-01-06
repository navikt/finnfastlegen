export const erPreProd = () => {
  return window.location.href.indexOf("dev.intern.nav.no") > -1;
};

export const erLokal = () => {
  return window.location.host.indexOf("localhost") > -1;
};

export const finnNaisUrlDefault = () => {
  return erPreProd() ? ".dev.intern.nav.no" : ".intern.nav.no";
};

export const fullNaisUrlDefault = (host: string, path: string) => {
  if (erLokal()) {
    return `http://localhost:8081${path}`;
  }
  return `https://${host}${finnNaisUrlDefault()}${path}`;
};
