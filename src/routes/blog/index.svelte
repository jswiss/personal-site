<script context="module" lang=typescript>
  //@ts-ignore
  import BlogCard from "../../components/BlogCard.svelte";
  import { posts } from './_posts';
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

  export function preload<T>(): Promise<T> {
    return this.fetch(`blog.json`)
      .then((r: { json: () => any }) => r.json())
      .then((posts: Post[]) => {
        return { posts };
      });
  }
</script>

<style>
  section {
    display: flex;
    flex-direction: column;
    margin: 0 0 1em 0;
    line-height: 1.5;
    list-style-type: none;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <BlogCard title={post.title} postDate={post.date} slug={post.slug} />
  {/each}
</section>
