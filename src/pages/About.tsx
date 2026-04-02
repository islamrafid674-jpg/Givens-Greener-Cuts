import { motion } from "motion/react";
import {
  CheckCircle2,
  Shield,
  Award,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-gray">
      {/* Page Header */}
      <section className="bg-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1592424005688-57380dc5f8e7?q=80&w=2000&auto=format&fit=crop"
            alt="Team working"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-dark"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight"
          >
            About <span className="text-brand-gold">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Omaha's most reliable premium lawn care and landscaping
            professionals.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] z-10">
                <img
                  src="https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/627505540_874389702065809_1991641252549139294_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHwdXX5sUHPJZtprrlmRqichIWOX7c5bjKEhY5ftzluMo_Zpk0Ex6C4jeRsHPH_bJHVJf6FkWIA5Cm4TRWZs3dx&_nc_ohc=RRcydi8FRVkQ7kNvwFl5ck8&_nc_oc=AdrVAvSV3Qzq67dFWNBxFC-jb2-Y_2g2H3MlRBZ9jlmxKaT7WQzG-ZAmw5P3_TlzOR0&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=IDuMBdMGhkVH7obdIoZ2bQ&_nc_ss=7a3a8&oh=00_Af05vcHxY2wjqGtcCEsGOIZ9QKc0MvrE4ZqtQdBvhmC-fA&oe=69D44F77"
                  alt="Founder"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <p className="text-white font-heading font-extrabold text-3xl mb-1">
                    Marcus Givens
                  </p>
                  <p className="text-brand-gold font-medium tracking-wider uppercase text-sm">
                    Founder & Owner
                  </p>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-dark mb-8 leading-tight tracking-tight">
                Rooted in Omaha, <br />
                <span className="text-brand-green">Built on Reliability.</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-600 font-light leading-relaxed">
                <p>
                  Givens Greener Cuts was founded with a simple mission: to
                  elevate the standard of property maintenance in the Omaha
                  area. We saw a gap between "guy with a truck" operations and
                  massive, impersonal corporate franchises.
                </p>
                <p>
                  We bridge that gap by offering the personal touch and local
                  accountability of a small business, backed by the
                  commercial-grade equipment, comprehensive insurance, and
                  strict professionalism of a large-scale operation.
                </p>
                <p>
                  Whether we're maintaining a half-acre residential lawn or
                  managing snow removal for a 10-acre commercial plaza, our
                  commitment remains the same: show up on time, do the job
                  right, and leave the property looking immaculate.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="font-heading font-extrabold text-5xl text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                    10+
                  </h4>
                  <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                    Years Experience
                  </p>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="font-heading font-extrabold text-5xl text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                    500+
                  </h4>
                  <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                    Happy Clients
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Credentials */}
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight">
              The Givens Standard
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              We don't cut corners. We invest in our team, our equipment, and
              our credentials to provide you with absolute peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Fully Insured",
                desc: "Comprehensive liability and worker's comp coverage for your protection.",
              },
              {
                icon: Award,
                title: "Licensed & Certified",
                desc: "Properly licensed for commercial applications and specialized treatments.",
              },
              {
                icon: Users,
                title: "Professional Crew",
                desc: "Uniformed, trained, and background-checked employees—never day laborers.",
              },
              {
                icon: CheckCircle2,
                title: "Commercial Fleet",
                desc: "Top-of-the-line, regularly maintained equipment for a perfect finish every time.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="glass-dark p-10 rounded-[2rem] text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-white/5"
              >
                <div className="w-20 h-20 mx-auto bg-brand-green/20 rounded-2xl flex items-center justify-center mb-8 rotate-3 hover:rotate-6 transition-transform">
                  <item.icon className="w-10 h-10 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-dark mb-8 tracking-tight">
                Proudly Serving the Greater Omaha Area
              </h2>
              <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
                We provide premium residential and commercial services across
                Douglas and Sarpy counties. Our localized expertise means we
                understand the specific soil, climate, and seasonal challenges
                of our region.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  "Omaha",
                  "Bellevue",
                  "Papillion",
                  "La Vista",
                  "Bennington",
                  "Elkhorn",
                  "Gretna",
                  "Ralston",
                ].map((city, i) => (
                  <div
                    key={i}
                    className="flex items-center text-gray-700 font-medium text-lg"
                  >
                    <MapPin className="w-6 h-6 text-brand-green mr-3 shrink-0" />
                    {city}
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center bg-brand-dark text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-green transition-colors shadow-xl group"
              >
                Check Availability
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-brand-gray p-4 rounded-[2.5rem] shadow-2xl"
              >
                {/* Placeholder for Map */}
                <div className="aspect-square md:aspect-video lg:aspect-square bg-gray-200 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                    alt="Map of Omaha"
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-dark text-white px-8 py-4 rounded-2xl font-heading font-bold flex items-center text-xl shadow-2xl backdrop-blur-md">
                      <MapPin className="w-6 h-6 text-brand-gold mr-3" />
                      Omaha Metro Area
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
