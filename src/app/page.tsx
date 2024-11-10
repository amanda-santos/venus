import TypingAnimation from "@/components/ui/typing-animation";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-dvh">
      <div className="flex justify-center flex-col items-center">
        <TypingAnimation
          className="font-mono text-2xl dark:text-slate-200"
          text="Hi, I'm Amanda"
          duration={200}
        />
        <h2 className="font-mono dark:text-slate-400">
          Frontend Software Engineer
        </h2>
      </div>
    </main>
  );
}
