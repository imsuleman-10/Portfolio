import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState(''); // States: '', 'Sending...', 'SUCCESS', 'ERROR'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,   // Check spelling!
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // Check spelling!
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // Check spelling!
    ).then((result) => {
      console.log('SUCCESS!', result.text);
      setStatus('SUCCESS');
      form.current.reset();
    }).catch((error) => {
      console.error('FAILED...', error);
      setStatus('ERROR');
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm shadow-2xl transition-all">
      {status === 'SUCCESS' ? (
        /* Success Message UI */
        <div className="py-10 text-center animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-slate-400 text-lg mb-8">
            Thank you for reaching out. I'll get back to you shortly.
          </p>
          <button 
            onClick={() => setStatus('')} 
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <span>←</span> Send another message
          </button>
        </div>
      ) : (
        /* The Contact Form */
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 ml-1">Your Name</label>
              <input 
                type="text" 
                name="from_name" 
                placeholder="Suleman Zaheer" 
                required 
                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700 text-white" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
              <input 
                type="email" 
                name="from_email" 
                placeholder="name@example.com" 
                required 
                className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700 text-white" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-400 ml-1">Project Details</label>
            <textarea 
              name="message" 
              placeholder="Tell me about your project..." 
              rows="5" 
              required 
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700 text-white resize-none"
            ></textarea>
          </div>

          <button 
            disabled={status === 'Sending...'}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 py-4 rounded-xl font-bold text-white text-lg shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {status === 'Sending...' ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {status === 'ERROR' && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
              ⚠️ Something went wrong. Please check your connection and try again.
            </div>
          )}
        </form>
      )}
    </div>
  );
}