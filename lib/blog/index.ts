import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'public', 'files', 'posts');

export const getSortedPostsData = () => {
    // get file names under /posts
    const fileNames: string[] = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        return {
            id, 
            ...(matterResult.data as { date: string, title: string})
        };
    });
    return allPostsData.sort(({date: a}, {date: b}) => {
        if (a < b) return 1;
        else if (b < a) return -1;
        else return 0;
    });
}

export const getAllPostIds = () => {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export const getPostData = async (id: string) => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent  = await remark()
                                    .use(remarkHtml)
                                    .process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string, title: string, video: string })
    }
}
