import {Link} from "react-router-dom";
import OnSignedIn from "./OnSignedIn";
import OnSignedOut from "./OnSignedOut";
import connect from "react-redux/lib/connect/connect";

const Header =(props) => {
    const { auth, profile  } = props;
    const status = auth.uid ? <OnSignedIn profile={profile}/> : <OnSignedOut />;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Free-Travel</Link>
                {status}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps)(Header)