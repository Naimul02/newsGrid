import { Link } from "react-router-dom";


const ThreeColumnLayout = ({data}) => {
    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 border-b border-current mb-10 pb-6">
  {data?.map((news, index) => {
    return (
      <div
        className={`flex flex-row items-center gap-3 mx-4 lg:mx-0`}
      >
        <div className="w-[150px] lg:w-[80px] h-[70px] lg:h-[80px]">
          <img
            src={news?.urlToImage}
            alt=""
            className="w-[150px] lg:w-[80px] h-[70px]  lg:h-[80px] object-cover"
          />
        </div>
        {/* content */}
        <div className="lg:w-[330px] font-sans">
          
          <h3 className="text-blue-600 font-semibold">{news?.category}</h3>
          <h1 className="font-bold hover:text-zinc-500">
            {news?.title.slice(0, 70)}...
          </h1>
          <Link to={news?.url} target='_blank' className="text-red-400 hover:underline  mt-3 font-semibold font-sans">Read More...</Link>
        </div>
      </div>
    );
  })}
</div>


        </>
    );
};

export default ThreeColumnLayout;