import React, { useState } from "react";
import Sokeboks from "./Sokeboks";
import { Fastlege } from "./Fastlege";
import { fastlegeQueryKeys } from "../data/fastlege/fastlegeQueryHooks";
import { useQueryClient } from "@tanstack/react-query";
import {Detail, Heading} from "@navikt/ds-react";

export const texts = {
  title: "Finn fastlegen",
  subtitle: "Søk opp fastlegen ved å skrive brukerens fødselsnummer",
};

const FastlegeSide = () => {
  const [fodselsnummer, setFodselsnummer] = useState<string>();
  const queryClient = useQueryClient();

  return (
    <div className="fastlege">
      <Heading level={"1"} size={"xlarge"} >{texts.title}</Heading>
      <div className="fastlege__sokeboks">
        <Detail>{texts.subtitle}</Detail>
        <Sokeboks
          handleSubmitGyldigFnr={(fnr) => {
            setFodselsnummer(fnr);
            queryClient.invalidateQueries(fastlegeQueryKeys.fastlege(fnr));
          }}
        />
      </div>
      <Fastlege fnr={fodselsnummer} />
    </div>
  );
};

export default FastlegeSide;
