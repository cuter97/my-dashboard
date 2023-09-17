import Image from "next/image"
import { IoLogoReact, IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline } from 'react-icons/io5'
import { SidebarMenuItem } from "."

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={32} />,
        title: 'Dashboard',
        subTitle: 'Visulization'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={32} />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={32} />,
        title: 'Pokemons',
        subTitle: 'Static Generation'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={32} />,
        title: 'Favoritos',
        subTitle: 'Global State'
    },
]

export const Sidebar = () => {
    return (
        <div id="menu" style={{ width: '400px' }} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-auto">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact />
                    <span className="ml-2">Dash</span>
                    <span className="text-blue-500">Board</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <div className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
                            className="rounded-full w-8 h-8"
                            width={50}
                            height={50}
                            alt=""
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Agustin Castets
                    </span>
                </div>
            </div>

            <div id="nav" className="w-full px-6">

                {
                    menuItems.map(item => (
                        <SidebarMenuItem
                            key={item.path}
                            {...item}
                        />
                    ))
                }

            </div>
        </div>
    )
}
