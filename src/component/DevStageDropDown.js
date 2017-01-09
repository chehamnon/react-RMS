import React from 'react';
import update from 'react-addons-update';

import { DropDownMenu, MenuItem } from "material-ui";
import SelectField from 'material-ui/SelectField';

import Design from '../data/Design';
import lookups from '../data/lookups';

export default class DevStageDropDown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            ds: lookups[23].data_code,
        };
    }

    _onDSSelected(e, index, value) {
        e.preventDefault();
        this.setState({ds: value});
        this.props.handleChangeSelectValue(e,index,value,'devstage');
    }

    _createDSMenuItems() {
        let menuItems = [];
          for (let lookup of lookups) {
            if(lookup.data_type === 'DS'){
              let item = (
                  <MenuItem
                      value={lookup.data_code}
                      key={lookup.data_code}
                      primaryText={lookup.data_code} />
              );
              menuItems.push(item);
            }
          }
        return menuItems;
    }

    render() {
         return (
              <SelectField
                  value={this.props.dialogMode?this.state.ds : this.props.employee.devstage}
                  style={this.props.dialogMode? Design.inputText : Design.rightInputText}
                  floatingLabelText="DS"
                  floatingLabelStyle={Design.floatingText}
                  disabled={this.props.disabled}
                  onChange={this._onDSSelected.bind(this)}>
                  { this._createDSMenuItems() }
              </SelectField>
         );
    }
}
