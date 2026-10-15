import { getCollection } from 'astro:content';
import { sortLessons } from './lessons';

// A Workshop's Lessons, in order. Lesson ids are `<workshop>/<lesson>`.
export const getWorkshopLessons = async (workshop: string) =>
  sortLessons(
    await getCollection('lessons', ({ id }) => id.startsWith(`${workshop}/`)),
  );

// The part of a Lesson's id after its Workshop, used in the Lesson's URL
export const lessonSlug = (id: string) => id.slice(id.indexOf('/') + 1);
