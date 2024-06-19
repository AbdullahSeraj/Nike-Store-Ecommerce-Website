import Hero from "../components/Hero";
import Highlight from "../components/Highlight";
import Rated from "../components/Rated";
import Sales from "../components/Sales";
import Stories from "../components/Stories";

import { heroapi, popularsales, highlight, sneaker, toprateslaes, story } from "../data/data"

export default function Home() {
    return (
        <div>
            <Hero heroapi={heroapi} />
            <Sales popularsales={popularsales} />
            <Highlight highlight={highlight} reverse={false} />
            <Rated toprateslaes={toprateslaes} />
            <Highlight highlight={sneaker} reverse={true} />
            <Stories story={story} />
        </div>
    )
}