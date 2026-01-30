import type { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons/lib"

export type AppData = {
    title:string,
    description:string,
    icon:LucideIcon | IconType,
    isConnected:boolean
}