// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {FASTLEGEREST_ROOT} from "../../api/constants";
import { get } from "../../api/axios";
import {FastlegeDTO} from "../../data/fastlege/FastlegeDTO";

const fastlege: FastlegeDTO = {
    fornavn: "Lege",
    mellomnavn: undefined,
    etternavn: "Legesen",
    fnr: "12035507971",
    herId: 711,
    helsepersonellregisterId: 2127598,
    pasient: {
        fornavn: "Pasient",
        mellomnavn: undefined,
        etternavn: "Arbeidstaker",
        fnr: "01117302624",
    },
    fastlegekontor: {
        navn: "BYÅSEN LEGESENTER AS",
        besoeksadresse: {
            adresse: "Fjellseterveien 1",
            postnummer: "7020",
            poststed: "Trondheim",
        },
        postadresse: {
            adresse: "",
            postnummer: "7020",
            poststed: "Trondheim",
        },
        telefon: "73806770",
        epost: "byasen@edi.nhn.no",
        orgnummer: "930161012",
    },
    pasientforhold: {
        fom: new Date("1993-03-01"),
        tom: new Date("9999-12-31"),
    },
    gyldighet: {
        fom: new Date("1993-03-01"),
        tom: new Date("9999-12-31"),
    },
    relasjon: {
        kodeVerdi: "fastelge",
        kodeTekst: "Fastlege",
    },
};

const fastlegeList: FastlegeDTO[] = [
    fastlege,
    {
        ...fastlege,
        fornavn: "Vikarlege",
        mellomnavn: undefined,
        etternavn: "Vikarsen",
        fnr: "12045507971",
        herId: 711,
        helsepersonellregisterId: 1,
        gyldighet: {
            fom: new Date(),
            tom: new Date(),
        },
        relasjon: {
            kodeVerdi: "RelasjonKodeVerdi.VIKAR",
            kodeTekst: "Vikar",
        },
        stillingsprosent: 60,
    },
    {
        ...fastlege,
        fornavn: "Legensvikar",
        mellomnavn: undefined,
        etternavn: "Vikarheim",
        fnr: "12055507971",
        herId: 711,
        helsepersonellregisterId: 2,
        gyldighet: {
            fom: new Date(),
            tom: new Date(),
        },
        relasjon: {
            kodeVerdi: "RelasjonKodeVerdi.VIKAR",
            kodeTekst: "Vikar",
        },
        stillingsprosent: undefined,
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<FastlegeDTO[]>
) {
    const path = `https://fastlegerest.dev.intern.nav.no${FASTLEGEREST_ROOT}/fastlege/fastleger`;
    const header = req.headers["nav-personident"]
    const personident = header && !Array.isArray(header) ? header : "10108000398";

    const apiCall = get<FastlegeDTO[]>(path, personident).then(response => console.log(response))
    res.status(200).json(fastlegeList)
}
