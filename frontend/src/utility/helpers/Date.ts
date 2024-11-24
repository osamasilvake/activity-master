import dayjs, { Dayjs } from "dayjs";

/**
 * Formats a date into a specified format.
 * @param date - The date to format. Can be a `Date` object, a valid date string, a number (timestamp), or null for the current date.
 * @param format - The desired format (e.g., "HH" for hours, "YYYY-MM-DD" for full date).
 * @returns The formatted date string or an error message for invalid inputs.
 */
export const dateFormat = (
  date: Date | string | number | null = null,
  format: string = "YYYY-MM-DD"
): string => {
  // Determine the date to format, defaulting to the current date/time
  let dateToFormat: Dayjs;

  try {
    dateToFormat = date ? dayjs(date) : dayjs();
    // Validate the date using Day.js
    if (!dateToFormat.isValid()) {
      throw new Error("Invalid date provided");
    }
  } catch (error) {
    console.warn("Error formatting date:", error);
    return "Invalid Date";
  }

  // Format and return the date
  return dateToFormat.format(format);
};
