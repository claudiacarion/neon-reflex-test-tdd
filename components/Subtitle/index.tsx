type SubtitleProp = {
  text: string
}

const Subtitle = ({text}: SubtitleProp) => {
  return (
    <h2>{text}</h2>
  )
}

export default Subtitle