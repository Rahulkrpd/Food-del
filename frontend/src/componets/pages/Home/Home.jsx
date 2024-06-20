
import { useState } from "react"
import ExpoloerMenu from "../../ExpolerMenu/ExpoloerMenu"
import Header from "../../Header/Header"
import "./Home.css"
import FoodDisplay from "../../FoodDisplay/FoodDisplay"
import AppDownload from "../../AppDownload/AppDownload"
const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExpoloerMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
