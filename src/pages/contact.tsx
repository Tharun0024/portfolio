import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // ⚠️ PASTE YOUR REAL WEB3FORMS KEY HERE
  const ACCESS_KEY = '9694341c-2a8e-465f-8f8f-b6e99255967d';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append('access_key', ACCESS_KEY);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast({
          title: "Message sent!",
          description: "Thank you! I'll reply soon.",
        });
        setName(''); setEmail(''); setMessage('');
      } else {
        throw new Error(data.message || 'Failed to send');
      }
    } catch (error: any) {
      toast({
        title: "Failed to send",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* Header - EXACT ORIGINAL */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary border border-primary/20 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something
              <span className="text-primary"> Amazing</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or just want to connect? Drop me a message!
            </p>
          </div>

          {/* Form - EXACT ORIGINAL */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or idea..."
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full group px-8 py-4 bg-foreground text-background font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-foreground/10 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Alternative contact - ORIGINAL */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Prefer email directly? Reach me at{' '}
              <a href="mailto:tharuneshvar24@gmail.com" className="text-primary hover:underline">
                tharuneshvar24@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
