import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {  };
};

const Page = () => (
    <div>
    <p>Non user Home Page</p>
    </div>

);

const NonUserHomePage = connect(mapStateToProps)(Page);

export default NonUserHomePage;