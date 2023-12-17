import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead className=''>
        <tr >
          <th className='border border-slate-100 rounded-md p-2 bg-white text-black'>No</th>
          <th className='border border-slate-100 rounded-md p-2 bg-white text-black'>Title</th>
          <th className='border border-slate-100 rounded-md max-md:hidden p-2 bg-white text-black'>
            Author
          </th>
          <th className='border border-slate-100 rounded-md max-md:hidden p-2 bg-white text-black'>
            Publish Year
          </th>
          <th className='border border-slate-100 rounded-md p-2 bg-white text-black'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-100 rounded-md text-center p-2 bg-white text-black'>
              {index + 1}
            </td>
            <td className='border border-slate-100 rounded-md text-center p-2 bg-white text-black'>
              {book.title}
            </td>
            <td className='border border-slate-100 rounded-md text-center max-md:hidden p-2 bg-white text-black'>
              {book.author}
            </td>
            <td className='border border-slate-100 rounded-md text-center max-md:hidden p-2 bg-white text-black'>
              {book.publishYear}
            </td>
            <td className='border border-slate-100 rounded-md text-center'>
              <div className='flex justify-center gap-x-4 p-2 bg-white text-black'>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;