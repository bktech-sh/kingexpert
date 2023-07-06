import { WHY_KING } from "@/app/constants";
import Chart from "./Chart";

const WhyKingExpert = () => {
  return (
    <div className="flex w-screen px-24">
      <div className="flex flex-col flex-1 gap-8">
        <p className="text-sm text-justify max-w-lg">{WHY_KING}</p>

        <Chart />
      </div>

      <div className="flex items-start justify-start w-5/12 -ml-10">
        <h2 className="text-6xl font-bold text-right">
          Kenapa <br /> King Expert?
        </h2>
      </div>
    </div>
  );
};

export default WhyKingExpert;
