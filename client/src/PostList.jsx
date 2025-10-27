import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
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

  if (isLoading) return <output aria-live="polite">Loading posts...</output>;

  if (isError)
    return (
      <p role="alert" aria-live="assertive">
        Error: {error.message}
      </p>
    );

  if (!orderedPosts.length)
    return <output aria-live="polite">No posts available.</output>;

  return (
    <section>
      <h2 id="post-list" className="sr-only">
        Posts
      </h2>

      <ul
        className="flex flex-wrap justify-center gap-4"
        aria-labelledby="post-list"
        aria-live="polite"
      >
        {orderedPosts.map((post) => (
          <li
            key={post.id}
            className="card flex h-full w-[30%] min-w-[250px] flex-col"
          >
            <article className="flex flex-1 flex-col p-4">
              <header className="mb-3 text-lg font-semibold">
                <h3>{post.title}</h3>
              </header>

              <CommentList postId={post.id} />

              <footer className="mt-auto border-t pt-4">
                <CommentCreate postId={post.id} />
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
