import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

// POSTS_PATH is useful when you want to get the path to a specific file
export const LESSONS_PATH = path.join(process.cwd(), 'src/markdown/workshops/');

export const getMarkdownFiles = async (workshop: string) => {
  const files = fs.readdirSync(path.join(LESSONS_PATH, workshop));

  return files;
};

export const getMarkdownFilesFrontMatter = async (workshop: string) => {
  const files = await getMarkdownFiles(workshop);

  const frontMatters = files.map((file) => {
    const source = fs.readFileSync(path.join(LESSONS_PATH, workshop, file));
    const { data } = matter(source);
    return data;
  });

  // ! If frontMatter contains a number property, sort by that number
  frontMatters.sort((a, b) => a.number - b.number);

  return frontMatters;
};

export const getMarkdownContent = async (filePath: string) => {
  const source = fs.readFileSync(path.join(LESSONS_PATH, filePath));

  // content is the content of the markdown file
  // data is an object that contains the frontmatter
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      // ! Plugin theme options: https://shiki.style/themes
      rehypePlugins: [[rehypePrettyCode, { theme: 'tokyo-night' }]],
    },
    scope: data,
  });

  return { frontMatter: data, mdxSource };
};
