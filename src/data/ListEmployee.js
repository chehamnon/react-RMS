import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const styles = {
  listStyles:{
    textAlign: 'start',
    paddingTop: 0,
    paddingBottom: 0,
  },

  fontStyle:{
    fontSize: 14,
  },

  secondaryFontStyle:{
    fontSize: 12,
  },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class ListEmployee extends Component {
  constructor(props, context) {
    super(props, context);

  }

  handleTouchTap(currentEmployee){
    this.props.setCurrentEmployee(currentEmployee);
  }

  render(){
    return(
      <Paper zDepth={1}>
          <List style={styles.listStyles} key={this.props.employee.id}>
            <ListItem style={styles.listStyles}
              leftAvatar={<Avatar src={this.props.employee.img} />}
               onClick={this.handleTouchTap.bind(this, this.props.employee)}
            >
              <span style={styles.fontStyle}>{this.props.employee.firstName} {this.props.employee.lastName}<br/></span>
              <span style={styles.secondaryFontStyle}>
                {this.props.employee.grade}, {this.props.employee.division}<br/>
                {this.props.employee.location}, {this.props.employee.phone}
              </span>
            </ListItem>
          <Divider/>
          </List>
      </Paper>
    );
  }
}

export default ListEmployee;
