import { Suspense, useCallback, useRef, useState } from 'react';
import { globeArcs, globeConfig } from '../constants/globe.constants';
import GlassCard from '../components/reusable/GlassCard';
import toast from 'react-hot-toast';
import { useResponsive } from '../hooks/useResponsive';
import { lazy } from 'react';
import SuspenseSpinner from '../components/reusable/SuspenseSpinner';

const World = lazy(() => import('../components/World'));

const Contact = () => {
  const { isMobile } = useResponsive();

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
    <section
      id="contact"
      className="padding-x grid h-max w-full grid-cols-1 place-items-center gap-x-4 py-6 md:grid-cols-2 xl:gap-x-16 xl:py-12"
    >
      <GlassCard className="!h-fit max-w-[60rem] rounded-xl p-4 md:p-6 xl:p-10">
        <form ref={formRef} onSubmit={handleSubmit} className="flex w-full flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="input-label">
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
              className="input"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="input-label">
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
              className="input"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="input-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              rows={5}
              className="input"
              required
            />
          </div>

          <button type="submit" className="simple-button rounded-lg disabled:cursor-not-allowed" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </GlassCard>
      {!isMobile && (
        <div className="h-full max-h-[20rem] w-full xl:max-h-[32rem] xl:min-h-96 3xl:max-h-[44rem]">
          <div className="h-full w-full overflow-hidden rounded-3xl hover:cursor-grab">
            <Suspense fallback={<SuspenseSpinner />}>
              <World globeConfig={globeConfig} data={globeArcs} />
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
