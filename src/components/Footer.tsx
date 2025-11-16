import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 md:px-12 lg:px-24 border-t border-border/30 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="glass-card p-12 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gradient">Let's Connect</h3>
              <p className="text-muted-foreground text-lg">
                Building the future of technology, one innovation at a time.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://x.com/wazzsheeshh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/20 transition-all group"
                  title="Twitter"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/YOUR_LINKEDIN_HANDLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/20 transition-all group"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/wazzsheeshh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/20 transition-all group"
                  title="GitHub"
                >
                  <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:wazzsheeshh@gmail.com"
                  className="w-12 h-12 rounded-xl glass-card flex items-center justify-center hover:bg-primary/20 transition-all group"
                  title="Email"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right space-y-4">
              <p className="text-4xl font-bold text-gradient">WAZZ</p>
              <p className="text-muted-foreground">
                © 2025 Raja Fawaz. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Designed with innovation and excellence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
};

export default Footer;
