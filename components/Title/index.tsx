type TitleProp = {
  text: string
}

const Title = ({text}: TitleProp) => {
  return (
    <h1 className='font-extrabold text-3xl md:text-5xl tracking-[10] mb-2'>{text}</h1>
  )
}

export default Title