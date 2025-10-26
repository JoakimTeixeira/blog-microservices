import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { postFetch } from "./fetchClient";

const fetchPosts = async () => postFetch("posts");

export default function PostList() {
  const {
    data: posts = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const orderedPosts = useMemo(() => {
    const list = Object.values(posts);
    return list.sort((a, b) => a.title.localeCompare(b.title));
  }, [posts]);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p role="alert">Error: {error.message}</p>;
  if (!orderedPosts.length) return <p>No posts available.</p>;

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
