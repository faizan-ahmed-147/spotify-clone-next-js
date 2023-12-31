"use client"
import { TbPlaylist } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai"
interface libraryProps {

}

const Library: React.FC<libraryProps> = () => {
    const onClick = () => {

    }

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-2">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={26} />
                    <p className="text-neutral-400 font-medium text-md"> Library</p>

                </div>
                <AiOutlinePlus onClick={onClick} className="text-neutral-400" size={20} />
            </div>
            <div>list of All song</div>
        </div>
    )
}

export default Library
