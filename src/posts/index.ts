//@ts-ignore
import allPosts from './*.md';
import type { Post } from './post.types'


export const posts = allPosts
  .map(transformPost)
  .sort((a: Post, b: Post) => b.date - a.date);

function transformPost({ html, metadata, filename }: Post) {
  const slug = filename.replace(/.md$/, '');
  const date = new Date(metadata.date);
  return { ...metadata, html, slug, filename, date };
}
