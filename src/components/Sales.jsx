

import Item from "./Item";

export default function Sales({ popularsales: { title, items } }) {

    return (
        <div className="w-[94%] mx-auto">
            <h2 className="mb-5 text-4xl font-black">{title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
                {items.map((item, i) => {
                    return <Item key={i} item={item} scale={false} />
                })}
            </div>
        </div>
    )
}