import React, { useCallback } from "react";
import NAVSPA from "@navikt/navspa";
import { DecoratorProps } from "./decoratorProps";
import decoratorConfig from "./decoratorconfig";

const InternflateDecorator = NAVSPA.importer<DecoratorProps>(
  "internarbeidsflatefs"
);

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
