import React, { useState } from "react";
import { erGyldigFodselsnummer } from "../utils/fnrValideringUtil";
import {Search} from "@navikt/ds-react";

interface SokeboksProps {
  handleSubmitGyldigFnr(fnr: string): void;
}

const Sokeboks = ({ handleSubmitGyldigFnr }: SokeboksProps) => {
  const [value, setValue] = useState("");
  const [valideringsfeil, setValideringsfeil] = useState(false);

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const input = value.replace(/\s/g, "");
    if (erGyldigFodselsnummer(input)) {
      handleSubmitGyldigFnr(input);
    } else {
      setValideringsfeil(true);
    }
  };

  const sokefeltEndret = (value: string) => {
    setValue(value);
    setValideringsfeil(false);
  };

  return (
    <div className="sokeboks blokk">
      <form onSubmit={onSubmit} role={"search"}>
        <Search
            label={"Søk opp fastlegen"}
            hideLabel={true}
            variant={"primary"}
            error={
            valideringsfeil
              ? "Du må skrive inn et gyldig fødselsnummer (11 siffer)"
              : undefined
            }
            onChange={sokefeltEndret}
            placeholder="Søk"
            value={value}
        />
        {/*<Hovedknapp>Søk</Hovedknapp>*/}
      </form>
    </div>
  );
};

export default Sokeboks;
