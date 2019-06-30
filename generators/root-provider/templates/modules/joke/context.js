import React, {createContext, useState} from "react";

const JokeContext = createContext();

const JokeProvider = ({children}) => {
  const [joke, setJoke] = useState();

  function handleSetJoke(newCandidate) {
    setJoke(newCandidate);
  }

  return (
    <JokeContext.Provider value={{joke, setJoke: handleSetJoke}}>
      {children}
    </JokeContext.Provider>
  );
};

export {JokeContext as default, JokeProvider as Provider};
