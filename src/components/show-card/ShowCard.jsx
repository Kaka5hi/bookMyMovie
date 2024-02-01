import React from "react";
import { Link } from "react-router-dom";
import './show-card.css'

const ShowCard = ({show}) => {
    return (
        <div id={show?.id} key={show?.id} className="items">
            <img
                src={show?.image?.medium || `https://demofree.sirv.com/nope-not-here.jpg`}
                alt={ show?.name ? show?.name : show?.network?.name }
            />
            <h4>{show?.name ? show?.name : show?.network?.name}</h4>
            <Link to={`/show/${show?.id}`}>Check more</Link>
        </div>
    );
};

export default ShowCard;
