interface Props {
    params: { id: string };
}

export default function PokeIdPage({ params }: Props) {
    return (
        <div>
            <h1>Pokemon {params.id}</h1>
        </div>
    );
}