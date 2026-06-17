import Logo from './Logo'
import { Button } from './ui/button'
// import { GitHub } from 'lucide-react';


export default function HomeNav() {
  return (
    <div className="text-secondary-foreground fixed top-0 left-0 right-0 h-10 flex">
      <div className="flex-1 text-start p-2">
        <Logo />
      </div>
      <div className="flex-1 text-end p-2">
        <div className="inline-flex items-center">
          <Button variant="ghost" size="icon" className="w-18 h-12 cursor-pointer">
            {/* <Github className="h-4 w-12" /> */}
            github
          </Button>
        </div>
      </div>
    </div>
  )
}