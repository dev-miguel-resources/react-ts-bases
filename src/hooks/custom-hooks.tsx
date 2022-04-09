import { FC, useState } from 'react'

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue)

  const incrementCounter = () => setCounter(counter + 1)

  return {
    counter,
    incrementCounter,
  }
}

export const CustomHooks: FC = () => (
  <div>
    <ComponentA />
    <ComponentB />
  </div>
)

export function ComponentA() {
  const { counter, incrementCounter } = useCounter(10)
  return <button onClick={() => incrementCounter()}>Click me {counter}</button>
}

export function ComponentB() {
  const { counter, incrementCounter } = useCounter()
  return <button onClick={() => incrementCounter()}>Click me {counter}</button>
}
