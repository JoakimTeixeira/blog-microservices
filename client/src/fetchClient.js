const POSTS_BASE =
  import.meta?.env?.VITE_POSTS_API_URL || "http://localhost:4000";

const COMMENTS_BASE =
  import.meta?.env?.VITE_COMMENTS_API_URL || "http://localhost:4001";

const fetchJSON = async (base, path, options = {}) => {
  const response = await fetch(`${base}/${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  const parse = async () => {
    try {
      return await response.json();
    } catch {
      return null;
    }
  };

  const parsedResponse = await parse();

  if (!response.ok) {
    const message =
      parsedResponse?.message || response?.statusText || "Request failed";
    throw new Error(message);
  }

  return parsedResponse;
};

const postFetch = (path, options) => fetchJSON(POSTS_BASE, path, options);
const commentFetch = (path, options) => fetchJSON(COMMENTS_BASE, path, options);

export { fetchJSON, postFetch, commentFetch };
