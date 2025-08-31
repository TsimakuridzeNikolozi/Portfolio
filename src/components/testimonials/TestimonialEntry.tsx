import { type TestimonialType } from '../../types/testimonials.types';
import GradientText from '../reusable/GradientText';

interface TestimonialEntryProps {
  testimonial: TestimonialType;
}

const TestimonialEntry = ({ testimonial }: TestimonialEntryProps) => {
  return (
    <div className="glowing-card">
      <div className="glowing-card-content relative flex flex-col justify-between gap-y-4">
        <p className="text-sm font-extralight text-white md:text-base 2xl:text-lg">{testimonial.quote}</p>
        <div className="flex items-end gap-x-4">
          <img
            src={testimonial.imageSrc}
            alt={testimonial.name}
            className="size-12 rounded-full border border-accent p-1 2xl:size-16"
          />
          <div className="flex h-full flex-col justify-start">
            <h3 className="relative text-sm 2xl:text-lg">
              <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer" className="link-hover">
                {testimonial.name}
              </a>{' '}
              <span className="ml-0.5 text-xs text-white/70 2xl:text-sm">({testimonial.role})</span>
            </h3>
            <GradientText className="w-fit text-xs 2xl:text-sm">{testimonial.company}</GradientText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialEntry;
