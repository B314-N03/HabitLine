import StyledTextField from '../../../StyledComponents/StyledTextField/StyledTextField'


interface UsernameInputProps {
    username: string
    setUsername: (username: string) => void
}

function UsernameInput({ username, setUsername }: UsernameInputProps) {
    return (
        <StyledTextField
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)
            }}
        />
    )
}

export default UsernameInput