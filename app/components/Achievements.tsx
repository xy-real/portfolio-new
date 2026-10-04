import { Award, Trophy } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "1st Place — CS Week Java Programming Competition 2026",
      organization: "VSU CS3",
      date: "February 2026",
      description:
        "Placed first in the department's Java programming competition across all year levels, earning the title “Java Programmer of the Year 2026.”",
    },
    {
      title: "1st Place — CS Week Hackathon 2026",
      organization: "VSU CS3",
      date: "February 2026",
      description:
        "Co-designed and pitched ResQ, a student safety application with offline-resilient synchronization for critical emergency features during network outages.",
    },
    {
      title: "2nd Place — ByteForward Hackathon Visayas Leg 2025",
      organization: "Rev21 Labs",
      date: "July 2025",
      description:
        "Built OmniSell, a centralized inventory platform for online sellers, and placed second among participating universities across the Visayas.",
    },
    {
      title: "4th Place — EVCO Java Category 2024",
      organization: "PSITE",
      date: "October 2024",
      description:
        "Worked with a team to solve timed algorithmic challenges in Java and placed fourth in the region-wide programming competition.",
    },
  ];

  return (
    <section id="achievements" aria-labelledby="achievements-title" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <Trophy size={24} aria-hidden="true" />
            <h2 id="achievements-title" className="font-mono text-2xl font-bold">Achievements</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600">
            Competition results that reflect my work in programming, product design, and technical collaboration.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement) => (
            <li
              key={achievement.title}
              className="rounded-2xl border border-border bg-accent p-6 transition-colors hover:border-gray-400"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground">
                  <Award className="h-5 w-5 text-background" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {achievement.organization}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground mb-3">
                    {achievement.date}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
