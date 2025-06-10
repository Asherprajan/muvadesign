import { ArrowRight } from "lucide-react";

export const ServiceCard = ({ service }: { service: any }) => (
    <div className="bg-white border border-black/10 rounded-[30px] p-6 relative group cursor-pointer transition-colors duration-300 min-h-[360px] w-[300px] flex flex-col justify-between hover:border-[#FF5C1D]">
      <div>
        <div className="absolute top-6 right-6">{service.icon}</div>
        <h3 className="text-xl font-light text-black/90 w-2/3">{service.title}</h3>
        <div className="w-16 h-0.5 bg-[#FF5C1D] my-4"></div>
        <p className="text-sm font-light text-black/75 w-4/5">{service.desc}</p>
      </div>
      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#FF5C1D] group-hover:border-[#FF5C1D] group-hover:text-white transition-all">
        <ArrowRight
          size={18}
          strokeWidth={1.5}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </div>
  );
  