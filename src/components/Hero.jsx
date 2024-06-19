import { VscDebugStart } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function Hero({ heroapi }) {
    const navigate = useNavigate()

    return (
        <div className="relative text-white w-full h-screen">
            <div className="absolute clip-path bg-theme w-full h-[80vh] -z-10"></div>

            <div className="pt-24">
                <h1 className="text-3xl md:text-5xl text-center leading-snug font-bold">{heroapi.title}<br />{heroapi.subtitle}</h1>
                <div className="flex justify-center">
                    <button onClick={() => navigate('/products')} className="bg-white hover:bg-slate-200 transition-all shadow-lg rounded-md text-black py-2 px-6 font-semibold mt-5">{heroapi.btntext}</button>
                </div>
            </div>

            <div className="flex flex-col gap-8 absolute bottom-1/2 translate-y-1/2 left-4 md:left-10 lg:left-28">
                {heroapi.videos.map((val, i) => {
                    return <div key={i} className="relative cursor-pointer group">
                        <VscDebugStart className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white opacity-60 text-black p-1 w-8 h-8 rounded-full" />
                        <img src={val.imgsrc} alt="" className="rounded-lg w-[80px] md:w-[100px] lg:w-[130px]" />
                        <video autoPlay={true} loop={true} muted={true} playsInline={true} className="absolute top-0 left-0 w-full h-full rounded-lg flex object-cover -z-10 group-hover:z-20">
                            <source type="video/mp4" src={val.clip} />
                        </video>
                    </div>
                })}
            </div>

            <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 flex gap-4 flex-col">
                {heroapi.sociallinks.map((icon, i) => {
                    return <img key={i} src={icon.icon} alt="" width={'30px'} className="cursor-pointer hover:bg-blue-400 rounded-full p-2 w-11 transition-all" />
                })}
            </div>

            <div className="flex justify-center">
                <img src={heroapi.img} alt="" className="absolute bottom-12 -rotate-12 hover:rotate-0 transition w-[70%] md:w-[60%] lg:w-[40%]" />
            </div>
        </div>
    )
}