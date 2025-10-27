import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { commentFetch } from "./fetchClient";

const createComment = async ({ postId, content }) =>
  commentFetch(`posts/${postId}/comments`, {
    method: "POST",
    body: JSON.stringify({ content }),
  });

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
      setContent("");
    },
    onError: () => {
      setContent("");
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    mutate({ postId, content });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label
          htmlFor={`comment-${postId}`}
          className="block text-sm font-medium text-gray-700"
        >
          New Comment
        </label>
        <input
          id={`comment-${postId}`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input mt-1"
          disabled={isPending}
          aria-invalid={isError}
          autoFocus={isError}
        />
      </div>

      <button
        className="btn btn-primary"
        type="submit"
        disabled={isPending || !content.trim()}
        aria-busy={isPending}
      >
        {isPending && (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        )}
        {isPending ? "Posting..." : "Post"}
      </button>

      {isError && (
        <p role="alert" aria-live="assertive" className="text-sm text-red-600">
          Error when posting the comment.
        </p>
      )}
    </form>
  );
}
