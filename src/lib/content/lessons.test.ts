import { describe, expect, it } from 'vitest';
import { sortLessons } from './lessons';

const lesson = (id: string, number: number) => ({ id, data: { number } });

describe('sortLessons', () => {
  it('orders a Workshop’s Lessons by their number, not by file name', () => {
    const lessons = [
      lesson('react-fundamentals/managing-state', 10),
      lesson('react-fundamentals/creating-a-react-component', 1),
      lesson('react-fundamentals/handling-events', 9),
      lesson('react-fundamentals/what-is-react', 0),
    ];

    expect(sortLessons(lessons).map(({ id }) => id)).toEqual([
      'react-fundamentals/what-is-react',
      'react-fundamentals/creating-a-react-component',
      'react-fundamentals/handling-events',
      'react-fundamentals/managing-state',
    ]);
  });
});
