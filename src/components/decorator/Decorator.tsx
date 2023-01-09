import React, { useCallback } from "react";
import {AsyncNavspa} from "@navikt/navspa";
import { DecoratorProps } from "./decoratorProps";
import decoratorConfig from "./decoratorconfig";

const InternflateDecorator = AsyncNavspa.importer<DecoratorProps>({
    appName: "internarbeidsflatefs",
    appBaseUrl: "https://navikt.github.io/internarbeidsflatedecorator/v2.1"
});

const Decorator = () => {
  const handlePersonsokSubmit = () => {
    return;
  };

  const config = useCallback(decoratorConfig, [handlePersonsokSubmit])(
    handlePersonsokSubmit
  );

  return <InternflateDecorator {...config} />;
};

export default Decorator;
