export const extractCityFromQueryParam = (queryParam: string): string =>
  queryParam.split("-")?.[0];
