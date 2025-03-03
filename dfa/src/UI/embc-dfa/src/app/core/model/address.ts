export interface RegAddress {
  addressLine1: string;
  addressLine2?: null | string;
  community?: string;
  postalCode: null | string;
  stateProvince: string;
  country: Country;
}

export interface Community {
  code?: null | string;
  name?: null | string;
}

export interface StateProvince {
  code?: null | string;
  name?: null | string;
}

export interface Country {
  code?: string;
  name?: string;
}
