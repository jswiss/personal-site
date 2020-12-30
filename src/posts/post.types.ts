interface Metadata {
  layout: string;
  title: string;
  summary?: string;
  date: string;
  tags: string;
}
export interface Post {
  html: string;
  metadata: Metadata;
  filename: string;
  date?: number;
}
