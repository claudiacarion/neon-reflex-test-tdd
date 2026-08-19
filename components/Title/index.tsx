type TitleProp = {
  text: string
}

const Title = ({text}: TitleProp) => {
  return (
    <h1>{text}</h1>
  )
}

export default Title