import Navbar from "../nav/Navbar";

function Layout(props) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    );
}

export default Layout;
