import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//export const API_HOST = `${process.env.REACT_APP_URL}`;
 export const API_HOST = 'https://risinglab-admin.vercel.app';
// export const API_HOST = 'http://localhost:3001';