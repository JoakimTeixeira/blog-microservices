import { useEffect, useMemo, useState } from "react";
import { postFetch } from "./fetchClient";

export default function PostList() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await postFetch("posts");
      setPosts(response);
    };

    fetchPosts();
  }, []);

  const orderedPosts = useMemo(() => {
    if (!posts) {
      return [];
    }

    const list = Object.values(posts);
    return list.sort((a, b) => a.title.localeCompare(b.title));
  }, [posts]);

  return (
    <div className="flex flex-row flex-wrap justify-between gap-4">
      {orderedPosts.map((post) => (
        <div className="card w-[30%] min-w-[280px]" key={post.id}>
          <div className="card-body">
            <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
