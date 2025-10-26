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
    <section aria-labelledby="post-list">
      <h2 id="post-list" className="sr-only">
        Posts
      </h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {orderedPosts.map((post) => (
          <li className="card w-[30%] min-w-[250px]" key={post.id}>
            <article className="card-body">
              <h3 className="mb-3 text-lg font-semibold">{post.title}</h3>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
