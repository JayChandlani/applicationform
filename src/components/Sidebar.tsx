
import { TodoIcon, MenuIcon, HomeIcon } from "./icon";

const Sidebar: React.FC = () => {
    const sidebarStyle = {
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 23px',
    };
    return (
        <div
            className='group fixed top-0 bottom-0 left-0 z-50 flex  w-64 -translate-x-full flex-col items-center gap-3 rounded-r-2xl bg-white py-6 px-8 transition-all duration-300 ease-in-out hover:rounded-r-2xl hover:px-8 md:w-[72px] md:translate-x-0 md:rounded-none md:px-3 md:hover:w-64'
            style={sidebarStyle}>
            <div className="mb-7 flex w-full items-start justify-between  p-2">
                <MenuIcon />
            </div>
            <div className="flex w-full flex-col items-center gap-6">
                <a className="flex h-12 w-full items-center justify-start rounded-lg px-3 text-black transition-all duration-100 ease-in-out hover:bg-[#E9EFFF] hover:text-primary-new " href="/capital-placement/candidate"><span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center">
                    <HomeIcon fill="none" />
                </span>
                    <span className=" pointer-events-none whitespace-nowrap text-sm text-inherit opacity-100 transition-all duration-300 ease-in-out group-hover:pointer-events-auto group-hover:opacity-100 md:opacity-0">Dashboard</span>
                </a>
                <a className="flex h-12 w-full items-center justify-start rounded-lg px-3 text-black transition-all duration-100 ease-in-out hover:bg-[#E9EFFF] hover:text-primary-new " href="/capital-placement/candidate/todo">
                    <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center">
                        <TodoIcon />
                    </span>
                    <span className=" pointer-events-none whitespace-nowrap text-sm text-inherit opacity-100 transition-all duration-300 ease-in-out group-hover:pointer-events-auto group-hover:opacity-100 md:opacity-0">Todo</span></a>
            </div>
        </div>
    )
}

export default Sidebar