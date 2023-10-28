import React, { useState } from 'react'

export default function useCounter(init) {

    const [count, setCount] = useState(init)

    const minusCount = () => {
        setCount(prevCount => count <= 1 ? (prevCount = 1) : (prevCount - 1) )
    }
    function plusCount () {
        setCount(prevCount => prevCount + 1)
    }

    return [minusCount, count, plusCount]

}
