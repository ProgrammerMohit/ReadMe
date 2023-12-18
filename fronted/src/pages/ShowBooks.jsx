import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
// import backgroundImage from './Home';
const ShowBooks = () => {
  const [book,setBook] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    axios
    .get(`https://read-me-7kt4.vercel.app/books/${id}`)
    .then((response)=>{
      setBook(response.data);
      setLoading(false)
    })
    .catch((error)=>{
        console.log(error);
        setLoading(false)
    })
  }, [])
  return (
    <div className='p-8'>
      <BackButton/>
      <span className="text-3xl mt-6">Show Book</span>
      {loading ? (
        <Spinner/>
      ): (
        <div className="flex flex-col border-2 border-red-400 rounded-xl w-fit p-4 mt-9">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
          
        </div>
      )}
    </div>
  )
}

export default ShowBooks
