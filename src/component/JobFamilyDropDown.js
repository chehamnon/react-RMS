import React from 'react';
import update from 'react-addons-update';

import { DropDownMenu, MenuItem } from "material-ui";
import SelectField from 'material-ui/SelectField';

import Design from '../data/Design';

let lookups = [
  {
    data_type: 'JF',
    data_code: 'SE',
    desc: 'Software Engineering'
  },
  {
    data_type: 'JF',
    data_code: 'SQ',
    desc: 'Software Quality'
  },
  {
    data_type: 'JF',
    data_code: 'CON',
    desc: 'Consultant'
  },
  {
    data_type: 'JF',
    data_code: 'MJF',
    desc: 'Manager'
  },
  {
    data_type: 'JF',
    data_code: 'DIR',
    desc: 'Director'
  },
];

export default class JobFamilyDropDown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            province: lookups[0],
        };
    }

    _onProvinceSelected(e, index, value) {
        e.preventDefault();
        this.setState({province: lookups[index]});
        this.props.handleChangeSelectValue(e,index,value,'jobFamily');
    }

    handleChangeSelectValue(event, index, value, type) {
          var nextState = update(this.props, {
               employee: {[type]: {$set: value}}
          });
          this.props.setNewEmployee(nextState.employee);
    }

    _createProvinceMenuItems() {
        let menuItems = [];
        for (let province of lookups) {
            // let itemIndex = lookups.indexOf(province);
            if(province.data_type === 'JF'){
              let item = (
                  <MenuItem
                      value={province.data_code}
                      key={province.data_code}
                      primaryText={province.desc} />
              );
              menuItems.push(item);
            }
        }

        return menuItems;
    }

    render() {
         return (
               <SelectField
                   value={this.state.province.data_code}
                   style={Design.inputText}
                   floatingLabelText="Job Family"
                   floatingLabelStyle={Design.floatingText}
                   onChange={this._onProvinceSelected.bind(this)}>
                   { this._createProvinceMenuItems() }
               </SelectField>
         );
    }
}
