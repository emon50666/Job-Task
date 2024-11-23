import Image from 'next/image';
const Banner = () =>{
    return(
       <div id="banner" className="w-full">
  <Image
    src="/banner.png"
    alt="logo"
    width={1920}
    height={390}
  
  />
</div>

    )
}

export default Banner ;