type Sortable = { data: { number: number } };

// Lessons are ordered by their `number`, not by file name
export const sortLessons = <T extends Sortable>(lessons: T[]): T[] =>
  [...lessons].sort((a, b) => a.data.number - b.data.number);
