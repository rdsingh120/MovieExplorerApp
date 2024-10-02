import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="p-5 mt-20 flex flex-col items-center justify-center">
      <img className="w-10 h-10 object-cover" src={logo} alt="logo" />
      <p className='text-white'>Copyright © 2024 Ripudaman Singh</p>
    </footer>
  )
}
export default Footer
