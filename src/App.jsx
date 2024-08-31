import { useState } from 'react'
import { useEffect } from 'react'
import CardComponent from './components/CardComponent';
import './App.css'
import LoadingComponent from './components/LoadingComponent';
import SingleUserComponent from './components/SingleUserComponent';

function App() {

  // const [myData, setMyData] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then((data) => 
  //       setMyData(data.products,
  //       setIsLoading(true)
  //     ))
  //     .catch((err) => console.log(err)
      
  //   )
    
  // }, []);

  // return ( 
  // <div className='container mx-auto'>
  //   {/* <h1 className='text-4xl bg-blue-500 p-5'>Hello React JS</h1> */}
    
  //   {isLoading ? (
  //   <div className='flex flex-wrap gap-[20px] mt-[100px]'>
  //     {myData.map((el, index) => {
  //       return <CardComponent key={index} item={el}/>
  //     })}
  //   </div> 
  //   ) : ( 
  //   <LoadingComponent />
  //   )}
  // </div> )



  // const [active, setActive] = useState(false);

  // useEffect(() => {
  //   console.log("Radi");
    
  // }, [active])

  // return (
  // <div className="container mx-auto">
  //   <h2>Hello React JS</h2>

  //   <button onClick={() => setActive(!active)}>Change State</button>
  // </div>
  // )


  const [person, setPerson] = useState({
    name: 'Nemanja',
    lastname: 'Stevanovic',
    age: 16,
    address: 'Dormagen'
  });

  return (
  <div className="container mx-auto">
    {/* <h2>Hello React JS</h2> */}
    <SingleUserComponent person={person} setPerson={setPerson} />

  </div>
  )

}

export default App
