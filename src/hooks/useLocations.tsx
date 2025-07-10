// hooks/useLocations.ts
import { useEffect, useState } from 'react';

export interface CityOption {
  city: string;
  country: string;
}

const API_KEY = 'b118209ec8msh321cabe30b3f6c8p193798jsn147195523442'; // Replace with your actual RapidAPI key

export const useLocations = (query: string) => {
  const [results, setResults] = useState<CityOption[]>([]);
  const [loading, setLoading] = useState(false);

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
        console.log(data);
        const cities: CityOption[] = data.data.map((item: { name: string; country: string }) => ({
          city: item.name,
          country: item.country,
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
  }, [query]);

  return { results, loading };
};
