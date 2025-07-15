import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const API_HOST = `https://risinglab-admin.vercel.app`; //${process.env.REACT_APP_URL}
// export const API_HOST = 'https://risinglab-admin.vercel.app';
// export const API_HOST = 'http://localhost:3001';

// URL validation and type detection
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const getUrlType = (url: string): 'image' | 'video' | 'invalid' => {
  if (!isValidUrl(url)) return 'invalid';
  
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
  
  const extension = url.toLowerCase().split('.').pop();
  if (!extension) return 'invalid';
  
  if (imageExtensions.some(ext => url.toLowerCase().endsWith(ext))) return 'image';
  if (videoExtensions.some(ext => url.toLowerCase().endsWith(ext))) return 'video';
  
  // Check for common video hosting platforms
  if (url.includes('youtube.com') || url.includes('youtu.be') || 
      url.includes('vimeo.com')) return 'video';
      
  return 'invalid';
};