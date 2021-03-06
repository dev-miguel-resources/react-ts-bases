import { FC, useReducer } from 'react'

type ActionType = 'increment' | 'decrement' | 'reset'

interface State {
  count: number
}

const inititialState: State = {
  count: 0,
}

const reducer = (state: State, action: ActionType): State => {
  switch (action) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return inititialState
  }
}

export const UseReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, inititialState)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch('reset')}>Reset</button>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
    </>
  )
}
