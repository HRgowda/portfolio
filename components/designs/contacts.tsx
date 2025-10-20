import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

interface ContactDetails {
  email: string;
  phone: string;
  location: string;
}

export function Contacts() {
  const socialLinks: SocialLink[] = [
    // {
    //   icon: <FaGithub className="h-6 w-6" />,
    //   href: process.env.NEXT_PUBLIC_GITHUB_URL || "",
    //   label: "GitHub",
    // },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="h-6 w-6" />,
      href: process.env.NEXT_PUBLIC_X_URL || "https://twitter.com",
      label: "Twitter",
    },
  ];

  const contactDetails: ContactDetails = {
    email: process.env.NEXT_PUBLIC_EMAIL || "your.email@example.com",
    phone: process.env.NEXT_PUBLIC_PHONE || "+91 99999 99999",
    location: process.env.NEXT_PUBLIC_LOCATION || "India",
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center py-12 px-4 text-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
        Contact Me
      </h2>

      {/* Content Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Left Section: Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 sm:gap-6"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center gap-4 p-3 w-full max-w-sm justify-center rounded-lg bg-white/5 hover:bg-primary/10 border border-white/20 hover:border-white/40 backdrop-blur-md text-white transition-transform transform hover:scale-105 shadow-lg hover:shadow-primary/30 duration-300"
            >
              {social.icon}
              <span className="text-lg">{social.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Right Section: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 sm:gap-6"
        >
          {/* Email */}
          <div className="flex items-center gap-4 p-3 w-full max-w-sm justify-center rounded-lg bg-white/5 hover:bg-primary/10 border border-white/20 hover:border-white/40 backdrop-blur-md text-white transition-transform transform hover:scale-105 shadow-lg hover:shadow-primary/30 duration-300">
            <FaEnvelope className="h-6 w-6 text-primary" />
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-lg hover:underline"
              aria-label="Email Address"
            >
              {contactDetails.email}
            </a>
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-4 p-3 w-full max-w-sm justify-center rounded-lg bg-white/5 hover:bg-primary/10 border border-white/20 hover:border-white/40 backdrop-blur-md text-white transition-transform transform hover:scale-105 shadow-lg hover:shadow-primary/30 duration-300">
            <FaPhone className="h-6 w-6 text-primary" />
            <a
              href={`tel:${contactDetails.phone}`}
              className="text-lg hover:underline"
              aria-label="Phone Number"
            >
              {contactDetails.phone}
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-3 w-full max-w-sm justify-center rounded-lg bg-white/5 hover:bg-primary/10 border border-white/20 hover:border-white/40 backdrop-blur-md text-white transition-transform transform hover:scale-105 shadow-lg hover:shadow-primary/30 duration-300">
            <FaMapMarkerAlt className="h-6 w-6 text-primary" />
            <span className="text-lg">{contactDetails.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}