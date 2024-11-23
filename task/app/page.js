
import Banner from "./components/Banner";
import Category from "./components/Category";

export default function Home() {
  return (
    <div className=" h-screen">
     <Banner/>
     <div className="absolute top-24 w-full hidden sm:block lg:px-[80px] xl:px-[90px] xxl:px-[100px] 2xl:px-[110px] ">
      <Category/>
      </div>
    
    </div>
  );
}
