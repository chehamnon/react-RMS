import React, {Component} from 'react';

import {indigo400, white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Design from '../data/Design';

class LocationTab extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      disabled : true,
      isRequired: '',
    };
  }

  getOfficeAddress(location) {
    switch (location) {
      case "JKT":
        return (
          <div>
          <List>
            <ListItem>
              <TextField
                value = "Jakarta Office"
                floatingLabelText="Office Location"
                floatingLabelFixed={true}
                floatingLabelStyle={Design.floatingText}
                underlineShow={false}
                disabled={this.state.disabled}
                style={Design.textLocation}
              />
              <br/>
              <TextField
                floatingLabelText="Address"
                floatingLabelFixed={true}
                floatingLabelStyle={Design.floatingText}
                underlineShow={false}
                disabled={true}
                style={Design.addressText}
              />
              <ListItem style={Design.locationList}
                primaryText="Gedung Wirausaha, 8th Floor"
                secondaryText="Jl. HR. Rasuna Said Kav C5 Jakarta Selatan, 12940"
              />
            </ListItem>
            <Divider/>
          </List>
          </div>
        );

      case "YOG":
        return(
          <div>
            <List>
              <ListItem>
                <TextField
                  value = "Yogyakarta Office"
                  floatingLabelText="Office Location"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  underlineShow={false}
                  disabled={this.state.disabled}
                  style={Design.textLocation}
                />
                <br/>
                <TextField
                  floatingLabelText="Address"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  underlineShow={false}
                  disabled={true}
                  style={Design.addressText}
                />
                <ListItem
                  style={Design.locationList}
                  primaryText="Jl. Sidobali No. 2 Muja Muju, Umbulharjo"
                  secondaryText="Yogyakarta, 55165"
                />
              </ListItem>
              <Divider/>
            </List>
          </div>
        );

        case "BDG":
          return(
            <div>
            <List>
              <ListItem>
                <TextField
                  value = "Bandung Office"
                  floatingLabelText="Office Location"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  underlineShow={false}
                  disabled={this.state.disabled}
                  style={Design.textLocation}
                />
                <br/>
                <TextField
                  floatingLabelText="Address"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  underlineShow={false}
                  disabled={true}
                  style={Design.addressText}
                />
                <ListItem
                  style={Design.locationList}
                  primaryText="Jl. Prof Surya Sumantri No: 8-D"
                  secondaryText="Bandung, 40164"
                />
              </ListItem>
              <Divider/>
            </List>
            </div>
          );
        default:
          return(
            <div>
            <List>
              <ListItem>
                <TextField
                  value = "Bali Office"
                  floatingLabelText="Office Location"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  underlineShow={false}
                  disabled={this.state.disabled}
                  style={Design.textLocation}
                />
                <br/>
                <TextField
                  floatingLabelText="Address"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  underlineShow={false}
                  disabled={true}
                  style={Design.addressText}
                />
                <ListItem
                  style={Design.locationList}
                  primaryText="Jl. Bypass Ngurah Rai gg. Mina Utama No. 1"
                  secondaryText="Suwung 80223, Bali​"
                />
              </ListItem>
              <Divider/>
            </List>
            </div>
          );
    }
  }

  render() {
    return(
      <div>
        {this.getOfficeAddress(this.props.employee.location)}
      </div>
    );
  }
}

export default LocationTab;
