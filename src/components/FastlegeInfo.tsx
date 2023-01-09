import React from "react";
import PersonIkon from "../svg/PersonIkon";
import LegeIkon from "../svg/LegeIkon";
import { tilLangtDatoFormat } from "../utils/datoUtils";
import {
  AdresseDTO,
  FastlegeDTO,
  PasientDTO,
} from "../data/fastlege/FastlegeDTO";
import {
  FastlegeInternal,
  Fastlegekontor,
  Pasient,
  RelasjonKodeVerdi,
} from "../data/fastlege/FastlegeInternal";
import { useDiskresjonskodeQuery } from "../data/diskresjonskode/diskresjonskodeQueryHooks";
import { useEgenansattQuery } from "../data/egenansatt/egenansattQueryHooks";
import Column from "./grid/Column";
import Row from "./grid/Row";
import {Detail, Heading, Label, Panel, Tag} from "@navikt/ds-react";

const VERDI_IKKE_FUNNET = "Ikke funnet";

export const hentTekstPasientNavn = (pasient: PasientDTO) => {
  return pasient
    ? `${pasient.fornavn} ${pasient.etternavn}`
    : VERDI_IKKE_FUNNET;
};

export const hentTekstFastlegeNavn = (fastlege: FastlegeDTO) => {
  return fastlege
    ? `${fastlege.fornavn} ${fastlege.etternavn}`
    : VERDI_IKKE_FUNNET;
};

export const hentTekstFastlegeBesoeksadresse = (besoeksadresse: AdresseDTO) => {
  return besoeksadresse
    ? `${besoeksadresse.adresse}, ${besoeksadresse.postnummer} ${besoeksadresse.poststed}`
    : VERDI_IKKE_FUNNET;
};

export const hentTekstFastlegePostadresse = (postadresse: AdresseDTO) => {
  return postadresse
    ? `${postadresse.adresse}, ${postadresse.postnummer} ${postadresse.poststed}`
    : VERDI_IKKE_FUNNET;
};

interface FastlegeInfoProps {
  fastlegeList: FastlegeInternal[];
}

const FastlegeInfo = ({ fastlegeList }: FastlegeInfoProps) => {
  const fastlegekontor: Fastlegekontor | undefined = fastlegeList.find(
    (lege) => {
      return lege.fastlegekontor;
    }
  )?.fastlegekontor;
  const pasient: Pasient | undefined = fastlegeList.find((lege) => {
    return lege.pasient;
  })?.pasient;

  const fastlege: FastlegeInternal | undefined = fastlegeList.find((lege) => {
    return lege.relasjon.kodeVerdi == RelasjonKodeVerdi.FASTLEGE;
  });
  const vikarList: FastlegeInternal[] = fastlegeList.filter((lege) => {
    return lege.relasjon.kodeVerdi == RelasjonKodeVerdi.VIKAR;
  });

  const { data: diskresjonskode } = useDiskresjonskodeQuery(pasient?.fnr);
  const { data: isEgenansatt } = useEgenansattQuery(pasient?.fnr);
  return (
    <div className="fastlegeInfo">
      {pasient && (
        <Panel>
          <Column className="fastlegeInfo__ikon">
            <PersonIkon />
          </Column>
          <Column>
            <Row className="no-gutter">
              <Column>
                <Heading level={"2"} size={"medium"}>
                  {pasient && hentTekstPasientNavn(pasient)}
                </Heading>
                <Detail>{pasient?.fnr}</Detail>
              </Column>
            </Row>
            <Row className="no-gutter fastlegeInfo__etiketter">
              {isEgenansatt && (
                <div>
                  <Tag variant="warning">Egen ansatt</Tag>
                </div>
              )}
              {diskresjonskode === "6" && (
                <div>
                  <Tag variant="warning">Kode 6</Tag>
                </div>
              )}
              {diskresjonskode === "7" && (
                <div>
                  <Tag variant="warning">Kode 7</Tag>
                </div>
              )}
            </Row>
          </Column>
        </Panel>
      )}

      <Panel>
        <Column className="fastlegeInfo__ikon">
          <LegeIkon />
        </Column>
        <Column>
          {fastlege && (
            <Row className="no-gutter">
              <Column>
                <Heading level={"2"} size={"medium"}>{hentTekstFastlegeNavn(fastlege)}</Heading>
                <Detail>{`Fastlege: ${tilLangtDatoFormat(
                  fastlege.pasientforhold.fom
                )} - nå`}
                </Detail>
              </Column>
            </Row>
          )}
          {fastlegekontor && [
            <Row key={1} className="no-gutter">
              <Column className="col-xs-12 col-sm-6">
                <Label>Legekontor</Label>
                <Detail as={"p"}>{fastlegekontor.navn}</Detail>
              </Column>
              <Column className="col-xs-12 col-sm-6">
                <Label>Besøksadresse</Label>
                <Detail>
                  {fastlegekontor.besoeksadresse &&
                    hentTekstFastlegeBesoeksadresse(
                      fastlegekontor.besoeksadresse
                    )}
                </Detail>
              </Column>
            </Row>,
            <Row key={2} className="no-gutter">
              <Column className="col-xs-12 col-sm-6">
                <Label>Telefon</Label>
                <Detail>{fastlegekontor.telefon}</Detail>
              </Column>
              <Column className="col-xs-12 col-sm-6">
                <Label>Postadresse</Label>
                <Detail>
                  {fastlegekontor.postadresse &&
                    hentTekstFastlegePostadresse(fastlegekontor.postadresse)}
                </Detail>
              </Column>
            </Row>,
          ]}
          {vikarList.map((legevikar, index) => {
            return (
              <Row key={index} className="no-gutter">
                <Column>
                  <Heading level={"2"} size={"medium"}>
                    {hentTekstFastlegeNavn(legevikar)}
                  </Heading>
                  <Detail>{`Vikarperiode: ${tilLangtDatoFormat(
                    legevikar.gyldighet.fom
                  )} - ${tilLangtDatoFormat(
                    legevikar.gyldighet.tom
                  )}`}</Detail>
                  {legevikar.stillingsprosent && (
                    <Detail>{`Stillingsprosent: ${legevikar.stillingsprosent}%`}</Detail>
                  )}
                </Column>
              </Row>
            );
          })}
        </Column>
      </Panel>
    </div>
  );
};

export default FastlegeInfo;
