import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [jobs, setJobs] = useState([])

  const getJobs = async () => {
    const response = await fetch(url)
    const receivedJobs = await response.json()
    setJobs(receivedJobs)
  }

  useEffect(() => {
    getJobs()
  }, [])

  console.log(jobs)

  return <section className='section'></section>
}

export default App
