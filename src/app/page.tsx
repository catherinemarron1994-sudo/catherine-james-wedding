export default function Home() {
  const links = [
    {
      title: "Wedding Website",
      url: "https://www.theknot.com/us/catherine-marron-and-james-hutchings-2025-08-06"
    },
    {
  title: "Pin Needed for Photos: 4260",
  url: "#"
    },
    {
      title: "Cayman Professional Photos",
      url: "https://my.guestpix.com/guest/121507/gallery?album=31815"
    },
    {
      title: "Sharing your Cayman Photos and Videos",
      url: "https://my.guestpix.com/guest/121507/gallery?album=31819"
    },
    {
      title: "Speeches",
      url: "https://my.guestpix.com/guest/121507/gallery?album=31814"
    },
    {
      title: "England Party Need To Knows",
      url: "https://www.theknot.com/us/catherine-marron-and-james-hutchings-2025-08-06/england-party"
    },
    {
      title: "England RSVPs",
      url: "https://www.theknot.com/us/catherine-marron-and-james-hutchings-2025-08-06/rsvp"
    },
    {
      title: "Charity Registry",
      url: "https://www.theknot.com/us/catherine-marron-and-james-hutchings-2025-08-06/registry-ish"
    }
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-5 py-10">
      <div className="w-full max-w-2xl text-center">
        <h1 className="mb-12 text-6xl font-normal text-white md:mb-16 md:text-7xl lg:text-8xl" style={{ fontFamily: "var(--font-great-vibes)" }}>
          The Hutchings Wedding Party
        </h1>

        <div className="flex flex-col gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-white px-8 py-4 text-xl font-light text-white transition-all duration-300 hover:bg-white hover:text-black md:text-2xl"
              style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.5px" }}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
