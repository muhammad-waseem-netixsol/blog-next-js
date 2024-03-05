import React from 'react'

const UserCard = () => {
  return (  <div className='p-5 bg-indigo-100 rounded-lg gap-4 flex justify-between items-center'>
  <div className='h-24 w-24 rounded-full overflow-hidden'>
      <img className='object-center h-full w-full block' src="https://tse3.mm.bing.net/th?id=OIP.iSu2RcCcdm78xbxNDJMJSgHaEo&pid=Api&P=0&h=220" alt="jjjj" />
  </div>
  <div className=''>
      Muhammad jbsjjb <br />
      (usermadsc8)
  </div>
  <div className=''>
      12 min, 3939
  </div>
  <div className='text-gray-500 italic'>Blocked</div>
  <div><button className='py-2 bg-indigo-700 text-white px-4'>Unblock</button></div>
</div>
  )
}

export default UserCard