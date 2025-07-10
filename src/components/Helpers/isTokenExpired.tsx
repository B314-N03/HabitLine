import { jwtDecode } from 'jwt-decode'
interface JwtPayload {
  exp: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const { exp } = jwtDecode<JwtPayload>(token);
    return exp * 1000 < Date.now(); // exp is in seconds, Date.now() is ms
  } catch {
    return true;
  }
};
