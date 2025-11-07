import Image from "next/image";
import styles from "@/styles/Hero.module.css";
import AsciiDonut from "@/components/AsciiDonut";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center text-slate-100 sm:py-36"
    >
      <div className={styles.scanLines} aria-hidden="true" />
      <div className="pointer-events-none absolute left-2 top-2 font-mono text-[10px] text-terminal-accent sm:left-6 sm:top-4 sm:text-[12px] lg:left-8 lg:top-6 lg:text-[14px]">
        <pre className="!whitespace-pre leading-tight">
{`                    ⌒ ― ⌒                  ⊹⠀­­
                           (　･(ｪ)･)     ⋅           ㅤ  ₊ㅤ˚ ㅤ⋅
                     /　   ヽ𓈒        ꒰    안녕  ྀི  ꒱
人＿__つつ`}
        </pre>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-end justify-end pb-12 pr-4 opacity-80 mix-blend-screen sm:pb-16 sm:pr-8">
        <div className="flex w-[360px] max-w-full justify-end overflow-visible sm:w-[420px]">
          <AsciiDonut className="scale-[1] sm:scale-[1]" />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        <div className="relative flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-4 border-white/70 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
          <Image
            src="/profile.jpg"
            alt="Josh Cho"
            fill
            sizes="320px"
            className="object-cover"
            priority
          />
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Hello! My name is Josh Cho and I am a Junior at Purdue University studying CS.
        </p>
      </div>
    </section>
  );
}
