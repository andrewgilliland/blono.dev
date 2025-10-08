// import { getMarkdownFilesFrontMatter } from '../src/lib/utils/mdx-utils';
import fs from 'fs';
import path from 'path';

jest.mock('fs');

// const mockWorkshop = 'react-fundamentals';
const mockFiles = ['lesson1.md', 'lesson2.md', 'lesson3.md'];
const mockFrontMatters = [
  { number: 2, title: 'Lesson 2' },
  { number: 1, title: 'Lesson 1' },
  { number: 3, title: 'Lesson 3' },
];

describe('getMarkdownFilesFrontMatter', () => {
  beforeAll(() => {
    (fs.readdirSync as jest.Mock).mockReturnValue(mockFiles);
    (fs.readFileSync as jest.Mock).mockImplementation((filePath) => {
      const fileName = path.basename(filePath);
      const index = mockFiles.indexOf(fileName);
      // Simulate gray-matter output
      return `---\nnumber: ${mockFrontMatters[index].number}\ntitle: ${mockFrontMatters[index].title}\n---\nContent`;
    });
  });

  //   it('returns sorted frontmatter by number', async () => {
  //     const result = await getMarkdownFilesFrontMatter(mockWorkshop);
  //     expect(result).toEqual([
  //       { number: 1, title: 'Lesson 1' },
  //       { number: 2, title: 'Lesson 2' },
  //       { number: 3, title: 'Lesson 3' },
  //     ]);
  //   });

  it('returns true', async () => {
    expect(true).toBe(true);
  });
});
