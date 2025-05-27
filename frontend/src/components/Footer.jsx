import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center m-4 h-16 text-2xl text-blue-800 border-t-2">
      <p>© 2030 <Link to="/">FARM</Link>. All Rights Reserved.</p>
    </footer>
  )
}