import { Map, PanelLeft, Settings, FileEdit, BarChart4, Clipboard, Sliders } from "lucide-react"

export const SideBar = () => {
    return (
        <nav className="w-14 h-[41em] mt-16 ml-1 rounded-lg bg-green-500 dark:bg-green-950 absolute">
            <ul className="flex flex-col justify-center items-center">
                <li className="mt-8">
                    <a href="#">
                        <Map color="white" strokeWidth={1}></Map>
                    </a>
                </li>
                <li className="mt-8">
                    <a href="#">
                        <PanelLeft color="white" strokeWidth={1}></PanelLeft>
                    </a>
                </li>
                <li className="mt-8">
                    <a href="#">
                        <Settings color="white" strokeWidth={1}></Settings>
                    </a>
                </li>
                <li className="mt-8">
                    <a href="#">
                        <FileEdit color="white" strokeWidth={1}></FileEdit>
                    </a>
                </li>
                <li className="mt-8">
                    <a href="#">
                    <Sliders color="white" strokeWidth={1}></Sliders>
                    </a>
                </li>
                <li className="mt-8">
                    <a href="#">
                        <Clipboard color="white" strokeWidth={1}></Clipboard>
                    </a>
                </li>
                <li className="mt-8">
                    <a href="#">
                        <BarChart4 color="white" strokeWidth={1}></BarChart4>
                    </a>
                </li> 
            </ul>
        </nav>
    )
}