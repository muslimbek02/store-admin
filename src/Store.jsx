import MainContent from "./components/MainContent"
import SideBar from "./components/SideBar"

const Store = () => {
  return (
    <div className="flex flex-row font-inter">
      <SideBar />
      <MainContent />
    </div>
  )
}

export default Store