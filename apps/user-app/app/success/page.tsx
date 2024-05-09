'use client'
 
import { Button } from '@repo/ui/button'
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
     <div className="flex justify-center items-center h-screen">
     <div className="bg-white p-8 rounded shadow-md text-center">
       <h2 className="text-green-500 text-2xl font-semibold mb-4">Transaction Successful</h2>
       <p className="text-gray-800 mb-2">Your payment has been processed successfully.</p>
       {/* <p className="text-gray-800 mb-2">Transaction ID: <span className="font-semibold">123456789</span></p>
       <p className="text-gray-800 mb-2">Amount: $50.00</p>
       <p className="text-gray-800 mb-4">Date: May 7, 2024</p> */}
       
    <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" type="button" onClick={() => router.push('/dashboard')}>
      Return Home
    </button>
     </div>
   </div>
  )
}