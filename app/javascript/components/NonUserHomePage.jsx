import React from "react";
import { connect } from "react-redux";
import './NonUserHomePage.css'

const mapStateToProps = state => {
    return {  };
};

const Page = () => (
    <div class="Non-UserHomePage" id="home" name="non-UserHomePage">
        <div class="LeftSide">
            <div class="TopBroadcast">
                Top live stream
            </div>
            <div class="Slideshow">
                About Vibin
            </div>
        </div>
        <div class="RightSide" id="rightSide">
            <div class="TopSongs">
                Top songs from the past week
            </div>
            <div class="TopBroadcasts">
                Top streamers from the past week.
            </div>
            <div class="Trending">
                Treading songs. highest plays from the past 3 days
            </div>
            <div class="GenreList">
                select genre then display top songs from the past month.
            </div>
        </div>
    </div>
);

const NonUserHomePage = connect(mapStateToProps)(Page);

export default NonUserHomePage;