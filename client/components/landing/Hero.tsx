import { DownloadCta } from "./DownloadCta";
import { HeroRibbon } from "./HeroRibbon";
import { ForOs } from "./visitor";

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip pt-[clamp(96px,min(12vw,17svh),136px)]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-gutter text-center">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 py-1 pr-3.5 pl-1 text-[14px] text-graphite">
            <span className="rounded-full bg-ink px-2.5 py-0.5 text-[12.5px] font-medium text-paper">Free</span>
            The open-source Wispr Flow alternative
          </p>
          <a
            href="https://www.producthunt.com/products/talkflow-6?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-talkflow-ea47cdaa-f4ff-4b0b-a5a4-56bd516d7179"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg transition-opacity hover:opacity-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="talkflow - 100% free, open-source, and private alternative to WisprFlow | Product Hunt"
              width={200}
              height={43}
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1280918&theme=light&t=1792035925990"
            />
          </a>
        </div>
        <h1 className="font-serif text-[clamp(48px,min(8.6vw,12.5svh),108px)] leading-[0.94] font-normal tracking-[-0.025em]">
          Talk to your computer,
          <br />
          <em>for free, forever.</em>
        </h1>
        <p className="mt-5 max-w-[44ch] text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-graphite">
          Hold <ForOs mac="fn" windows="Ctrl + Win" />, speak, and your words are typed wherever your cursor is. Open source, and it
          never leaves your <ForOs mac="Mac" windows="computer" />.
        </p>
        <div className="relative z-10 mt-7">
          <DownloadCta compare />
        </div>
      </div>
      <HeroRibbon />
    </section>
  );
}
