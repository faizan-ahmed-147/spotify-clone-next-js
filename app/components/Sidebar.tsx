"use client"
import { twMerge } from "tailwind-merge"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from "./Box"

interface sidebarprops {
    children: React.ReactNode
}

const Sidebar: React.FC<sidebarprops> = ({ 
    children,
   })=> {
    const pathname = usePathname()
    const routes = useMemo(() => [

        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== "/search",
            href: "/"
        },
        {
            icon: BiSearch,
            label: "Search",
            active: "/search",
            href: "/search"
        }

    ], [])
    return (

        <div className={twMerge(`
            flex 
            h-full
            `,

          )}
        >
          <div 
            className="
              hidden 
              md:flex 
              flex-col 
              gap-y-2 
              bg-black 
              h-full 
              w-[300px] 
              p-2
            "
          >
                <Box>
                    Sidebar!sda
                </Box>
            </div>
        </div>

    )
}

export default Sidebar
