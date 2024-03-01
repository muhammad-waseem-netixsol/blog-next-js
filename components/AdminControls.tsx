import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import adminStore from '@/zustand-store/admin/admin';
interface controlsProps{
    id: string;
}
const AdminControls:React.FC<controlsProps> = ({id}) => {
    const {acceptHandler} = adminStore();
    const onAcceptBlog = () => {
        acceptHandler(id);
    };
    const onRejectBlog = () => {};
  return (
    <div className='w-full p-5 grid grid-cols-2 gap-2'>
        <button onClick={onAcceptBlog} className='hover:bg-green-100 bg-green-50 py-3 rounded-lg flex justify-center items-center text-4xl'><FcCheckmark /></button>
        <button onClick={onRejectBlog} className='hover:bg-red-100 bg-red-50 py-3 rounded-lg flex justify-center items-center text-4xl text-red-600'><RxCross2 /></button>
    </div>
  )
}

export default AdminControls