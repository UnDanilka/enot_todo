import React, { useState, createContext } from "react";

export const StoreContext = createContext({});

export const StoreContextProvider = (props: any) => {
  const [store, setStore] = useState<any>({
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
