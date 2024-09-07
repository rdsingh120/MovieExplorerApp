const Form = ({ onSubmit, value, onChange }) => {
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Dark Knight..."
        name="movieName"
        value={value}
        onChange={onChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}
export default Form
