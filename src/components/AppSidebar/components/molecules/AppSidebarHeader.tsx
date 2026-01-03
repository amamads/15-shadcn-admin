import { Badge } from '@/components/atoms/badge'
import { Button } from '@/components/atoms/button'
import { SidebarHeader } from '@/components/atoms/sidebar'
import { ChevronsUpDown, Command } from 'lucide-react'

export default function AppSidebarHeader() {
  return (
      <SidebarHeader>
        <Button variant="ghost" className="px-2 py-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center w-full">
            <Badge className="size-8 rounded-xl row-span-2">
              <Command/>
            </Badge>
            <div className="place-self-start grid justify-items-start ml-2">
              <h1 className="font-bold">Shadcn Admin</h1>
              <h4 className="text-xs">Vite + ShadcnUI</h4>
            </div>
            <ChevronsUpDown />
          </div>
        </Button>
      </SidebarHeader>
  )
}
