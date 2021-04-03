export interface IHotels {
  id?: number;
  name: string;
  description: string;
  phone: string;
  address: {
    country: string;
    city: string;
    state: string;
    street: string;
    address1: string;
    address2: string;
    zip: 0;
    location: {
      latitude: string;
      longtitude: string;
    };
  };
}
