import { HousingApi } from "../interface/housingInterface";
import apiClient from "./apiClient";

const renameLongitudeField = (data: HousingApi) => {
  if (Array.isArray(data)) {
    return data.map((item) => {
      const { longitude, latitude, ...rest } = item;
      return {
        ...rest,
        long: longitude,
        lat: latitude,
      };
    });
  } else {
    const { longitude, latitude, ...rest } = data;
    return {
      ...rest,
      long: longitude,
      lat: latitude,
    };
  }
};

export const fetchDomainarie = async () => {
  const response = await apiClient.get("/domainaries");
  const data = renameLongitudeField(response.data);

  return data ?? [];
};

export const fetchDomainarieById = async (id: number) => {
  const response = await apiClient.get(`/domainaries/${id}`);
  const data = renameLongitudeField(response.data);

  return data ?? {};
};
export const fetchListDomainarie = async () => {
  const response = await apiClient.get("/domainaries");
  const data = response.data.map((item: any) => ({ id: item.id, name: item.name }));

  return data ?? [];
};
