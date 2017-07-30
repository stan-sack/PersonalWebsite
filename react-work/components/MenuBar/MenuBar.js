import React, { PropTypes } from 'react';
import s from './MenuBar.css';

class MenuBar extends React.Component {

    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.object,
        ),
    };

    componentDidMount() {
        window.componentHandler.upgradeElement(this.root);
    }

    componentWillUnmount() {
        window.componentHandler.downgradeElements(this.root);
    }

    render() {
        const listItems = this.props.items.map(item =>
            <li><a href={item.link}>{item.text}</a></li>
        );

        return (
            <div className="menuBarContainer">
                <ul className="menuBar">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default MenuBar;
