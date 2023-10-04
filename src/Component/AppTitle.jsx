export default function AppTitle(props) {
    const { title = "Box-office", subtitle= "Are you looking for a movie or an actore?" } = props;

    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}