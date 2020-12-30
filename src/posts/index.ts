//@ts-ignore
import allPosts from './*.md';

interface Metadata {
  layout: string;
  title: string;
  summary?: string;
  date: string;
  tags: string;
}
interface Post {
  html: string;
  metadata: Metadata;
  filename: string;
  date?: number;
}

export const posts = allPosts
  .map(transformPost)
  .sort((a: Post, b: Post) => b.date - a.date);

function transformPost({ html, metadata, filename }: Post) {
  const slug = filename.replace(/.md$/, '');
  const date = new Date(metadata.date);
  return { ...metadata, html, slug, filename, date };
}
