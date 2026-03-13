import Image from "next/image";
import AboutUsImage from "../../public/images/Flutter-Template.png";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl group">
          <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-700 ease-in-out"></div>

          <div className="relative w-full h-full rounded-2xl border border-white/10 overflow-hidden bg-zinc-900 shadow-2xl">
            <Image
              src={AboutUsImage}
              alt="Framework Conference"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center -z-10 text-zinc-600 text-sm">
              Image not found in /public folder
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-blue-500 rounded-full"></span>
            <p className="text-sm font-bold tracking-widest text-blue-500 uppercase">
              About Framework
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Building a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Community
            </span>{" "}
            of Innovators
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            Framework is a community-driven tech conference and hackathon
            designed to bring developers, innovators, and tech enthusiasts
            together to learn, build, and collaborate.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Organized by the{" "}
            <span className="text-white font-medium">
              Flutter Kanpur Community
            </span>
            , the event features insightful talks from industry experts,
            hands-on sessions, and an exciting hackathon where participants can
            turn ideas into real solutions.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Framework aims to create a space where technology, creativity, and
            community come together to inspire the next generation of builders.
          </p>
        </div>
      </div>
    </section>
  );
}
