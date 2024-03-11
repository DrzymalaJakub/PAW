import "./footer.scss"
export default function Footer(){
    return (
        <footer id="app-footer">
            <p>Copyright Jakub Drzymała {new Date(Date.now()).getFullYear()}</p>
        </footer>
    );
}