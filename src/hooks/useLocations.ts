import { useEffect, useState } from 'react';

export interface CityOption {
  city: string;
  country: string;
  lat: string;
  lon: string;
}


export const useLocations = (query: string) => {
  const [results, setResults] = useState<CityOption[]>([]);
  const [loading, setLoading] = useState(false);


  const API_KEY = import.meta.env.VITE_API_KEY_RAPIDAPI ?? '';
  if (!API_KEY) {
    console.warn(
      '⚠️  Env var VITE_API_KEY_RAPIDAPI is not defined – requests will fail'
    );
  }
  useEffect(() => {
    const controller = new AbortController();

    const fetchCities = async () => {
      if (!query || query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(
          `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeURIComponent(query)}&limit=10&sort=-population`,
          {
            signal: controller.signal,
            headers: {
              'X-RapidAPI-Key': API_KEY,
              'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
          }
        );

        const data = await res.json();

        if (!Array.isArray(data?.data)) {
          console.warn('Unexpected API response format:', data);
          setResults([]);
          return;
        }

        const cities: CityOption[] = data.data.map((item: {
          name: string;
          country: string;
          latitude: number;
          longitude: number;
        }) => ({
          city: item.name,
          country: item.country,
          lat: item.latitude.toString(),
          lon: item.longitude.toString(),
        }));

        setResults(cities);

      } catch (error) {
        if (typeof error === 'object' && error !== null && 'name' in error && (error as { name: string }).name !== 'AbortError') {
          console.error('Error fetching cities:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchCities, 400);
    return () => {
      clearTimeout(debounceTimer);
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { results, loading };
};
