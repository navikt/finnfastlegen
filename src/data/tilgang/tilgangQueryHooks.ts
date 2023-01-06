import { get } from "../../api/axios";
import { Tilgang } from "./tilgangTypes";
import { TILGANGSKONTROLL_AD_PATH } from "../../api/constants";
import { useQuery } from "@tanstack/react-query";

export const tilgangQueryKeys = {
  tilgang: ["tilgang"],
};

export const useTilgangQuery = () => {
  const fetchTilgang = () => get<Tilgang>(TILGANGSKONTROLL_AD_PATH);
  return useQuery(tilgangQueryKeys.tilgang, fetchTilgang);
};
