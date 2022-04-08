import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
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
        <form className="flex p-2 my-4 space-x-2 rounded-md bg-emerald-300 ">
          <p className=''>Location</p>
          <input name='Location' className=''></input>
          <button className="bg-emerald-500 ">Create</button>
          <div>
            <label>Minimum Customers Per Hour</label>
            <input></input>
            
            <input></input>

            <input></input>
          </div>
        </form>
      </main>

      <footer className='p-2 pl-5 mt-3 bg-emerald-500 text-slate-700'>
        <p>©2022</p>
      </footer>
    </div>
  )
}

export default Home
