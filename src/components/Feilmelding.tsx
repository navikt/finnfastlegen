import React from "react";
import {Detail, ErrorMessage} from "@navikt/ds-react";

interface FeilmeldingProps {
  tittel: string;
  melding: string;
}

const Feilmelding = ({ tittel, melding }: FeilmeldingProps) => {
  return (
    <div className="feilmelding panel">
      <Detail className="hode hode--feil">{tittel}</Detail>
      <ErrorMessage>{melding}</ErrorMessage>
    </div>
  );
};

export default Feilmelding;
