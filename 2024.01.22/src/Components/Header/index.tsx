export default function Header(props: { pageName: String}){
    return(
        <h1>
            {props.pageName}
        </h1>
    );
}