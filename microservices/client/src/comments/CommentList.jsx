import { useQuery } from "@tanstack/react-query";
import { commentFetch } from "../api/fetchClient";

const fetchComments = async (postId) =>
  commentFetch(`posts/${postId}/comments`);

export default function CommentList({ postId }) {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  if (isLoading)
    return (
      <output aria-live="polite" className="text-sm text-gray-600">
        Loading comments...
      </output>
    );

  if (isError)
    return (
      <p role="alert" aria-live="assertive" className="text-sm text-red-600">
        Error: {error.message}
      </p>
    );

  return (
    <>
      {data.length > 0 && (
        <>
          <h3 id="comments" className="sr-only">
            Comments
          </h3>
          <ul
            className="mb-3 list-disc space-y-1 pl-5"
            aria-labelledby="comments"
            aria-live="polite"
          >
            {data.map((comment) => (
              <li key={comment.id} className="text-sm text-gray-800">
                {comment.content}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
