import Footer from "./Footer";
import Header from "./Header";
import HR from "./HR";
import NavBar from "./NavBar";
import TodoList from "./TodoList";

export default function View() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <NavBar />
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <HR />
        <TodoList />
        <HR />
        <Footer />
      </div>
    </div>
  );
}
