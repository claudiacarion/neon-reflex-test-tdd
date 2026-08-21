type SubtitleProp = {
  text: string
}

const Subtitle = ({text}: SubtitleProp) => {
  return (
    <h2 className='font-mono'>{text}</h2>
  )
}

export default Subtitle