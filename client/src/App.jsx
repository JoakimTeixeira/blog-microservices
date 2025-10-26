import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  return (
    <main className="flex flex-col items-center gap-6">
      <PostCreate />
      <PostList />
    </main>
  );
}

export default App;
