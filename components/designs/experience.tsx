import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { experiences } from "@/lib/experiences";

const WorkExperience = () => {
  return (
    <section id="experience" className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          Work Experience
        </h2>
        {experiences.map((exp, index) => (
          <Card
            key={`${exp.companyName}-${exp.start}-${exp.end}`}
            className={`p-2 backdrop-blur-sm rounded-xl bg-white/5 border-white/10 hover:border-white/20 transition-colors duration-300 hover:shadow-md hover:shadow-white ${index > 0 ? "mt-10" : ""}`}
          >
            <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-6">
              <div className="flex items-start sm:items-center gap-4">
                <Avatar className="h-12 w-12 rounded-full">
                  <AvatarImage src={exp.logoSrc} alt={`${exp.companyName} Logo`} />
                  <AvatarFallback>{exp.logoFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{exp.companyName}</h3>
                  <p className="text-base sm:text-lg text-white/80">{exp.role}</p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-sm font-medium">{exp.start} – {exp.end}</p>
                <p className="text-sm text-white/80">{exp.location}</p>
              </div>
            </CardHeader>

            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                {exp.sections.map((section, sectionIndex) => (
                  <div key={`${exp.companyName}-section-${sectionIndex}`}>
                    {section.title ? (
                      <h4 className="text-lg font-medium">{section.title}</h4>
                    ) : null}
                     <ul className="list-disc pl-5 space-y-2 text-white/80">
                       {section.bullets.map((bullet, bulletIndex) => (
                         <li key={`${exp.companyName}-bullet-${sectionIndex}-${bulletIndex}`}>
                           {bullet.split(/(React|Next\.js|Tailwind CSS|shadcn\/ui|FastAPI|PostHog|Python|Object-Oriented Programming|OOP|SQL|Database Management System|MySQL|pair programming|Hono|Node\.js|Wrangler|Cloudflare Workers|Neon|Prisma|Prisma Accelerate|Cloudflare Pages|Cloudflare R2|Astro|Vite)/g).map((part, partIndex) => {
                             const isKeyword = /^(React|Next\.js|Tailwind CSS|shadcn\/ui|FastAPI|PostHog|Python|Object-Oriented Programming|OOP|SQL|Database Management System|MySQL|pair programming|Hono|Node\.js|Wrangler|Cloudflare Workers|Neon|Prisma|Prisma Accelerate|Cloudflare Pages|Cloudflare R2|Astro|Vite)$/.test(part);
                             return isKeyword ? (
                               <span key={partIndex} className="text-green-400 font-medium">{part}</span>
                             ) : (
                               <span key={partIndex}>{part}</span>
                             );
                           })}
                         </li>
                       ))}
                     </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
  </section>
  );
};

export default WorkExperience;