const Button = ({name}) => {
  return (
    <div>
    <button className='px-5 py-1 m-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm whitespace-nowrap'> {name} </button>
</div>
  )
}

export default Button