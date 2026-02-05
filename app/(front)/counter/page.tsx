"use client"

import { useState, useEffect } from "react"

export default function CounterPage() {

    const [count, setCount] = useState(0)

    // Auto counter up every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <h1 className="text-3xl">Counter Page</h1>
            <button onClick={() => setCount(count + 1)} className="border p-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
                Counter Up
            </button>
            <h2 className="text-5xl">{count}</h2>
            <button onClick={() => setCount(count - 1)} className="border p-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
                Counter Down
            </button>
        </>
    )
}