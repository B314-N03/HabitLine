export interface IUser {
    id: string,
    username: string,
    email: string,
    weather: {
        region: string,
        lat: string,
        lon: string
    }
    avatar?: string,
    lastLoginAt?: string,
}