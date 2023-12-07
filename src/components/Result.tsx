import { useRouter } from 'next/router';
import { bookData } from './Imgs';
import {useEffect , useState} from "react"
import Navbar from './Navbar';
const ResultPage = ()=>{
    const router = useRouter();
    const [data , setData] = useState([])

    useEffect(()=>{
        console.log(router);
        const searchTerm = router.query.term
        if(searchTerm !== undefined){
        const filteredBooks = bookData?.filter(
            (book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              book.isbnNumber.includes(searchTerm)
          );
          setData(filteredBooks)
          console.log(filteredBooks)
        }
    },[])

    return(
        <>
        <Navbar></Navbar>

        <div className="flex items-center justify-center">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {data.length > 0 ? (
      data.map((item, idx) => (
        <div key={idx} className="flex items-center border border-gray-300 p-4 rounded-md">
       
          <div className="mr-4">
            <img src={item.image.src} alt={item.title} className="w-32 h-32 object-cover rounded-md" />
          </div>
          
       
          <div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-2">Price: {item.price}</p>
            <p className="text-gray-700 mb-2">Quantity: {item.quantity}</p>
            <p className="text-gray-700 mb-2">ISBN: {item.isbnNumber}</p>
            <p className="text-gray-700 mb-2">Store Address:{item.storeAddress}</p>
            
            
          </div>
        </div>
      ))
    ) : (
      <div className="text-center">No Result</div>
    )}
  </div>
</div>

        </>
    )
}

export default ResultPage