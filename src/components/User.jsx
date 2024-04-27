import {useParams} from 'react-router-dom';

const User = () => {
  const {userId} = useParams();
  return (
    <div className='text-2xl text-white text-center bg-gray-700 p-4'>User Id :{userId}</div>
  )
}

export default User;
