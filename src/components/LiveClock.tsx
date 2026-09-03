import { useEffect, useState } from 'react'

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Phnom_Penh',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

export function LiveClock() {
  const [time, setTime] = useState(() => formatter.format(new Date()))

  useEffect(() => {
    const interval = setInterval(() => setTime(formatter.format(new Date())), 1000)
    return () => clearInterval(interval)
  }, [])

  return <span>{time} GMT+7</span>
}
