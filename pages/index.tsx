import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  let placeholder = '{"location":"Barcelona","minCustomers":2,"maxCustomers":4,"avgCookies":2.5}'
  
  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='p-3 pl-5 bg-emerald-500 '>
        <h1 className='text-3xl'>Cookie Stand Admin</h1>
      </header>

      <main className="bg-emerald-50">

        <form className="w-4/5 h-64 px-3 mx-auto my-4 rounded-md justify-items-center bg-emerald-300">
          
          <h1 className="flex justify-center mt-2 mb-2 text-xl justify-items-center">Create Cookie Stand</h1>
          
          <div className="flex m-2">
            <label className="mr-2">Location</label>
            <input name='Location' className="flex-grow"></input>
          </div>


          <div className="flex space-x-2 justify-items-center">

            <div className='grid'>
              <label>Minimum Customers Per Hour</label>
              <input></input>
            </div>

            <div className='grid'>
              <label>Maximum Customers Per Hour</label>
              <input></input>
            </div>

            <div className='grid'>
              <label>Average Cookies per Sale</label>
              <input></input>
            </div>
            
            <div className='grid'>
              <button className="bg-emerald-500 ">Create</button>
            </div>
            
          </div>

          <div className="flex justify-center m-5">
            <p>Report Table Coming Soon...</p>
          </div>

          <div className="flex justify-center">
            <p>{placeholder}</p>
          </div>

        </form>
      </main>

      <footer className='p-2 pl-5 m-auto bg-emerald-500 text-slate-700'>
        <p>©2022</p>
      </footer>
    </div>
  )
}

export default Home
