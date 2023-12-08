const Upperbody = () => {
  return (
    <>
      <div className="mx-5 mt-5">
        <div className="bg-slate-500 py-14 text-center h-auto px-6 ">
          <p className="text-white text-2xl font-bold pb-5">FREE SHIPPING</p>
          <p className="text-white">
            ON ORDERS ABOVE $50 - USE COUPON CODE OVER50
          </p>
          <div className="flex justify-center mt-6 flex-wrap">
            <button className="border border-black text-white bg-black px-4 py-2 rounded-md mr-4 hover:bg-orange-300">
              FICTION
            </button>
            <button className="border border-black text-white bg-black px-4 py-2 rounded-md mr-4 hover:bg-orange-300">
              CHILDREN
            </button>
            <button className="border border-black text-white bg-black px-4 py-2 rounded-md hover:bg-orange-300">
              TRADING
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upperbody;
