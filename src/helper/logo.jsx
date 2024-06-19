// import logo from "../assets/images/logo.png"

import { Link } from "react-router-dom";


export default function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="text-3xl font-medium text-white">TripTix</h1>
    </Link>
  )
}
