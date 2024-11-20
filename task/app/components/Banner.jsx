import Image from 'next/image';
const Banner = () =>{
    return(
        <div>
        <Image
        src="/banner.png"
        width={1920}
        height={391}
        alt="logo"
      />
         
        </div>
    )
}

export default Banner ;