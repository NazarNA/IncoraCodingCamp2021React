import { GetHotelsResponse, PaginationResponse } from './../../api/hotels/types';
import { IHotels } from './../../models/hotels';
import { getHotels, postHotels } from './../../api/hotels/endpoints';
import useSWR, { cache } from 'swr';

export const useHotels = () => {
  const { data, error, mutate } = useSWR('/hotel', () => getHotels().then(res => res.data));

  const addHotel = async (hotel: IHotels) => {
    const res = await postHotels(hotel);
    const cached: PaginationResponse<IHotels> = cache.get('/hotel');

    mutate(
      {
        ...cached,
        items: [...cached.items, { ...hotel, id: res.data.objectId }],
        total: cached.total + 1
      },
      false
    );
    console.log('res', res);
  };

  const editHotel = async (hotel: IHotels) => {};

  return {
    data,
    loading: !data && !error,
    addHotel,
    editHotel
  };
};
