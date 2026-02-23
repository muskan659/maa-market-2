import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      style={{
        background: " linear-gradient(270deg, #01050B 0%, #2C353F 100%);"
        ,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top Section */}
      <div
        className="max-w-6xl px-6 lg:px-10 py-12 lg:py-16 mx-auto"
        style={{margin:"auto",padding:"0px"}}
      >
        {/* Top Bar: Logo + App Buttons + Register */}
        <div
          className="flex max-w-6xl mx-auto flex-col lg:flex-row items-center justify-between gap-4 mb-16"
          style={{margin:"auto"}}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/image.png" alt="Ouryx Logo" width={140} height={46} className="h-auto w-auto" />
          </div>

          {/* App Store Buttons + QR */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <img src="/applogo1.svg" alt="Apple Store" className="h-10 w-auto" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <img src="/applogo.svg" alt="Google Play" className="h-10 w-auto" />
              </Link>
            </div>

            <div className="hidden sm:flex items-center gap-3 pl-6 border-l border-white/10">
              <span className="text-[10px] text-white/50 leading-tight uppercase tracking-wider">
                Scan to<br />Download
              </span>
              <Image src="/barcode.svg" alt="QR Code" width={48} height={48} className="opacity-80" />
            </div>
          </div>

          {/* Register Button */}
          <Link
            href="/register"
            className="inline-block rounded-full px-10 py-3 text-white font-bold text-[13px] tracking-[2px] uppercase shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{
              background: "linear-gradient(270deg, #9E826A 0%, #CDAC91 100%)",
              boxShadow: "0 4px 24px rgba(180,130,60,0.35)",
            }}
          >
            REGISTER NOW
          </Link>
              <br></br>
        </div>
    

        {/* Nav Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20" style={{justifyContent: "space-between", paddingLeft: "20px"}}>
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start lg:w-60">
            <img src="/logo.svg" alt="Ouryx Logo" width={140} height={46} className="mb-6 h-auto" />
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {[
                { label: "Instagram", icon: "📷" },
                { label: "X", icon: "𝕏" },
                { label: "YouTube", icon: "▶" },
              ].map(({ label, icon }) => (
                <Link
                  key={label}
                  href="#"
                  title={label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffff",
                    fontSize: "15px",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Four Navigation Columns in 2x2 Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
            {/* Markets */}
            <NavColumn
              title="Markets"
              links={["Forex", "Commodities", "Indices", "Crypto"]}
            />

            {/* Trading Platforms */}
            <NavColumn
              title="Trading Platforms"
              links={["Account Types", "Platforms"]}
            />

            {/* Tools */}
            <NavColumn
              title="Tools"
              links={["Economic Calendar", "Market News", "Glossary"]}
            />

            {/* Company */}
            <NavColumn
              title="Company"
              links={[
                "About Us",
                "FAQ",
                "Contact Us",
                "Legal Documents",
                "Become a Partner",
              ]}
            />
          </div>
        </div>
      </div>

      {/* Divider */}


      {/* Legal Text */}
      <div
        className="max-w-6xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-9"
        style={{
          margin: "0 auto",
        }}
      >
        <div
          className="max-w-6xl"
          style={{
            borderTop: "1px solid rgba(176, 188, 201, 1)",

            margin: "0 auto",
          }}
        />
        <br></br>
        <p
          className="text-[10px] sm:text-[11.5px] leading-relaxed mb-4"
          style={{
            color: "rgba(135, 145, 156, 1)",
          }}
        >
          OURYX, with registered address Ground Floor, The Sotheby Building,
          Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia, is a trade name
          of ORX-GC Limited (IBC). ORX-GC Limited is registered in Saint Lucia
          with registration number 2025-00286. Office Location Dbaieh- 1st floor
          – Waterfront Offices Block C – Almatin – Lebanon.
        </p>
        <p
          className="text-[10px] sm:text-[11.5px] leading-relaxed mb-4"
          style={{
            color: "rgba(135, 145, 156, 1)",
          }}
        >
          ORX-GC Limited does not offer services to residents of certain
          jurisdictions including, but not limited to: Russia, Myanmar, United
          States of America, Canada, United Kingdom, Australia, North Korea,
          Sudan, Syria, Iran, Cuba, or any other jurisdiction where our services
          may conflict with local laws and regulations.
        </p>
        <p
          className="text-[10px] sm:text-[11.5px] leading-relaxed mb-4"
          style={{
            color: "rgba(135, 145, 156, 1)",
          }}
        >
          <strong style={{ color: "rgba(255,255,255,0.4)" }}>
            Risk Warning:
          </strong>{" "}
          ORX-GC Limited. offers Forex trading carries a high level of risk and
          may not be suitable for all investors. The high degree of leverage can
          work against you as well as for you. Before deciding to trade foreign
          exchange you should carefully consider your investment objectives, level
          of experience, and risk appetite. The possibility exists that you could
          sustain a loss of some or all of your initial investment and therefore
          you should not invest money that you cannot afford to lose. You should
          be aware of all the risks associated with foreign exchange trading and
          seek advice from an independent financial advisor if you have any
          doubts.
        </p>
        <p
          className="text-[10px] sm:text-[11.5px] leading-relaxed"
          style={{
            color: "rgba(135, 145, 156, 1)",
          }}
        >
          <strong style={{
            color: "rgba(135, 145, 156, 1)",
          }}>Disclaimer:</strong>{" "}
          The information provided by ORX-GC Limited including but not limited
          to our website content, trading platforms, market analysis, and
          educational materials, is for general informational purposes only.
          While we strive to keep the information up to date and correct, we make
          no representations or warranties of any kind, express or implied, about
          the completeness, accuracy, reliability, suitability, or availability
          with respect to the information, products, services, or related
          graphics provided.
        </p>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "#ffff",
        }}
      >
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
        >
          <span
            className="text-xs text-center sm:text-left"
            style={{ color: "rgba(135, 145, 156, 1)" }}
          >
            © Copyright Ouryx Global 2026
          </span>
          <div className="flex gap-4 sm:gap-6">
            {["Privacy Policy", "Cookies Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs underline underline-offset-2"
                style={{
                  color: "rgba(135, 145, 156, 1)",
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const AppStoreButton = ({
  icon,
  label,
  storeName,
  iconColor = "#fff",
}: {
  icon: string;
  label: string;
  storeName: string;
  iconColor?: string;
}) => (
  <Link
    href="#"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 18px",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "10px",
      background: "rgba(255,255,255,0.04)",
      textDecoration: "none",
      transition: "border-color 0.2s, background 0.2s",
    }}
  >
    <span style={{ fontSize: "22px", color: iconColor }}>{icon}</span>
    <div>
      <div
        style={{
          fontSize: "9px",
          color: "rgba(248, 242, 242, 0.92)",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "15px",
          fontWeight: "700",
          color: "#fff",
          lineHeight: 1.2,
        }}
      >
        {storeName}
      </div>
    </div>
  </Link>
);

const NavColumn = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div className="text-left">
    <h4
      className="text-[13px] font-bold text-white tracking-wide mb-5 mt-0"
    >
      {title}
    </h4>
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {links.map((link) => (
        <li key={link} style={{ marginBottom: "8px" }}>
          <Link
            href="#"
            className="text-[13px] text-white no-underline transition-colors duration-200 hover:text-gray-300"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;