import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Clock,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  // Controlled form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Validation errors state
  const [errors, setErrors] = useState({});
  // Submission status state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle controlled input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Have a project in mind, an AI engineering opportunity, or just want to discuss LLM agents? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Feel free to reach out via email, phone, or LinkedIn. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email card */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs uppercase font-semibold text-slate-400 dark:text-slate-500 font-mono">Email Me</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                {/* Phone card */}
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-cyan-50 dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-slate-400 dark:text-slate-500 font-mono">Call / WhatsApp</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                {/* Location card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70">
                  <div className="p-3 rounded-lg bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-slate-400 dark:text-slate-500 font-mono">Location</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Working hours / availability note */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>Timezone: GMT+6 (Dhaka) · Open to Remote & Relocation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              
              {/* Success Message Alert */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <h4 className="font-bold text-emerald-800 dark:text-emerald-200">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-emerald-700 dark:text-emerald-300 mt-1">
                      Thank you for reaching out, your inquiry has been received. I will get back to you promptly!
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-2 text-xs font-semibold text-emerald-800 dark:text-emerald-200 underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name & Email Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-mono">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-400 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-slate-800 focus:ring-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-mono">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-400 focus:ring-rose-500'
                          : 'border-slate-300 dark:border-slate-800 focus:ring-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-mono">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI Engineering Collaboration / Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-rose-400 focus:ring-rose-500'
                        : 'border-slate-300 dark:border-slate-800 focus:ring-blue-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2 font-mono">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here... tell me about your project or inquiry."
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-rose-400 focus:ring-rose-500'
                        : 'border-slate-300 dark:border-slate-800 focus:ring-blue-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
