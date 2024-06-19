import { useEffect, useState } from "react"
import Item from "../components/Item"
import { products } from "../data/data"

export default function Products() {
    const [search, setSearch] = useState('');
    const [select, setSelect] = useState('');

    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        setBoxes(
            products.items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search])

    useEffect(() => {
        if (select === 'all') {
            setBoxes(products.items)
        }
        else if (select === 'price-low') {
            setBoxes(products.items.sort((a, b) => Number(a.price) - Number(b.price)));
        }
        else if (select === 'price-high') {
            console.log(boxes)
            setBoxes(products.items.sort((a, b) => Number(b.price) - Number(a.price)));
            console.log(boxes)
        }
        else if (select === 'brand-a') {
            setBoxes(products.items.sort((a, b) => a.title.localeCompare(b.title)));
        }
        else if (select === 'brand-b') {
            setBoxes(products.items.sort((a, b) => b.title.localeCompare(a.title)));
        }
    })

    return (
        <div className="bg-[#ddd] pb-24 min-h-[75vh]">
            <div className="pt-[56px] bg-blue-600 z-20"></div>

            <div className="flex justify-center my-10 gap-10">
                <input type="text" className="w-[60%] py-2 px-4 rounded-lg border-none outline-none" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

                <select name="Sort" id="" className="rounded-lg py-2 px-3 outline-none" value={select} onChange={(e) => setSelect(e.target.value)}>
                    <option value="all">Sort By</option>
                    <option value="price-low">Price: Low - High</option>
                    <option value="price-high">Price: High - Low</option>
                    <option value="brand-a">Brand: A - Z</option>
                    <option value="brand-z">Brand: Z - A</option>
                </select>
            </div>

            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 px-10">
                    {boxes.map((item, i) => {
                        return <Item key={i} item={item} scale={true} />
                    })}
                </div>
            </div>
        </div>
    )
}