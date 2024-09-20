import  { useEffect, useState } from 'react'

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      const formattedDate = date.toLocaleDateString()
      const formattedTime = date.toLocaleTimeString()

      setDateTime(`${formattedDate} - ${formattedTime}`)

    }, 1000)

    return () => clearInterval(interval)

  }, [])
  return (
        <h2 className="text-white">{dateTime}</h2>

    

  )
}

