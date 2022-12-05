

export default function Card(props) {
    const { children } = props;

    return <div className="card-container"> {children} </div>;
}