import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

// Here we need to store the state value of menu items hence it is going to be a class component
class Directory extends React.Component {

    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu">

                {
                    this.state.sections.map(section => (
                        <MenuItem title = {section.title} key = {section.id} imageUrl = {section.imageUrl} size = {section.size} linkUrl = {section.linkUrl}/>
                    ))
                }
            
            </div>
        )
    }
}

export default Directory;