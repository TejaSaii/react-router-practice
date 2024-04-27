import {useLoaderData} from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  return (
    <div className='text-white font-bold capitalize text-2xl bg-gray-700 flex justify-evenly p-4 items-center'>
      <img className='rounded-lg' src={data.avatar_url} alt="Profile image" />
      <div>followers: {data.followers}</div>
    </div>
  )
}

export default Github;

export async function githubInfoLoader() {
  const response = await fetch('https://api.github.com/users/tejasaii');
  return response.json();
}
