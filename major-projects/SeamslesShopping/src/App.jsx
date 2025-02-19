import Banners from "./components/Banners"
import Deals from "./components/Deals"
import Itemds from "./components/Itemds"
import Navbar from "./components/Navbar"
import NewArrivals from "./components/NewArrivals"

function App() {

  return (
    <>
        <div className="">
          <Navbar />
          <Banners />
          <Itemds />
          <Deals />
          <NewArrivals />
        </div>
    </>
  )
}

export default App
