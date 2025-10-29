import "./App.css";
import PostCreate from "./posts/PostCreate";
import PostList from "./posts/PostList";

function App() {
  return (
    <main className="flex flex-col items-center gap-6">
      <PostCreate />
      <PostList />
    </main>
  );
}

export default App;
