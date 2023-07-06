const Chart = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3">
        <div className="w-6/12 h-32 rounded-2xl bg-mainGreen" />
        <div className="flex gap-1 flex-col bg-mainOrange rounded-2xl w-36 justify-center items-center">
          <h2 className="h-fit color text-white font-bold text-4xl">20+</h2>
          <p className="h-fit text-white text-sm">Tutor</p>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="w-8/12 h-32 rounded-2xl bg-mainGreen" />
        <div className="flex gap-1 flex-col bg-mainOrange rounded-2xl w-36 justify-center items-center">
          <h2 className="h-fit color text-white font-bold text-4xl">50+</h2>
          <p className="h-fit text-white text-sm">Mitra</p>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="w-full h-32 rounded-2xl bg-mainGreen" />
        <div className="flex gap-1 flex-col bg-mainOrange rounded-2xl w-36 justify-center items-center">
          <h2 className="h-fit color text-white font-bold text-4xl">500+</h2>
          <p className="h-fit text-white text-sm">Siswa</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
