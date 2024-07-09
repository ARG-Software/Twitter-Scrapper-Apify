export function formatDate(date: Date) {
  // Extract parts of the date
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  const timezone = "UTC";

  // Combine parts into the desired format
  return `${year}-${month}-${day}_${hours}:${minutes}:${seconds}_${timezone}`;
}
