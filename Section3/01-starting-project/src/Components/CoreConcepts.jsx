import { CoreConceptsData } from "../data";
import CoreConcept from "../Components/CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CoreConceptsData.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            </ul>
        </section>
    )
}