import { type CalendarType } from "@schedule-x/calendar";
import { fetchWithAuth } from "../lib/fetchWithAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Endpoints } from "../Endpoints/const";


const useCalendarTypes = () =>
    useQuery<CalendarType[]>({
        queryKey: ['calendars'],
        queryFn: async () => {
            return await fetchWithAuth(Endpoints.getCalendars);
        }
        ,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });


const useCreateOrUpdateCalendarType = () => {
    return useMutation({
        mutationFn: async (calendarType: CalendarType & { id?: string }) => {
            const endpoint = calendarType.id ? Endpoints.updateCalendar : Endpoints.createCalendar;
            const res = await fetchWithAuth(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(calendarType),
            });
            return res;
        },
    });
};

export { useCalendarTypes, useCreateOrUpdateCalendarType };