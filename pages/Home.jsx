import AddTodo from "../components/AddTodo";

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="text-2xl font-bold mb-10 mt-2">React To Do App</h1>
      <AddTodo />
    </div>
  );
}
