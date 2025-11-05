import React, { useEffect, useState } from 'react'

const CountOne = () => {

    const [count, setCount] = useState(0)
    const [counts, setCounts] = useState(0)

    useEffect(() => {
        console.info(count)
        console.info(counts)
    }, [count, counts])
     
  return (
    <>
        <h1>Count: {count}</h1>
        <h1>Counts: {counts}</h1>
        <button onClick={() => setCount(count + 1)}>Click</button> <br />
        <button onClick={() => setCounts(counts + 1)}>Click</button>
    </>
  )
}

export default CountOne