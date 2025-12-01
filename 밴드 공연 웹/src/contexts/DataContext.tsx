import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface Guest {
  name: string
  phone: string
  [key: string]: any
}

export interface PerformanceData {
  setlist?: string[]
  performers?: string[]
  events?: Array<{
    title: string
    description: string
    time?: string
  }>
  ticket?: {
    eventName: string
    date: string
    venue: string
    seat?: string
  }
}

interface DataContextType {
  guests: Guest[]
  performanceData: PerformanceData | null
  uploadGuests: (guests: Guest[]) => void
  setPerformanceData: (data: PerformanceData) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [guests, setGuests] = useState<Guest[]>([])
  const [performanceData, setPerformanceDataState] = useState<PerformanceData | null>(null)

  useEffect(() => {
    const savedGuests = localStorage.getItem('guests')
    const savedPerformanceData = localStorage.getItem('performanceData')
    
    if (savedGuests) {
      setGuests(JSON.parse(savedGuests))
    }
    if (savedPerformanceData) {
      setPerformanceDataState(JSON.parse(savedPerformanceData))
    }
  }, [])

  const uploadGuests = (newGuests: Guest[]) => {
    setGuests(newGuests)
    localStorage.setItem('guests', JSON.stringify(newGuests))
  }

  const setPerformanceData = (data: PerformanceData) => {
    setPerformanceDataState(data)
    localStorage.setItem('performanceData', JSON.stringify(data))
  }

  return (
    <DataContext.Provider value={{ guests, performanceData, uploadGuests, setPerformanceData }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

