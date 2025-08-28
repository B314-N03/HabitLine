import { useEffect, useState } from "react";
import type { CalendarEvent } from "../../../Interfaces/ICalendarEvent";
import BaseModal from "../BaseModal/BaseModal";
import { useCreateOrUpdateCalendarEvent, useDeleteCalendarEvent } from "../../../hooks/useCalendarEvents";
import CalendarEventForm from "../../Forms/CalendarEventForm/CalendarEventForm";
import { useCalendarTypes } from "../../../hooks/useCalendarTypes";

interface CalendarEventModalProps {
    isOpen: boolean;
    onClose: () => void;
    modalTitle?: string;
    isEditing?: boolean;
    initialEvent: CalendarEvent;
    setShowSuccessSnackbar?: (show: boolean) => void;
    setSnackbarMessage?: (message: string) => void;
}


function CalendarEventModal({
    isOpen,
    onClose,
    modalTitle = "Add Event",
    isEditing = false,
    initialEvent,
    setShowSuccessSnackbar = () => { },
    setSnackbarMessage = () => { },
}: CalendarEventModalProps) {
    const id = initialEvent.id;
    const [title, setTitle] = useState(initialEvent.title || "");
    const [start, setStart] = useState(initialEvent.start || "");
    const [end, setEnd] = useState(initialEvent.end || "");
    const [calendarId, setCalendarId] = useState(initialEvent.calendarId || "");
    const [people, setPeople] = useState<string[]>(initialEvent.people || []);
    const [newPerson, setNewPerson] = useState<string>("");
    const mutation = useCreateOrUpdateCalendarEvent();
    const deleteMutation = useDeleteCalendarEvent();
    const { data: calendars = [] } = useCalendarTypes();
    const [showAddNewCalendar, setShowAddNewCalendar] = useState(false);
    useEffect(() => {
        if (!isOpen || !initialEvent) return;
        setTitle(initialEvent.title || "");
        setStart(initialEvent.start || "");
        setEnd(initialEvent.end || "");
        setCalendarId(initialEvent.calendarId || "");
        setPeople(initialEvent.people || []);
        setNewPerson("");
    }, [isOpen, initialEvent]);

    const handleSave = () => {
        const formatedDate = (date: string) => {
            return date.replace('T', ' ')
        }
        console.log(id)
        mutation.mutate(
            {
                id,
                title,
                start: formatedDate(start),
                end: formatedDate(end),
                calendarId,
                people,
                isEditing
            },
            {
                onSuccess: () => {
                    setTitle("");
                    setStart("");
                    setEnd("");
                    setCalendarId("");
                    setPeople([]);
                    setNewPerson("");
                    onClose();
                    if (setShowSuccessSnackbar) {
                        setShowSuccessSnackbar(true);
                        const message = isEditing ? "Event updated successfully!" : "Event created successfully!";
                        setSnackbarMessage(message);
                    }
                },
                onError: (error) => {
                    console.error("Error saving event:", error);
                },
            }
        );

    };

    const handleDelete = () => {
        if (!window.confirm("Are you sure you want to delete this event?")) return;
        deleteMutation.mutate(
            id,
            {
                onSuccess: () => {
                    setTitle("");
                    setStart("");
                    setEnd("");
                    setCalendarId("");
                    setPeople([]);
                    setNewPerson("");
                    onClose();
                },
                onError: (error) => {
                    console.error("Error deleting event:", error);
                },
            }
        );
    };

    const handleCancel = () => {
        setTitle("");
        setStart("");
        setEnd("");
        setCalendarId("");
        setPeople([]);
        setNewPerson("");
        setShowAddNewCalendar(false);
        onClose();
    };


    return (
        <BaseModal
            isOpen={isOpen}
            onClose={handleCancel}
            size="thin-large"
            title={modalTitle}
            showFooter={true}
            displayedButtons={["cancel", "save", "delete"]}
            onSave={handleSave}
            onCancel={handleCancel}
            onDelete={handleDelete}
            isEditing={isEditing}

        >
            <CalendarEventForm
                title={title}
                setTitle={setTitle}
                startDate={start}
                setStartDate={setStart}
                endDate={end}
                setEndDate={setEnd}
                calendarId={calendarId}
                setCalendarId={setCalendarId}
                calendars={calendars}
                people={people}
                newPerson={newPerson}
                setNewPerson={setNewPerson}
                setPeople={setPeople}
                showAddNewCalendar={showAddNewCalendar}
                setShowAddNewCalendar={setShowAddNewCalendar}
            />
        </BaseModal>
    );
}

export default CalendarEventModal;
