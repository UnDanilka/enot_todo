import React, { useState, createContext, useEffect } from "react";

export const StoreContext = createContext({});

export const StoreContextProvider = (props: any) => {
  const [store, setStore] = useState<any>({
    news: true,
    todos: [
      {
        date: "15/08",
        tasks: ["Grab some food", "Go to the school", "Watch movie"],
      },
      {
        date: "16/08",
        tasks: ["Go to the museum", "Have a lunch"],
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
