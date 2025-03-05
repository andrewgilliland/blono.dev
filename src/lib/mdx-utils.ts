import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrism from "@mapbox/rehype-prism";
import remarkGfm from "remark-gfm";

// POSTS_PATH is useful when you want to get the path to a specific file
export const LESSONS_PATH = path.join(
  process.cwd(),
  "src/pages/workshops/react-fundamentals/creating-a-react-component"
);

export const getMarkdownContent = async (filePath: string) => {
  const source = fs.readFileSync(path.join(LESSONS_PATH, filePath));

  // content is the content of the markdown file
  // data is an object that contains the frontmatter
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  console.log("mdxSource: ", mdxSource);

  return { frontMatter: data, mdxSource };
};
