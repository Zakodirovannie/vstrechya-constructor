import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = () => {
    const isAuth = useSelector((state) => state.auth.isAuth)

    if (!isAuth) {
        window.location.assign('https://vstrechya.space/login/')
    }

    return <Outlet/>
};

export default PrivateRoute;