import { useUser } from '@auth0/nextjs-auth0'

export default function Home() {

  const { user, error, isLoading } = useUser();

  try {

    if (user) {
      return (
        <>
          {isLoading ?
            setTimeout(() => {
              <div className="loader ease-linear m-auto mt-52 rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
            }, 2000)
            :
            <div className='flex justify-center items-center mt-24'>
              <div className='flex flex-col justify-center items-center bg-gray-300'>
                <div className='p-6 pb-0'>
                  <img className='rounded-full' src={user ? user.picture : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png`} height={100} width={100} />
                </div>
                <div className='p-12 pb-5 text-center'>
                  <p className='font-bold'>Name: <span className='text-blue-700'>{user.name}</span></p>
                  <p className='font-bold'>Username: <span className='text-blue-700'>{user.nickname}</span></p>
                  <p className='font-bold'>Email: <span className='text-blue-700'>{user.email}</span></p>
                  <p className='font-bold'>Is Email Verified: <span className='text-green-700'>{user.emailVerified ? "Yes" : "No"}</span></p>
                </div>
                <div className='p-5'>
                  <a href="http://localhost:3000/api/auth/logout"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Logout
                  </button></a>
                </div>
              </div>
            </div>
          }
        </>
      )
    }
    else {
      return (
        <div className='flex justify-center items-center flex-col mt-24'>
          <div className='m-10 bg-gray-100 flex flex-col space-y-10 justify-center items-center h-80 w-80'>
            <h1 className='text-3xl font-bold text-center'>My App</h1>
            <p className='text-xl text-center'>Please sign-in:</p>
            <a href="http://localhost:3000/api/auth/login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button></a>
          </div>
        </div>
      )

    }
  }
  catch {
    console.log(error)
  }

}


