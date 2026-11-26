'use client';

import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const BOOKING_URL = '#'; // Configurable booking URL

const serviceOptions = [
  'AI Customer Support',
  'Workflow Automation',
  'Web Development',
  'Mobile Application',
  'Multiple Services',
  'Not sure yet',
];

const budgetOptions = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Not sure yet',
];

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

function validateEmail(email: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const payload = (await res.json().catch(() => null)) as { error?: string } | null;

      if (!res.ok) {
        setSubmitError(
          payload?.error ??
            'Something went wrong. Please try again or email clickops.chat@gmail.com directly.'
        );
        return;
      }

      setIsSuccess(true);
    } catch {
      setSubmitError(
        'Network error. Please check your connection or email clickops.chat@gmail.com directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-surface-secondary">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Contact info */}
          <div>
            <SectionHeading
              eyebrow="CONTACT US"
              title="Tell Us About Your Business"
              description="We'll come back with a rough scope, timeline, and price — within one business day."
            />

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue-light shrink-0">
                  <Calendar className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">
                    Free 30-minute consultation
                  </p>
                  <p className="text-sm text-text-secondary">
                    Discuss your business needs and explore how we can help.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue-light shrink-0">
                  <Mail className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">Email</p>
                  <a
                    href="mailto:clickops.chat@gmail.com"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    clickops.chat@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue-light shrink-0">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary mb-1">
                    Location
                  </p>
                  <p className="text-sm text-text-secondary">
                    Yangon, Myanmar · Bangkok, Thailand
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 bg-surface-secondary rounded-xl border border-border">
              <p className="text-sm text-text-secondary">
                Prefer to pick a time?{' '}
                <a
                  href={BOOKING_URL}
                  className="text-brand-blue font-medium hover:underline"
                >
                  Use our full booking page
                </a>{' '}
                for a scheduled Google Meet consultation.
              </p>
            </div>
          </div>

          {/* Right — Contact form */}
          <ScrollReveal delay={0.12} y={28}>
            {isSuccess ? (
              <div className="bg-white border border-border rounded-xl p-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-brand-blue-light flex items-center justify-center">
                    <CheckCircle className="h-7 w-7 text-brand-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Message sent
                </h3>
                <p className="text-sm text-text-secondary mb-4 max-w-sm mx-auto">
                  Thanks — we got your inquiry and will reply to your email within one
                  business day.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setIsSuccess(false);
                    setSubmitError(null);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      phone: '',
                      service: '',
                      budget: '',
                      message: '',
                    });
                  }}
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white border border-border rounded-xl p-6 lg:p-8 space-y-5"
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    required
                    error={errors.name}
                  >
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your name"
                      className={inputClasses(errors.name)}
                    />
                  </FormField>
                  <FormField
                    label="Email"
                    required
                    error={errors.email}
                  >
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@company.com"
                      className={inputClasses(errors.email)}
                    />
                  </FormField>
                </div>

                {/* Company + Phone row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Company">
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Company name"
                      className={inputClasses()}
                    />
                  </FormField>
                  <FormField
                    label="Phone"
                    required
                    error={errors.phone}
                  >
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+95 9 XXX XXX XXX"
                      className={inputClasses(errors.phone)}
                    />
                  </FormField>
                </div>

                {/* Service + Budget row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Service Type"
                    required
                    error={errors.service}
                  >
                    <select
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={cn(
                        inputClasses(errors.service),
                        !formData.service && 'text-text-secondary'
                      )}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>
                  <FormField
                    label="Budget Range"
                    required
                    error={errors.budget}
                  >
                    <select
                      value={formData.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className={cn(
                        inputClasses(errors.budget),
                        !formData.budget && 'text-text-secondary'
                      )}
                    >
                      <option value="">Select budget</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                {/* Message */}
                <FormField
                  label="Message"
                  required
                  error={errors.message}
                >
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    rows={4}
                    className={cn(inputClasses(errors.message), 'resize-none')}
                  />
                </FormField>

                {submitError ? (
                  <p
                    className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5"
                    role="alert"
                  >
                    {submitError}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Book My Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="text-xs text-text-secondary text-center">
                  By submitting, you agree to be contacted about your inquiry.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-primary mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

function inputClasses(error?: string) {
  return cn(
    'w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue',
    error ? 'border-red-300' : 'border-border hover:border-text-secondary/30'
  );
}
