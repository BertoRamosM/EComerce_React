import { createContext } from "react";

//create context and we use to consume with useContext(FiltersContext)
export const FiltersContext = createContext()


//provides acces for the context
export function FiltersProviders({ children }) {
  return (
    //uses the context from line 4 and acces property Provider
    <FiltersContext.Provider value={{
      //will provide this value, in this case an object of two properties and two values
      category:'all',
      minPrice: 0
    }}> 
      {children}
      </FiltersContext.Provider>
  )
}

//accepts a children that wraps inside the provider. The children can be any other component of the app, or even the whole app
