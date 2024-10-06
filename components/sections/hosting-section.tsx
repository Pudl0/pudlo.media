import { Mic } from "lucide-react";

export default function HostingSection() {
  return (
    <section
      id="hosting"
      className="py-20 min-h-screen flex items-center bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0 order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6 text-blue-300 mt-12 md:mt-0">
              Hosting und Interviews
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Überlasse deine Events und Interviews echten Profis. Wir schaffen
              eine Atmosphäre, in der sich deine Gäste wohlfühlen und deine
              Botschaft perfekt ankommt.
            </p>
            <ul className="space-y-4 text-gray-300 mb-8">
              {[
                "Event-Hosting auf höchstem Niveau.",
                "Fesselnde Interviewführung, die begeistert.",
                "Podcast-Produktion und Hosting, die deine Stimme groß macht.",
                "Moderation für deine digitalen Events – souverän und engagiert.",
                "Mehrsprachiges Hosting für globale Reichweite.",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-4 h-2 w-2 bg-blue-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center mb-12 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 border-2 border-blue-500 absolute top-4 left-4 rounded-lg opacity-20" />
              <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl flex items-center justify-center">
                <Mic className="w-32 h-32 text-blue-200 opacity-80" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg opacity-20" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 opacity-30" />
    </section>
  );
}
