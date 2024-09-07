import Form from './Form'

const Navbar = ({ onSubmit, value, onChange }) => {
  return (
    <div className="navbar">
      <h1>Movies And TV Shows</h1>
      <Form onSubmit={onSubmit} value={value} onChange={onChange} />
    </div>
  )
}
export default Navbar
