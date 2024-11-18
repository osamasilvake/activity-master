import dayjs from 'dayjs';

/**
 * Formats a date into a specified format.
 * @param date - The date to format. If null, uses the current date.
 * @param format - The desired format (e.g., "HH" for hours).
 * @returns The formatted date string.
 */
export const dateFormat = (date: Date | null = null, format: string = 'YYYY-MM-DD'): string => {
	const dateToFormat = date ? dayjs(date) : dayjs();

	return dateToFormat.format(format);
};
