 "use client"
 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AdminRedirect = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to your admin website URL
    router.push('https://risinglab-admin.vercel.app/')
    // router.push(`${process.env.REACT_FRONT_URL}`)
  }, [router])

  return null // Or you can show a loading spinner here if you want
}

export default AdminRedirect
