import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export async function Navbar() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center justify-between px-4 md:px-6">
            <Link href="/" className="" prefetch={false}>
                <div className="flex items-center">
                    <Image src="/images/logo-nobg.png" alt="Underload's Logo, a bold '1'" width={50} height={50} />
                    {/* <h1 className="font-bold text-2xl text-underload pl-2">Underload</h1> */}
                </div>
            </Link>
            {/* <nav className="ml-auto sm:flex gap-6 pr-5">
                <div className="flex items-center gap-x-5">
                    {(await isAuthenticated()) ? (
                        <div className="flex items-center gap-x-5">
                            <Button variant="secondary" asChild>
                                <Link href="https://ko-fi.com/adityasaravana#" target="_blank">
                                    <Heart className="text-pink-500" />
                                    Buy me a coffee
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href="https://insigh.to/b/shutout" target="_blank">
                                    <MessageSquareMore />
                                    Suggest a feature
                                </Link>
                            </Button>
                            <UserNav firstName={user?.given_name as string} lastName={user?.family_name as string} email={user?.email as string} profilepicture={user?.picture as string} />
                        </div>
                    ) : (
                        <div className="flex items-center gap-x-5">
                            <LoginLink><Button variant="outline">Log in</Button></LoginLink>
                            <RegisterLink><Button>Sign up</Button></RegisterLink>
                        </div>
                    )}
                </div>
            </nav> */}

            <ThemeToggle />
            {/* <div className="hidden sm:block"> */}
                {/* <ThemeToggle /> */}
            {/* </div> */}
        </header>
    )
}
