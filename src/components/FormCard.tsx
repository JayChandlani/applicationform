import React from 'react'
type FormCardProps = {
  title:string;
  children:React.ReactNode;
}
const FormCard:React.FC<FormCardProps> = ({title,children}) => {
  return (
    <div className='shadow-md w-full max-w-[595px] rounded-xl  '>
      <h5 className=' bg-cyan-100 p-6 rounded-t-xl font-semibold text-xl'>{title}</h5>
       {children}
    </div>
  )
}

export default FormCard