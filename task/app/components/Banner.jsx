import Image from 'next/image';
const Banner = () =>{
    return(
        <div id="banner">
        <Image
        src="/banner.png"
        width={1920}
        height={350}
        alt="logo"
      />
         
        </div>
    )
}

export default Banner ;