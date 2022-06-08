
const TextField = ({ label, inputProps, onChange, value }) => {
    return (
        <div className="flex flex-col mb-5">
            <label className='mb-2 text-gray-800 text-base font-bold'>{label}</label>
            <input
                className='bg-gray-200 py-2 px-3 border-2 outline-none'
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default TextField