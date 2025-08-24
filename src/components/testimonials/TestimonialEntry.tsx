import { type TestimonialType } from '../../types/testimonials.types';
import GradientText from '../reusable/GradientText';

interface TestimonialEntryProps {
  testimonial: TestimonialType;
}

const TestimonialEntry = ({ testimonial }: TestimonialEntryProps) => {
  return (
    <div className="glowing-card">
      <div className="glowing-card-content relative flex break-inside-avoid-column flex-col justify-between">
        <p className="text-lg font-extralight text-white">"{testimonial.quote}"</p>
        <div className="flex items-end gap-x-4">
          <img
            src={testimonial.imageSrc}
            alt={testimonial.name}
            className="size-12 rounded-full border border-white/20"
          />
          <div className="flex flex-col justify-start">
            <h3 className="text-lg">
              {testimonial.name} <span className="ml-2 text-sm text-white/70">({testimonial.role})</span>
            </h3>
            <GradientText className="w-fit text-sm">{testimonial.company}</GradientText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialEntry;
