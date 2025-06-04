import { getPostsAsync } from "@/api/temp";
import { Post } from "@/api/temp/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPostsAsync() {
    const response = await getPostsAsync();
    setPosts(response?.data ?? []);
  }

  useEffect(() => {
    (async () => {
      await fetchPostsAsync();
    })();
  }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Admin Sisters</h1>
      <p className="text-muted-foreground">
        This is the home page of your admin dashboard template.
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Posts ({posts.length})</h2>
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded mb-2">
            <h3 className="font-medium">{post.title}</h3>
            <p className="text-sm text-muted-foreground">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
