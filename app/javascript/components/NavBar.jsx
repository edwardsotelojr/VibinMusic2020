import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import VibinLogo from '../../assets/images/Vibin.png';
import ExploreLogo from '../../assets/images/explore.png';
import GroupiesLogo from '../../assets/images/groupies.png';

const mapStateToProps = state => {
    return {  };
};

const Nav = () => (
    <nav>
    <Link to="/"> <img src={VibinLogo} className="VibinTab" alt="home" /></Link>
    <Link to="/explore"> <img src={ExploreLogo} className="ExploreTab" alt="explore"/></Link>
    <Link to="/groupies"><img src={GroupiesLogo} className="GroupiesTab" alt="groupies"/></Link>
    </nav>
);

const NavBar = connect(mapStateToProps)(Nav);

export default NavBar;