
const Button = ({ onClick, children }) => {
  return (
    <button className='bg-orange-400 text-slate-900 font-bold py-2 px-6 rounded hover:bg-orange-500 uppercase text-sm'
        onClick={onClick}
    >{children}</button>
  )
}

export default Button