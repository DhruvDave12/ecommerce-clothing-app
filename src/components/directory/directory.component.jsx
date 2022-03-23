import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

// Here we need to store the state value of menu items hence it is going to be a class component

const Directory = ({sections}) => {

    return (
        <div className="directory-menu">

            {
                sections.map(section => (
                    <MenuItem title={section.title} key={section.id} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
                ))
            }

        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
})

export default connect(mapStateToProps)(Directory);