import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Shield,
  MapPin,
  Phone,
  Scissors,
  Shovel,
  Truck,
  Snowflake,
} from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const services = [
    {
      title: "Lawn Mowing",
      icon: Scissors,
      desc: "Precision cutting and edging for a pristine look.",
      span: "col-span-1 md:col-span-2 row-span-2",
      img: "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/660094074_920090177495761_2034882180357738945_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGr3qFkoGLvuj4QA1eFDYMfGal--_eEm84ZqX7794SbzmleHDk5T1tydnf5CRLzwMKQDVz0x7PSFOWkFsEZRCc2&_nc_ohc=6-G-TKaEQpMQ7kNvwFwRbqA&_nc_oc=AdpTydsTWJJbTf-UvW5ZBLhBKnDGi7p8Qm3RPy8XkqzjcLyOzYdd7MPRkrhLoZ9rIfg&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=HZ5LGiuEj1iuBm9FDNWObw&_nc_ss=7a3a8&oh=00_Af28mCAYJf560C21O0imDzGvSf57CuJmMt8TG43Db3WxCw&oe=69D470A8",
    },
    {
      title: "Landscaping",
      icon: Shovel,
      desc: "Custom design and installation.",
      span: "col-span-1 row-span-1",
      img: "https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/561899273_792190793619034_806478961386775924_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGcZTEUMpirQtAvXfe3nJ7aTEz5H5yRnLFMTPkfnJGcscEynMWX8h2w3R9R2yBzk66_OeVp1Atbyyqt3kvHLxsI&_nc_ohc=ccKaucy1QzkQ7kNvwHz_TRd&_nc_oc=AdpkXKofkF0UC66fVn9NlUGnWyb3Esrk6DFyh3AeY7_UrB3pHhijUpiBZv2mlitYR6k&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=Vorb2UKpxVz6E5dLVoGYvg&_nc_ss=7a3a8&oh=00_Af21qRmTrH35FgcB2PhEsBMjW4FHNpxoPvqNCXZmtKNo-g&oe=69D46F10",
    },
    {
      title: "Hauling",
      icon: Truck,
      desc: "Efficient debris removal.",
      span: "col-span-1 row-span-1",
      img: "https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/517100793_714160304755417_9194571769787120205_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGkhUuQE5iKrHLo_b4wwk3vruuTVs5ZREiu65NWzllESD-s48QvQJ808pRMdmmjV9l_vlbp2Bfu-aFb6JRfdtCT&_nc_ohc=t5HbMJppjeYQ7kNvwEdcf4l&_nc_oc=AdozE3hdfWicnbS13JUR-WseNsd2BLXw-VOS_U0TldihTFgdm6UDXka9bQG_j67mdmM&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=l7f-yWIHt31PVYoPuDke2A&_nc_ss=7a3a8&oh=00_Af2VzBaoj8GHpxV3o6cEmmuj5hL_6ksvhVsaR8o7UVs7MA&oe=69D46EC4",
    },
    {
      title: "Snow Removal",
      icon: Snowflake,
      desc: "Reliable winter clearing.",
      span: "col-span-1 md:col-span-2 row-span-1",
      img: "https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/517563059_713158214855626_6728592122309867498_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGOnG7Y3VxRRzJiEGcqWgMns2qlIVjn-EazaqUhWOf4Rild0ixEHELzU2qI46T0l4M5_wgcxh9CNUxnj70MuSxp&_nc_ohc=X1rUzS6SjugQ7kNvwFcihoP&_nc_oc=AdrKgJYtLfpDmXUr5dRXn_L8XLQG_S7uTDDaFOLq-rqcece-9gdexOrgyhc3DNylLRY&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=JScH3NCtnrYAOt6LwpKQ2Q&_nc_ss=7a3a8&oh=00_Af2_CjQEaBLqAuO8p_kPy0kI-4NBqaJ2pFxRFzdgVZ-dFg&oe=69D4490A",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
          <img
            src="https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/580607904_815701761267937_4812938945437673105_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHhBhEaqqLsLY7P4dGcsHKtKgx4EWLbtTsqDHgRYtu1O8NcVey4msPeXItjRPQ4w8sfsfR7P8_3U0L7fWdmx-JP&_nc_ohc=ZrFPuZnFejoQ7kNvwHXO33n&_nc_oc=AdqORzcP_vzOIEg6JaG12Iv2UTsW-al7hD2UeCXllEeWFfhunsVN1b1pPaecYoMC5V4&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=XUqrM5U3FX0GrKu-v4rw-Q&_nc_ss=7a3a8&oh=00_Af1UnRcGNOW-hFesMmoxFnI_syQhthkiheMJdYm8ZPIKfw&oe=69D47166"
            alt="Beautiful landscaped garden"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px w-12 bg-brand-gold"></div>
                <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">
                  Omaha's Premier Choice
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight text-balance">
                Elevating <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold">
                  Outdoor Spaces
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 md:mb-12 max-w-2xl font-light leading-relaxed text-balance">
                Reliable residential & commercial property maintenance. We bring
                your vision to life with uncompromising quality.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 sm:gap-6">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-green px-8 py-4 font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(20,61,36,0.8)] w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-brand-gold transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0"></span>
                  <span className="relative flex items-center gap-2 text-lg">
                    Get a Free Quote <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
                <a
                  href="tel:4025550198"
                  className="group inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 font-medium text-white transition-all hover:bg-white hover:text-brand-dark w-full sm:w-auto"
                >
                  <Phone className="mr-3 w-5 h-5 text-brand-gold group-hover:text-brand-green transition-colors" />
                  <span className="text-lg">(402) 555-0198</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Trust Badges */}
      <section className="bg-brand-dark py-6 border-y border-white/10 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
        <div className="flex w-[200%] animate-marquee items-center">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex w-1/2 justify-around items-center px-4"
            >
              <div className="flex items-center space-x-3 text-gray-400">
                <Shield className="w-6 h-6 text-brand-gold" />
                <span className="font-heading font-semibold text-lg uppercase tracking-wider">
                  Fully Insured
                </span>
              </div>
              <div className="w-2 h-2 rounded-full bg-brand-green"></div>
              <div className="flex items-center space-x-3 text-gray-400">
                <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                <span className="font-heading font-semibold text-lg uppercase tracking-wider">
                  Licensed Pros
                </span>
              </div>
              <div className="w-2 h-2 rounded-full bg-brand-green"></div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-6 h-6 text-brand-gold" />
                <span className="font-heading font-semibold text-lg uppercase tracking-wider">
                  Locally Owned
                </span>
              </div>
              <div className="w-2 h-2 rounded-full bg-brand-green"></div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Star className="w-6 h-6 text-brand-gold" />
                <span className="font-heading font-semibold text-lg uppercase tracking-wider">
                  5-Star Rated
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-20 md:py-32 bg-brand-gray relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-brand-dark mb-4 md:mb-6 tracking-tight">
                Comprehensive <br className="hidden md:block" />
                Property Care.
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-balance">
                From weekly mowing to complete landscape transformations, we
                handle it all with unmatched professionalism and
                commercial-grade equipment.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-white border border-gray-200 px-8 py-4 font-medium text-brand-dark transition-all hover:bg-brand-dark hover:text-white group w-full md:w-auto"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative rounded-3xl overflow-hidden group ${service.span}`}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent transition-opacity duration-500"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:bg-brand-green transition-colors duration-500">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg max-w-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Before/After Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
            <div className="lg:w-1/2 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-brand-dark mb-6 md:mb-8 tracking-tight text-balance">
                  See the <span className="text-brand-green">Difference.</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
                  We don't just maintain properties; we elevate them. Our
                  attention to detail and commitment to quality ensures your
                  outdoor space always looks its absolute best.
                </p>
                <div className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                  {[
                    "Commercial-grade equipment",
                    "Trained & uniformed staff",
                    "Consistent scheduling",
                    "Satisfaction guaranteed",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center text-gray-800 font-medium text-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center mr-4">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:bg-brand-green transition-colors text-lg"
                >
                  View Full Portfolio
                </Link>
              </motion.div>
            </div>

            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] group"
              >
                <img
                  src="https://scontent.fdac3-1.fna.fbcdn.net/v/t39.30808-6/502850627_682383241266457_7364122757886695795_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF4HhxSlWoczj5P1uK3aDt9dhmIBBFXfeV2GYgEEVd95RWK_WTnGGUWaJ9Is2-GSNxseF63je3tY68D_ptJo1hL&_nc_ohc=9nfKOZuUckAQ7kNvwEwUl7Q&_nc_oc=AdrfQylnIvHZom7WAQG1Fa2SPjy1P6E0pVrol0i-8bXsY2DY16xNTsEHnHkKgypwxX0&_nc_zt=23&_nc_ht=scontent.fdac3-1.fna&_nc_gid=Ed8i6QoxMNgVhBzCvGmbgw&_nc_ss=7a3a8&oh=00_Af1JOzU-y5zbUQW5lOFoA1-Ep3XvaThQsnhPrz1rQLz7_A&oe=69D44CEA"
                  alt="After landscaping"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-4 border-white/20 rounded-[2.5rem] z-10 pointer-events-none"></div>
                <div className="absolute bottom-8 right-8 glass px-6 py-3 rounded-full font-heading font-bold text-brand-dark text-lg shadow-xl flex items-center">
                  <span className="w-3 h-3 rounded-full bg-brand-green mr-3"></span>
                  After Transformation
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="leaf-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M50 15C50 15 35 30 35 50C35 70 50 85 50 85C50 85 65 70 65 50C65 30 50 15 50 15Z"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#leaf-pattern)"
            />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 md:mb-8 tracking-tight text-balance">
              Ready to Upgrade Your Property?
            </h2>
            <p className="text-xl md:text-2xl text-brand-gold-light mb-10 md:mb-12 font-light">
              Contact us today for a free, no-obligation quote on your next
              project.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white text-brand-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-brand-gold transition-colors shadow-2xl hover:shadow-brand-gold/20"
              >
                Request a Quote
              </Link>
              <a
                href="tel:4025550198"
                className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Call (402) 555-0198
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
