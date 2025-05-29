
// pages/blog.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title || filename,
      date: data.date || 'Unknown',
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Weekly Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title} <span className="text-sm text-gray-500">({post.date})</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
