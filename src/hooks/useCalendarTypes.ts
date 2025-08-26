import { fetchWithAuth } from "../lib/fetchWithAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Endpoints } from "../Endpoints/const";
import { omit } from "../components/Helpers/Omit";
import { type ICalendarType } from "../Interfaces/ICalendarType";

const useCalendarTypes = () =>
    useQuery<ICalendarType[]>({
        queryKey: ['calendars'],
        queryFn: async () => {
            return await fetchWithAuth(Endpoints.getCalendarTypes);
        }
        ,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });


const useCreateOrUpdateCalendarType = () => {
    return useMutation({
        mutationFn: async (calendarType: ICalendarType & { isEditing?: boolean }) => {
            const { isEditing, ...rest } = calendarType;
            const payload = isEditing ? rest : omit(rest, ['id']);
            const endpoint = calendarType.isEditing ? Endpoints.updateCalendarType : Endpoints.createCalendarType;
            const res = await fetchWithAuth(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            return res;
        },
    });
};

export { useCalendarTypes, useCreateOrUpdateCalendarType };