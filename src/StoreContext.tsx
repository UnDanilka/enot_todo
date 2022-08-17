import React, { useState, createContext, useEffect } from "react";

export const StoreContext = createContext({});

export const StoreContextProvider = (props: any) => {
  const [store, setStore] = useState<any>({
    news: true,
    todos: [
      {
        date: "15/08",
        tasks: [
          { title: "Grab some food", done: false },
          { title: "Go to the school", done: false },
          { title: "Watch movie", done: false },
        ],
      },
      {
        date: "16/08",
        tasks: [
          { title: "Go to the museum", done: false },
          { title: "Have a lunch", done: false },
        ],
      },
    ],
  });

  useEffect(() => console.log(store), [store]);
  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {props.children}
    </StoreContext.Provider>
  );
};
