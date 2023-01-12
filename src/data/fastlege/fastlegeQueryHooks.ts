import { get } from "../../api/axios";
import { FastlegeInternal } from "./FastlegeInternal";
import { useQuery } from "@tanstack/react-query";

export const fastlegeQueryKeys = {
  fastlege: (fnr: string | undefined) => ["fastlege", fnr],
};

export const useFastlegeQuery = (fnr: string | undefined) => {
  const path = `/api/fastlegerest`;
  const fetchFastlege = () => get<FastlegeInternal[]>(path, fnr);
  return useQuery(fastlegeQueryKeys.fastlege(fnr), fetchFastlege, {
    enabled: !!fnr,
    retry: false,
  });
};
