import { useEffect, useState } from "react";
import BaseModal from "../BaseModal/BaseModal";
import { MenuItem } from "@mui/material";
import type { CalendarEvent } from "../../../Interfaces/ICalendarEvent";
import StyledTextField from "../../StyledComponents/StyledTextField/StyledTextField";

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
    modalTitle?: string;
    onSave: (event: CalendarEvent) => void;
    isEditing?: boolean;
    initialEvent?: Partial<CalendarEvent>;
}

const calendarOptions = [
    { value: "work", label: "Work" },
    { value: "personal", label: "Personal" },
    { value: "sports", label: "Sports" },
];

function EventModal({
    isOpen,
    onClose,
    modalTitle = "Add Event",
    onSave,
    isEditing = false,
    initialEvent = {},
}: EventModalProps) {
    const [title, setTitle] = useState(initialEvent.title || "");
    const [start, setStart] = useState(initialEvent.start || "");
    const [end, setEnd] = useState(initialEvent.end || "");
    const [calendarId, setCalendarId] = useState(initialEvent.calendarId || "work");
    const [people, setPeople] = useState<string[]>(initialEvent.people || []);
    const [newPerson, setNewPerson] = useState<string>("");

    useEffect(() => {
        setTitle(initialEvent.title || "");
        setStart(initialEvent.start || "");
        setEnd(initialEvent.end || "");
        setCalendarId(initialEvent.calendarId || "work");
        setPeople(initialEvent.people || []);
        setNewPerson("");
    }, [initialEvent]);

    const handleSave = () => {
        onSave({
            id: initialEvent.id || Date.now().toString(),
            title,
            start,
            end,
            calendarId,
            people,
        });
        setTitle("");
        setStart("");
        setEnd("");
        setCalendarId("work");
        setPeople([]);
        setNewPerson("");
        onClose();
    };

    const handleCancel = () => {
        setTitle("");
        setStart("");
        setEnd("");
        setCalendarId("work");
        setPeople([]);
        setNewPerson("");
        onClose();
    };

    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            size="thin-large"
            title={modalTitle}
            showFooter={true}
            displayedButtons={["cancel", "save"]}
            onSave={handleSave}
            onCancel={handleCancel}
            isEditing={isEditing}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
                <StyledTextField
                    label="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    fullWidth
                />
                <div style={{ display: "flex", gap: 16 }}>
                    <StyledTextField
                        label="Start"
                        type="datetime-local"
                        value={start}
                        onChange={e => setStart(e.target.value)}
                        fullWidth
                    />
                    <StyledTextField
                        label="End"
                        type="datetime-local"
                        value={end}
                        onChange={e => setEnd(e.target.value)}
                        fullWidth
                    />
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                    <StyledTextField
                        select
                        label="Calendar"
                        value={calendarId}
                        onChange={e => setCalendarId(e.target.value)}
                        fullWidth
                    >
                        {calendarOptions.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </StyledTextField>
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <StyledTextField
                            label="Add Person"
                            value={newPerson}
                            onChange={e => setNewPerson(e.target.value)}
                            onKeyDown={e => {
                                if (e.key === "Enter" && newPerson.trim()) {
                                    setPeople([...people, newPerson.trim()]);
                                    setNewPerson("");
                                }
                            }}
                            fullWidth
                        />
                        <div style={{ marginTop: 8 }}>
                            {people.map((person, idx) => (
                                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, border: "1px solid #ccc", padding: "4px 8px", borderRadius: "4px", justifyContent: "space-between" }}>
                                    <span>{person}</span>
                                    <button
                                        type="button"
                                        style={{ background: "none", border: "none", color: "red", cursor: "pointer" }}
                                        onClick={() => setPeople(people.filter((_, i) => i !== idx))}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
}

export default EventModal;
