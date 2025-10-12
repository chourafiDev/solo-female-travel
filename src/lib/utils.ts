import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Truncate text for descriptions
 */
export function truncateText(text: string, maxLength = 160): string {
	if (text.length <= maxLength) return text;
	return `${text.slice(0, maxLength - 3)}...`;
}

/**
 * Generate reading time estimate
 */
export function calculateReadingTime(content: string): string {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return `${minutes} min read`;
}
