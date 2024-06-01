import { useEffect, useState } from "react";

export default function Home() {
    // Hit the api route /api/readFromDb and render the rows it reutnrs

    // return <main>Hello world</main>;

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/api/readFromDb')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <main>
            <h1>My First Next.js App</h1>
            <p>{JSON.stringify(data)}</p>
        </main>
    );
}
