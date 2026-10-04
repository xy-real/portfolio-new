import { Award, Trophy } from "lucide-react";

const achievements = [
  {
    place: "01",
    title: "CS Week Java Programming Competition 2026",
    organization: "VSU CS3",
    date: "February 2026",
    description:
      "Placed first in the department's Java programming competition across all year levels, earning the title “Java Programmer of the Year 2026.”",
  },
  {
    place: "01",
    title: "CS Week Hackathon 2026",
    organization: "VSU CS3",
    date: "February 2026",
    description:
      "Co-designed and pitched ResQ, a student safety application with offline-resilient synchronization for critical emergency features during network outages.",
  },
  {
    place: "02",
    title: "ByteForward Hackathon — Visayas Leg 2025",
    organization: "Rev21 Labs",
    date: "July 2025",
    description:
      "Built OmniSell, a centralized inventory platform for online sellers, and placed second among participating universities across the Visayas.",
  },
  {
    place: "04",
    title: "EVCO Java Category 2024",
    organization: "PSITE",
    date: "October 2024",
    description:
      "Worked with a team to solve timed algorithmic challenges in Java and placed fourth in the region-wide programming competition.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="paper-grid px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-moss">03 · Recognition</p>
            <h2 id="achievements-title" className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-7xl">
              Proof under pressure.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
            Competition results across programming, product design, and technical collaboration—from department contests to regional hackathons.
          </p>
        </div>

        <ol className="relative mt-16 ml-3 border-l-2 border-ink/20 md:ml-5">
          {achievements.map((achievement, index) => (
            <li key={achievement.title} className="relative pb-8 pl-9 last:pb-0 sm:pl-12">
              <span
                className={`absolute -left-[0.8rem] top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink ${index % 2 === 0 ? "bg-lime" : "bg-clay"}`}
                aria-hidden="true"
              >
                <Award size={12} strokeWidth={2.4} />
              </span>

              <article className="grid overflow-hidden rounded-[1.75rem] border-2 border-ink/15 bg-paper shadow-[5px_5px_0_rgb(23_35_26_/_0.12)] md:grid-cols-[10rem_1fr]">
                <div className={`${index % 2 === 0 ? "bg-lime" : "bg-clay"} flex flex-col justify-between border-b-2 border-ink/15 p-6 md:border-r-2 md:border-b-0`}>
                  <p className="font-display text-6xl leading-none">{achievement.place}</p>
                  <div className="mt-8">
                    <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em]">Place</p>
                    <p className="mt-1 text-sm">{achievement.date}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-5 flex items-center gap-2 text-moss">
                    <Trophy size={20} aria-hidden="true" />
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.14em]">{achievement.organization}</p>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{achievement.title}</h3>
                  <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{achievement.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
