import type { CustomNextPage } from "next";
import type { ChangeEventHandler, FC, MouseEventHandler } from "react";
import { useState } from "react";
import { FluidLayout } from "src/layout";

type Todo = {
  id: number;
  label: string;
  isDone: boolean;
};

const RootPage: CustomNextPage = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const add: MouseEventHandler<HTMLButtonElement> = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random(), label: text, isDone: false }];
    });
    setText("");
  };

  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  return (
    <div className="mx-auto w-96 p-20">
      <h1 className="text-xl font-bold">Todo</h1>
      <div className="flex gap-x-2">
        <input
          type="text"
          value={text}
          onChange={input}
          className="border border-black"
        />
        <button onClick={add} className="shrink-0 border border-black px-2">
          追加
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <ListItem todo={todo} onToggle={toggle} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type ListItemProps = {
  todo: Todo;
  onToggle: ChangeEventHandler<HTMLInputElement>;
};

const ListItem: FC<ListItemProps> = (props) => {
  return (
    <label className="flex items-center gap-x-2">
      <input
        type="checkbox"
        value={props.todo.id}
        checked={props.todo.isDone}
        onChange={props.onToggle}
      />
      <span>{props.todo.label}</span>
    </label>
  );
};

RootPage.getLayout = FluidLayout;

export default RootPage;
