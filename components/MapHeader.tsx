import { PawPrint } from "phosphor-react";

const MapHeader = () => {
  return (
    <header
      role="banner"
      className="absolute top-10 left-10 max-sm:right-10 z-40 w-fit bg-white/85 rounded-xl border-red-300 border shadow-md"
    >
      <div className="p-4">
        <h1 className="text-xl text-red-400 font-semibold flex items-center gap-x-2">
          Pup Spots
          <PawPrint size={24} color="#f87171" weight="duotone" />
        </h1>
        <p className="text-xs text-slate-700 mt-1">
          A map of dog-friendly hangouts across LA
        </p>
      </div>
    </header>
  );
};

export default MapHeader;
