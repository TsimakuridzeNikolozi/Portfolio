import { useCallback, useRef, useState } from 'react';
import { World } from '../components/World';
import { globeArcs, globeConfig } from '../constants/globe.constants';
import GlassCard from '../components/reusable/GlassCard';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    },
    [form],
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const emailjs = await import('@emailjs/browser');
    toast.promise(
      async () => {
        if (!formRef.current) return;

        try {
          await emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
          );
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('EmailJS Error:', error);
          throw error;
        } finally {
          setLoading(false);
        }
      },
      {
        loading: 'Sending message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message, please try again.',
      },
    );
  };

  return (
    <section id="contact" className="flex h-dvh w-full items-center justify-center gap-x-16 px-16">
      <GlassCard className="!h-fit rounded-xl p-10">
        <form ref={formRef} onSubmit={handleSubmit} className="flex w-full flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium tracking-wide text-white/80 uppercase">
              Your name
            </label>
            <input
              type="text"
              autoComplete="name"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-white/40 hover:border-white/20 hover:bg-white/8 focus:border-accent/50 focus:bg-white/10 focus:ring-2 focus:ring-accent/20 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium tracking-wide text-white/80 uppercase">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-white/40 hover:border-white/20 hover:bg-white/8 focus:border-accent/50 focus:bg-white/10 focus:ring-2 focus:ring-accent/20 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium tracking-wide text-white/80 uppercase">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              rows={5}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-white/40 hover:border-white/20 hover:bg-white/8 focus:border-accent/50 focus:bg-white/10 focus:ring-2 focus:ring-accent/20 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="simple-button cursor-pointer rounded-lg disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </GlassCard>
      <div className="h-full max-h-[32rem] min-h-96 w-full">
        <div className="h-full w-full overflow-hidden rounded-3xl hover:cursor-grab">
          <World globeConfig={globeConfig} data={globeArcs} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
