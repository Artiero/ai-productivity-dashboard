import Cardtaks from "./assets/component/Cardtaks"
import Barchart from "./assets/component/Barchart"
import Linechart from "./assets/component/Linechart"
import Activity from "./assets/component/Activity"
import Sidebar from "./assets/component/Sidebar"

export default function App() {
  return (
    <div className="flex min-h-screen">
        <Sidebar/>
        <div className="container margin-auto p-6 ">
          <h1 className="font-heading text-2xl">Dashboard Overview</h1>
          <p className="font-body text-base font-light pt-1 text-gray-500">Selamat datang kembali! Berikut ringkasan produktivitas Anda hari ini.</p>
          <Cardtaks/>
          <div className="grid grid-cols-2 gap-7 ">
            <Barchart/>
            <Linechart/>
          </div>
          <Activity/>
      </div>
    </div>
  )
}
