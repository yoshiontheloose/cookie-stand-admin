export default function Main(){
  
  let placeholder = '{"location":"Barcelona","minCustomers":2,"maxCustomers":4,"avgCookies":2.5}'
  
  return(

    <main className="bg-emerald-50">

      <form className="w-4/5 px-3 mx-auto my-5 rounded-md justify-items-center bg-emerald-300">
        
        <h1 className="flex justify-center p-3 text-xl justify-items-center">Create Cookie Stand</h1>
        
        <div className="flex m-2">
          <label className="mr-2">Location</label>
          <input name='Location' className="flex-grow"></input>
        </div>


        <div className="flex items-stretch justify-center grid-rows-4 gap-4 py-4 shrink">

          <div className='grid object-contain text-sm text-center'>
            <label>Minimum Customers Per Hour</label>
            <input></input>
          </div>

          <div className='grid text-sm text-center'>
            <label>Maximum Customers Per Hour</label>
            <input></input>
          </div>

          <div className='grid text-sm text-center'>
            <label>Average Cookies per Sale</label>
            <input></input>
          </div>
          
          <div className='grid px-10 py-3 text-xs text-center bg-emerald-500'>
            <button className="">Create</button>
          </div>
          
        </div>
      </form>

      <div className="flex justify-center m-5">
        <p>Report Table Coming Soon...</p>
      </div>

      <div className="flex justify-center m-5">
        <p>{placeholder}</p>
      </div>

    </main>

  )
}
