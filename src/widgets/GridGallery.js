import React from 'react';
import './GridGallery.css';

class GridGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
    };
    this.createItem = this.createItem.bind(this);
  }

  createItem(child, idx) {
    let classes = 'grid-item';

    if(idx == this.state.selectedIndex) { 
      classes += ' active'; 
    }
    else if (this.state.selectedIndex !== null) {
      classes += ' hidden';
    }

    return (
      <div className={classes} onClick={() => this.handleItemClick(idx)} key={idx} style={this.props.gridItemStyles}>
        {child}
      </div>
    );
  }

  handleItemClick(index) {
    console.log(`${index} was clicked`);
    if(this.props.disableExpansion) {
      return;
    }

    this.setState(old => {
      if(old.selectedIndex == index) {
        return { selectedIndex: null };
      }
      else {
        return { selectedIndex: index };
      }
    });
  }

  render() {
    const items = this.props.children.map(this.createItem);
    return (<div className="grid-gallery">{items}</div>)
  }
}

export default GridGallery;
