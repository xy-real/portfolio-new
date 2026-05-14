import { Award, Trophy } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "1st Place - CS Week Java Programming Competition 2026",
      organization: "VSU CS3",
      date: "February 2026",
      description: "Secured 1st place in the department's annual programming competition, officially earning the title of \"Java Programmer of the Year 2026.\" Demonstrated advanced algorithmic problem-solving and technical mastery of Java to outperform peers across all year levels.",
    },
    {
      title: "1st Place - CS Week Hackathon 2026",
      organization: "VSU CS3",
      date: "February 2026",
      description:
        "Competed against all computer science year levels within the department to architect and pitch ResQ. This student safety application stood out for its use of offline-resilient data synchronization, ensuring critical emergency features function even during network outages.",
    },
    {
      title: "2nd place - ByteForward Hackathon Visayas Leg 2025",
      organization: "Rev21 Labs",
      date: "July 2025",
      description: "Secured 2nd place in a highly competitive, region-wide hackathon against universities across the Visayas. Our winning submission, OmniSell, is a centralized inventory management platform designed to streamline operations and unify data for online sellers.",
    },
    {
      title: "4th Place - EVCO Java Category 2024",
      organization: "PSITE",
      date: "October 2024",
      description: "Secured 4th place in a highly competitive, region-wide group programming competition. Collaborated closely with a team to architect solutions and solve advanced algorithmic challenges under tight time constraints, demonstrating both technical proficiency in Java and strong teamwork.",
    },
  ];

  return (
    <section id="achievements" className="px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-5">
          <Trophy size={24} />
          <div className="font-mono text-2xl font-bold">Achievements</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="p-6 bg-accent rounded-2xl border border-border hover:border-foreground transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                  <Award className="w-5 h-5 text-background" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
