import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const WorkExperience = () => {
  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 mb-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          Work Experience
        </h2>
        <Card className="p-2 backdrop-blur-sm rounded-xl bg-white/5 border-white/10 hover:border-white/20 transition-colors duration-300 hover:shadow-md hover:shadow-white">
          <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-6">
            <div className="flex items-start sm:items-center gap-4">
              <Avatar className="h-12 w-12 rounded-full">
                <AvatarImage src="/logo.svg" alt="Butter Money Logo" />
                <AvatarFallback>BM</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">Butter Money</h3>
                <p className="text-base sm:text-lg text-white/80">Full Stack Developer Intern</p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-sm font-medium">March 2025 – June 2025</p>
              <p className="text-sm text-white/80">Bengaluru, India</p>
            </div>
          </CardHeader>

          <CardContent className="p-6 pt-0">
      <div className="space-y-4">
    
      <div>
        <h4 className="text-lg font-medium">UI/UX Optimization and Performance</h4>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>
            Spearheaded a full-scale responsive redesign of the company website using <strong className="text-green-400">React</strong>, <strong className="text-green-400">Tailwind CSS</strong>, and <strong className="text-green-400">shadcn/ui</strong>, improving cross-device usability and boosting user retention by 25%.
          </li>
          <li>
            Developed a custom image optimization script at build time, reducing asset sizes by 96% (from 10MB to under 400KB) and boosting page load speeds by 2.5×.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-medium">Internal Automation Tool</h4>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>
            Built an internal document processing tool using <strong className="text-green-400">Next.js</strong> (frontend), <strong className="text-green-400">Tailwind CSS</strong>, <strong className="text-green-400">shadcn/ui</strong>, and <strong className="text-green-400">FastAPI</strong> (backend), reducing manual processing time from 35–40 minutes to under 5 minutes.
          </li>
          <li>
            Implemented secure cookie-based authentication to restrict tool access to internal staff and maintain session integrity.
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-medium">SEO and Analytics Integration</h4>
        <ul className="list-disc pl-5 space-y-2 text-white/80">
          <li>
            Enhanced SEO by optimizing <code>robots.txt</code> and implementing dynamic <code>sitemap.xml</code>, resulting in Lighthouse SEO scores of 91–100.
          </li>
          <li>
            Integrated <strong className="text-green-400">PostHog</strong> for user behavior tracking and funnel analytics, improving conversion analysis by 30%.
          </li>
        </ul>
      </div>

      </div>
    </CardContent>

    </Card>
    </div>
  </section>
  );
};

export default WorkExperience;
