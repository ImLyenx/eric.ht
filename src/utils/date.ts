/** Formats a date as YYYY-MM-DD, in UTC so it matches the frontmatter value. */
export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
