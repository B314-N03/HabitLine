import React from 'react'
import StyledTextField from '../../../StyledComponents/StyledTextField/StyledTextField';


interface CalendarEventPersonsInputProps {
    people: string[];
    setPeople: React.Dispatch<React.SetStateAction<string[]>>;
    newPerson: string;
    setNewPerson: React.Dispatch<React.SetStateAction<string>>;
}

function CalendarEventPersonsInput({ people, setPeople, newPerson, setNewPerson }: CalendarEventPersonsInputProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
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
        </div>)
}

export default CalendarEventPersonsInput