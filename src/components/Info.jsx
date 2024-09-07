const Info = ({text, details}) => {
  return (
    <p className="bold">
      {text}: <span>{details}</span>
    </p>
  )
}
export default Info