// src/pages/Resume.tsx
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground">Tharuneshvar T</p>
          <p className="text-lg text-muted-foreground/80">DevOps and AI Engineer</p>
        </div>
        
        {/* PDF Viewer */}
        <div className="bg-secondary/50 rounded-3xl p-6 md:p-12 shadow-2xl border border-border/50">
          <iframe
            src="/images/RESUME.pdf#view=FitH&toolbar=0&navpanes=0"
            className="w-full h-[75vh] md:h-[85vh] rounded-2xl shadow-xl border-0"
            title="Tharuneshvar T Resume"
          />
          
          {/* Download CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 p-4 bg-background/50 rounded-2xl">
            <a
              href="/images/RESUME.pdf"
              download="Tharuneshvar_T_Resume.pdf"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all w-full sm:w-auto"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              Download Resume (PDF)
            </a>
            
            <Link
              to="/"
              className="flex items-center justify-center gap-3 px-8 py-4 font-semibold text-foreground border-2 border-border rounded-xl hover:border-primary hover:text-primary hover:bg-primary/5 transition-all w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5" />
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
