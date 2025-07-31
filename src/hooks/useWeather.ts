import { useQuery } from "@tanstack/react-query";
import { type IWeatherApiResponse } from "../Interfaces/IWeatherApiResponse";

const useWeather = (lat: string, lon: string) =>
    useQuery<IWeatherApiResponse>({
        queryKey: ['weather', lat, lon],
        queryFn: async () => {
            const res = await fetch(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`, {
                headers: {
                    'X-Api-Key': import.meta.env.VITE_API_KEY_API_NINJAS
                }
            });
            if (!res.ok) throw new Error('Failed to fetch weather');
            return res.json();
        },
        enabled: !!lat && !!lon,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });


export default useWeather