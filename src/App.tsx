import { useDispatch, useSelector } from "react-redux"
import { decreament, increament, increamentByValue } from "./redux/features/CounterSlice"
import jahidf, { testing2 } from "./Components/ui/testin/testin"
import { RootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
// import testin from "./Components/ui/testin/testin";
// import { decreament, increament } from "./redux/features/CounterSlice"

console.log(jahidf);
console.log(testing2);


function App() {
  const count =useAppSelector((st)=>st.counter.count)

  const dispatch = useAppDispatch()

  return (
    <>
    <div className='flex justify-center items-center h-screen w-full'>
      <div  className='flex gap-10 items-center border border-purple-100 bg-slate-50 p-10'>
      
        <button onClick={()=> dispatch(increament())} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Increament</button>
        <button onClick={()=> dispatch(increamentByValue({value:5}))} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Increament by 5</button>
        <h1 className='text-4xl'>{count}</h1>
        <button onClick={()=> dispatch(decreament())} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Deceament</button>
      </div>
    
    </div>
    </>
  )
}

export default App
