export default function Footer({ footerAPI: { titles, links } }) {
    return (
        <footer className=" text-white bg-gradient-to-t from-cyan-500 to-blue-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[94%] mx-auto py-6">
                {titles.map((title, i) => {
                    return <div key={i} className="md:mx-auto">
                        <h2 className="font-bold text-2xl mb-3">{titles[i].title}</h2>
                        {links[i].map((link, i) => {
                            return <p key={i} className="text-slate-300 pl-2">{link.link}</p>
                        })}
                    </div>
                })}
            </div>

            <div className="py-3 text-center border-t-2 border-blue-400">
                <p>Copyright &copy; All Resered Rights 2024 | <a href="https://serajs.com" className="hover:text-black decoration-clone transition-all" target="_blank" rel="noreferrer">SERAJS.COM</a></p>
            </div>
        </footer >
    )
}