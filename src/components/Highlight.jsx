export default function Highlight({ highlight, reverse }) {
    return (
        <div className="w-[94%] mx-auto mt-28">
            <div className={`flex justify-between items-center gap-14 flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} `}>
                <div className={`w-[100%] lg:w-[50%] text-right flex ${reverse ? 'justify-end' : ''}`}>
                    <img src={highlight.img} alt="" width={'80%'} className={`${reverse ? '-rotate-12' : 'rotate-12'} mx-auto lg:mx-0`} />
                </div>

                <div className="w-[100%] lg:w-[50%] flex-1">
                    <h2 className="text-blue-400 text-4xl lg:text-5xl font-bold">{highlight.heading}</h2>
                    <h1 className="text-5xl lg:text-6xl font-bold">{highlight.title}</h1>
                    <p className="text-slate-600 my-4 mb-8">{highlight.text}</p>
                    <a className="bg-black text-white px-6 py-3 font-semibold rounded-lg hover:bg-[#222] transition-all" href={highlight.url} target="_blank" rel="noreferrer">{highlight.btn}</a>
                </div>
            </div>
        </div>
    )
}