import React, {createContext, useState} from 'react'

export const Data = createContext()


function Store({children}) {
  const [state, setState] = useState(true)
  const  value = {state, setState}

  return (
    <Data.Provider value={value}>
        {children}
    </Data.Provider>
  )
}

export default Store