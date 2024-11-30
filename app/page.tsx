export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl text-underload">
          The to-do list app that shows you one task at a time.
        </h1>
        <p className="text-xl md:text-2xl text-underload">
          Built for procrastinators, by procrastinators.
        </p>
      </div>
    </main>
  );
}
