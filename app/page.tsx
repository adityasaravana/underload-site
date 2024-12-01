import Image from "next/image";
import { DownloadOnAppStoreBadge } from "./components/DownloadOnAppStoreBadge";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* <Image src="/images/logo-nobg.png" alt="Underload's Logo, a bold '1'" width={150} height={150} /> */}
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl text-underload pt-20">
          The to-do list app that shows you one task at a time, and <em>works with Apple Reminders</em>.
        </h1>
        <p className="text-xl md:text-2xl text-underload pt-10">
          Built for procrastinators, by procrastinators.
        </p>

        <div className="pt-10">
          <DownloadOnAppStoreBadge />
        </div>

        <p className="text-underload pt-3">For iPhone, iPad, and Mac.</p>

        <Image src="/images/underload-sc-light.png" alt="A screenshot of the main view of Underload" width={500} height={500} />
      </div>
    </main>
  );
}
