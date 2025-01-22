
import { useLoaderData } from 'react-router'
import './App.css'
import { CoffeeCard } from './components/CoffeeCard'


function App() {

  const coffees = useLoaderData()

  return (
    <div className='m-20'>
      <h1 className='text-3xl font-bold text-center mb-8'>Super Coffee Shop</h1>
      <div className='grid lg:grid-cols-2 gap-4'>
       {
         coffees.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
       }
      </div>
     
    </div>
  )
}

export default App
