export type Skip = {
  allowed_on_road: boolean,
  allows_heavy_waste: boolean,
  area: string,
  created_at: string,
  forbidden: boolean,
  hire_period_days: number,
  id: number,
  per_tonne_cost: null
  postcode: string
  price_before_vat: number
  size: number
  transport_cost: null
  updated_at: string
  vat: number
};

export type SkipsResponse = Skip[];