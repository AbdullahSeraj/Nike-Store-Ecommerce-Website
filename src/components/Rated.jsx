import Item from "./Item"

export default function Rated({ toprateslaes: { title, items } }) {
    return (
        <div className="w-[94%] mx-auto mt-24">
            <div>
                <h2 className="mb-5 text-4xl font-black">{title}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12">
                    {items.map((item, i) => {
                        return <Item key={i} item={item} scale={true} />
                    })}
                </div>
            </div>
        </div>
    )
}