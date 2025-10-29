import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useId, useState } from "react";
import { postFetch } from "../api/fetchClient";

const createPost = async (title) =>
  postFetch("posts", {
    method: "POST",
    body: JSON.stringify({ title }),
  });

export default function PostCreate() {
  const [title, setTitle] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const feedbackId = useId();
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setTitle("");
      setShowMessage(true);
      setFadeOut(false);
    },
    onError: () => {
      setTitle("");
      setShowMessage(true);
      setFadeOut(false);
    },
  });

  useEffect(() => {
    if (!showMessage) return;

    const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
    const hideTimer = setTimeout(() => setShowMessage(false), 5500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [showMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;
    mutate(title);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 w-full max-w-[500px] space-y-4 rounded-xl bg-white p-6 shadow-sm lg:w-[500px]"
      aria-labelledby="create-post"
    >
      <h2 id="create-post" className="text-lg font-semibold text-gray-900">
        Create a new post
      </h2>

      <fieldset>
        <label
          htmlFor="titleInput"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          id="titleInput"
          type="text"
          placeholder="Enter a title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          disabled={isPending}
          aria-invalid={isError}
          aria-describedby={feedbackId}
          autoFocus={isError}
        />
      </fieldset>

      <button
        className="btn btn-primary w-full"
        type="submit"
        disabled={isPending || !title.trim()}
        aria-busy={isPending}
      >
        {isPending && (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        )}
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {showMessage && (isError || isSuccess) && (
        <div
          id={feedbackId}
          className={`min-h-6 ${fadeOut ? "animate-fade-out" : "animate-fade-in"}`}
        >
          {isError && (
            <p
              role="alert"
              aria-live="assertive"
              className="text-sm text-red-600"
            >
              {error.message}
            </p>
          )}
          {isSuccess && (
            <output aria-live="polite" className="text-sm text-green-600">
              Post created successfully!
            </output>
          )}
        </div>
      )}
    </form>
  );
}
