// 'use server';

const getGithubRepo = async ({ org, repo }: { org: string; repo: string }) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${org}/${repo}`);

    if (!response.ok) {
      throw new Error(
        `Error fetching repository ${repo} for organization ${org}: ${response.statusText}`
      );
    }
    const data: [] = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const getDataFromJSONGithubRepo = async ({
  org,
  repo,
  file,
}: {
  org: string;
  repo: string;
  file: string;
}) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${org}/${repo}/contents/${file}.json`
    );
    const responseData = await response.json();

    console.log(responseData);
    const content = Buffer.from(responseData.content, 'base64').toString(
      'utf-8'
    );

    console.log(content);

    const { data } = await JSON.parse(content);
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getGithubRepo, getDataFromJSONGithubRepo };
