import React, { useState, createContext, useEffect } from "react";

export const StoreContext = createContext({});

export const StoreContextProvider = (props: any) => {
  const [store, setStore] = useState<any>({ news: true });

  useEffect(() => console.log(store), [store]);
  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {props.children}
    </StoreContext.Provider>
  );
};
