import { useState, useEffect } from 'react'

function Counter() {
  // let counter = 1
  const [counter, setCounter] = useState(1)
  const updateCounter = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    document.title = `Counter: ${counter}`
  }, [counter])

  useEffect(() => {
    // const interval = setInterval(() => console.log('the count is', counter), 3000)
    // return () => clearInterval(interval)
    console.log('useEffect has fired!')
  }, []
  )

  return (
    <>
      <h2>The count is: {counter}</h2>
      <button onClick={updateCounter}>Increment</button>
    </>
  )
}

export default Counter