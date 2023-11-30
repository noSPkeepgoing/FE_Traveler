export type TAccommodation = {
  accommodation_id: number;
  accommodation_name: string;
  short_address: string;
  accommodation_price: number;
  accommodation_img: string;
};

export type TMainListData = {
  accommodations: TAccommodation[];
  page_number: number;
  total_page: number;
};
