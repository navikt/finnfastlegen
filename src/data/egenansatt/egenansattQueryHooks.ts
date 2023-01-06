import { SYFOPERSON_ROOT } from "../../api/constants";
import { useQuery } from "@tanstack/react-query";
import { get } from "../../api/axios";

const egenansattQueryKeys = {
  egenansatt: (fnr: string | undefined) => ["egenansatt", fnr],
};

export const useEgenansattQuery = (fnr: string | undefined) => {
  const path = `${SYFOPERSON_ROOT}/person/egenansatt`;
  const fetchEgenansatt = () => get<boolean>(path, fnr);
  return useQuery(egenansattQueryKeys.egenansatt(fnr), fetchEgenansatt, {
    enabled: !!fnr,
  });
};
