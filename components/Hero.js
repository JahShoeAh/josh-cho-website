import Image from "next/image";
import styles from "@/styles/Hero.module.css";
import AsciiDonut from "@/components/AsciiDonut";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center text-slate-100 sm:min-h-[70vh] sm:px-6 sm:py-32"
    >
      <div className={styles.scanLines} aria-hidden="true" />
      <div className="pointer-events-none absolute left-2 top-2 hidden font-mono text-[8px] text-terminal-accent sm:block sm:left-6 sm:top-4 sm:text-[12px] lg:left-8 lg:top-6 lg:text-[14px]">
        <pre className="!whitespace-pre leading-tight">
{`                    ⌒ ― ⌒                  ⊹⠀­­
                           (　･(ｪ)･)     ⋅           ㅤ  ₊ㅤ˚ ㅤ⋅
                     /　   ヽ𓈒        ꒰    안녕  ྀི  ꒱
人＿__つつ`}
        </pre>
      </div>
      <div className="pointer-events-none absolute inset-0 hidden items-end justify-end pb-10 pr-2 opacity-60 mix-blend-screen sm:flex sm:pb-16 sm:pr-8 sm:opacity-80">
        <div className="flex w-[260px] max-w-full justify-end overflow-visible sm:w-[420px]">
          <AsciiDonut className="scale-[0.8] sm:scale-[1]" />
        </div>
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center gap-6 px-4 text-center sm:max-w-2xl sm:gap-8">
        <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-4 border-white/70 shadow-[0_0_30px_rgba(255,255,255,0.15)] sm:h-80 sm:w-80">
          <Image
            src="/profile.jpg"
            alt="Josh Cho"
            fill
            sizes="320px"
            className="object-cover"
            priority
          />
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg">
          Hello! My name is Josh Cho and I am a Junior at Purdue University studying CS.
        </p>
      </div>
    </section>
  );
}
