import { Mail, Phone, MapPin, Linkedin, Github, Briefcase, GraduationCap, Code, Award, Layers, ExternalLink } from 'lucide-react';
import { Badge } from './components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Separator } from './components/ui/separator';

export default function App() {
  const skills = {
    "Programming Languages": ["JavaScript/TypeScript", "Python", "C++", "C", "Java", "C#"],
    "Web Development": ["Vue.js/Nuxt.js", "Node.js", "HTML5", "CSS3", "REST APIs"],
    "Database": ["SQL", "Database Design", "Normalization", "XAMPP"],
    "Design & Tools": ["Figma (Advanced)", "UI/UX Prototyping", "Wireframing", "Visual Studio Code", "Git Version Control"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                      src="src/public/jebo.png"
                      alt="Profile"
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                    />
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ark Jeremy Cabugwason Cabras
              </h1>
              <p className="text-xl text-slate-300 mb-6">
                UX/UI Designer & Web Developer focused on creating user-centered digital experiences
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <a href="tel:+639622037317" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                  <Phone className="w-4 h-4" />
                  +63 962 203 7317
                </a>
                <a href="mailto:jevocabras@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition">
                  <Mail className="w-4 h-4" />
                  jevocabras@gmail.com
                </a>
                <span className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4" />
                  Baybay City, Leyte, Philippines
                </span>
              </div>
              
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white" asChild>
                  <a href="https://www.linkedin.com/in/ark-jeremy-cabras-b2339b350" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" className="bg-transparent border-white/20 hover:bg-white/10 text-white" asChild>
                  <a href="https://github.com/jevo1" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Education Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
            <h2>Education</h2>
          </div>
          
          <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Visayas State University</CardTitle>
              <CardDescription>2021 – Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-3">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-muted-foreground">
                <strong>Relevant Coursework:</strong> Application Development (2025), Object Oriented Programming (2023), Fundamental of Database Management (2024)
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h2>Skills & Technologies</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-green-600" />
            </div>
            <h2>Experience</h2>
          </div>
          
          <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>IT Intern – Baybay City Municipality IT Department</CardTitle>
              <CardDescription>September 2023 - December 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Developed front-end features for official city website using HTML/CSS/JS</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Achieved 100% mobile-responsive design and 20% faster page loads</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Conducted user interviews that shaped 4 major navigation updates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Integrated WCAG-compliant accessibility improvements</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Layers className="w-6 h-6 text-orange-600" />
            </div>
            <h2>Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="flex-1">University Feedback & Suggestion Platform</span>
                  <div className="flex gap-1 flex-wrap justify-end">
                    <Badge variant="outline" className="text-xs">Next.js</Badge>
                    <Badge variant="outline" className="text-xs">Supabase</Badge>
                  </div>
                </CardTitle>
                <CardDescription>
                  <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-700 border-amber-300">
                    🎨 Designing Stage
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Online platform for university facilities, faculty, and admin feedback with interactive features including comments, like/dislike voting, suggestion filtering with approval workflows, and admin dashboard for tracking in-progress submissions
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Hush
                  <Badge variant="outline" className="ml-auto">Flutter</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Anonymous social media app providing a secure, judgment-free space for users to share experiences, connect globally, and engage in private conversations with end-to-end encryption and ephemeral content
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Student Registry System
                  <Badge variant="outline" className="ml-auto">C++ & SQL</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Database application managing student records with reduced data redundancy through 3NF normalization
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  High-Fidelity Prototype
                  <Badge variant="outline" className="ml-auto">Figma</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Interactive responsive website prototype with adaptive layouts, improving design iteration efficiency
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-pink-100 rounded-lg">
              <Award className="w-6 h-6 text-pink-600" />
            </div>
            <h2>Certifications</h2>
          </div>
          
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                  <div>
                    <p className="mb-1">Cybersecurity Awareness Participation</p>
                    <p className="text-sm text-muted-foreground">Netplay Inc. & Sophos • October 2024</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                  <div>
                    <p className="mb-1">UX/UI Design Certification</p>
                    <p className="text-sm text-muted-foreground">Coursera DTI • December 2024</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="mb-6 text-slate-300">Let's Connect</h3>
            <div className="flex gap-6 justify-center mb-6">
              <a 
                href="https://www.linkedin.com/in/ark-jeremy-cabras-b2339b350" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://github.com/jevo1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <Separator className="mb-6 bg-slate-700" />
            <p className="text-sm text-slate-400">
              © 2025 Ark Jeremy Cabras. Designed & Developed with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}