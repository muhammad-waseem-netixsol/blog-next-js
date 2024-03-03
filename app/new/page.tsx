"use client"
import Blog from '@/components/Blog';
import { File } from 'buffer';
import React, {ChangeEvent, useRef , useState} from 'react';

function page() {
  const [file, setFile] = useState<any>(null);
  const [text, setText] = useState<string>('');
  const [imageError, setImageError] = useState<boolean>(false);
  const [imageSizeError, setImageSizeError] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const fileRef: React.RefObject<HTMLInputElement> = useRef(null);
  // on file button click 
  const onPickFile = () => {
    fileRef.current?.click();
  };
  // when image is selected
  const imageUploadHandler = (event:ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if(file){
      if(file.type !== "image/png"){
        setImageError(true);
        return;
      }
      if(file.size > 103000){
        setImageSizeError(true);
      }
      setImageSizeError(false);
      setImageError(false);
      console.log(file)
      setFile(file);
      setImageUrl(URL.createObjectURL(file));
    } 
  };
  return (
    <div className='min-h-screen max-w-screen-xl mx-auto mt-20 grid md:grid-cols-2 grid-cols-1 justify-center gap-4'>
      <div className='bg-white flex flex-col justify-start items-start rounded-md p-5'>
         <input type="file" className='hidden' ref={fileRef} onChange={imageUploadHandler} />
         <button onClick={onPickFile} className='bg-gray-200 border-2 border-black rounded-md p-2'>Upload Cover Image</button> 
         <div className='py-3'>
         {imageError && <p className='text-red-500 text-sm'>* Image has unsupported type. only PNG.</p>}
         {imageSizeError && <p className='text-red-500 text-sm'>* Image must be less than 100KB.</p>}
         </div>
      </div>
      {/* preview */}
      <div className='bg-white w-full rounded-md'>
        {/* <Blog previewStatus={true} imagePreView={imageUrl} textPreview={text}/> */}
      </div>
    </div>
  )
}

export default page;