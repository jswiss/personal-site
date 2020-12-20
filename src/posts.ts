//@ts-ignore
import all from './posts/*.md'

export const posts = all;

console.log(posts[0].metadata);
