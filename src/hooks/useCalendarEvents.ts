import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchWithAuth } from "../lib/fetchWithAuth";
import { BackendUrl, Endpoints } from "../Endpoints/const";
import { type CalendarEvent } from "../Interfaces/ICalendarEvent";

const useCalendarEvents = () =>
    useQuery<CalendarEvent[]>({
        queryKey: ['calendarEvents'],
        queryFn: async () => {
            return await fetchWithAuth(`${BackendUrl}${Endpoints.getCalendarEvents}`);
        },
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });


const useCreateOrUpdateCalendarEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (event: CalendarEvent & { isEditing?: boolean }) => {
            const endpoint = event.isEditing ? Endpoints.updateCalendarEvent : Endpoints.createCalendarEvent;
            const res = await fetchWithAuth(`${BackendUrl}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(event),
            });
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['calendarEvents'] });
        },
    });
};

const useDeleteCalendarEvent = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => {
            const res = await fetchWithAuth(`${BackendUrl}${Endpoints.deleteCalendarEvent}${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['calendarEvents'] });
        },
        onError: (error) => {
            console.error(error);
        },
    });
};

export { useCalendarEvents, useCreateOrUpdateCalendarEvent, useDeleteCalendarEvent };