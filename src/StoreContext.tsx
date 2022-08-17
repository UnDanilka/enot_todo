import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { IStore } from "./types";

export const StoreContext = createContext<{
  store: IStore;
  setStore: (() => undefined) | Dispatch<SetStateAction<IStore>>;
}>({
  store: {
    news: true,
    todos: [
      {
        date: "",
        tasks: [
          { title: "", done: false, id: 1 },
          { title: "", done: false, id: 2 },
          { title: "", done: false, id: 3 },
        ],
      },
    ],
  },
  setStore: () => undefined,
});

export const StoreContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [store, setStore] = useState<IStore>({
    news: true,
    todos: [
      {
        date: "15/08",
        tasks: [
          { title: "Grab some food", done: false, id: 1 },
          { title: "Go to the school", done: false, id: 2 },
          { title: "Watch movie", done: false, id: 3 },
        ],
      },
      {
        date: "16/08",
        tasks: [
          { title: "Go to the museum", done: false, id: 4 },
          { title: "Have a lunch", done: false, id: 5 },
        ],
      },
    ],
  });

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {props.children}
    </StoreContext.Provider>
  );
};
