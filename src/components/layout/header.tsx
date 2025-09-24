import Link from 'next/link';
import { Button } from '../ui/button';
import { ContactDialog } from '../contact-dialog';
import { validateRequest } from '@/lib/auth';
import { logoutAction } from '@/app/actions';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navItems } from '@/lib/nav-items';
import { MobileNav } from './mobile-nav';


const UserDropdown = ({ user, children }: { user: { name: string; username: string; avatarUrl?: string }, children: React.ReactNode }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            @{user.username}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <form action={logoutAction}>
                    <DropdownMenuItem asChild>
                        <button type="submit" className="w-full text-left">Log out</button>
                    </DropdownMenuItem>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default async function Header() {
  const { user } = await validateRequest();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="font-bold sm:inline-block font-headline text-lg text-glow-accent">
                    VK
                </span>
            </Link>
        </div>

        <nav className="hidden flex-1 md:flex items-center justify-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="transition-colors text-secondary-foreground hover:text-foreground">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
            <ContactDialog>
              <Button size="sm" className="hidden sm:flex">
                Work With Me
              </Button>
            </ContactDialog>
            {/* {user ? (
                <UserDropdown user={user}>
                     <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatarUrl} alt={user.name} />
                            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </Button>
                </UserDropdown>
            ) : (
                <Button size="sm" variant="outline" asChild>
                    <Link href="/login">Login</Link>
                </Button>
            )} */}
             <MobileNav />
        </div>
      </div>
    </header>
  );
}
