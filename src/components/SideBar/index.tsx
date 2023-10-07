import { Map, PanelLeft, Settings, FileEdit, BarChart4, Clipboard, Sliders } from "lucide-react"

export const SideBar = () => {

    return (
        <nav className="h-[100vh] flex justify-center items-center absolute">
            <ul className="flex flex-col justify-center items-center w-14 h-[52em] ml-1 rounded-lg bg-green-500 dark:bg-green-950">
                <li className="w-10 h-10 hover:bg-green-800 rounded-lg flex justify-center items-center">
                    <a href="#">
                        <Map color="white" strokeWidth={1}></Map>
                    </a>
                </li>
                <li className="w-10 h-10 mt-8 hover:bg-green-800 rounded-lg flex justify-center items-center">
                    <a href="#">
                        <PanelLeft color="white" strokeWidth={1}></PanelLeft>
                    </a>
                </li>
                <li className="w-10 h-10 mt-8 hover:bg-green-800 rounded-lg flex justify-center items-center">
                    <a href="#">
                        <Settings color="white" strokeWidth={1}></Settings>
                    </a>
                </li>
                <li className="w-10 h-10 mt-8 hover:bg-green-800 rounded-lg flex justify-center items-center">
                    <a href="/fazendas">
                        <FileEdit color="white" strokeWidth={1}></FileEdit>
                    </a>
                </li>
                <li className="w-10 h-10 mt-8 hover:bg-green-800 rounded-lg flex justify-center items-center">
                    <a href="#">
                    <Sliders color="white" strokeWidth={1}></Sliders>
                    </a>
                </li>
                <li className="w-10 h-10 mt-8 hover:bg-green-800 rounded-lg flex justify-center items-center">
                    <a href="#">
                        <Clipboard color="white" strokeWidth={1}></Clipboard>
                    </a>
                </li>
                <li className="w-10 h-10 mt-8 hover:bg-green-800 rounded-lg flex justify-center items-center">
                    <a href="#">
                        <BarChart4 color="white" strokeWidth={1}></BarChart4>
                    </a>
                </li> 
            </ul>
        </nav>
    )
}