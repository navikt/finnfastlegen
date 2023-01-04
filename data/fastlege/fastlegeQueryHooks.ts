import { get } from "../../api/axios";
import { FASTLEGEREST_ROOT } from "../../api/constants";
import { FastlegeInternal } from "./FastlegeInternal";
import { useQuery } from "@tanstack/react-query";

export const fastlegeQueryKeys = {
  fastlege: (fnr: string | undefined) => ["fastlege", fnr],
};

export const useFastlegeQuery = (fnr: string | undefined) => {
  const path = `${FASTLEGEREST_ROOT}/fastlege/fastleger`;
  const fetchFastlege = () => get<FastlegeInternal[]>(path, fnr);
  return useQuery(fastlegeQueryKeys.fastlege(fnr), fetchFastlege, {
    enabled: !!fnr,
    retry: false,
  });
};
