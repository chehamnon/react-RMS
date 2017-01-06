import React from 'react';
import update from 'react-addons-update';

import { DropDownMenu, MenuItem } from "material-ui";
import SelectField from 'material-ui/SelectField';

import Design from '../data/Design';

let provinces = [
  {
    key: 'SE',
    desc: 'Software Engineering'
  },
  {
    key: 'SQ',
    desc: 'Software Quality'
  },
  {
    key: 'CON',
    desc: 'Consultant'
  },
  {
    key: 'MJF',
    desc: 'Manager'
  },
];

export default class JobFamilyDropDown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            province: provinces[0],
        };
    }

    _onProvinceSelected(e, index, value) {
        e.preventDefault();
        this.setState({province: provinces[index]});
        this.handleChangeSelectValue(e,index,value,'jobFamily');
    }

    handleChangeSelectValue(event, index, value, type) {
          var nextState = update(this.props, {
               employee: {[type]: {$set: value}}
          });
          this.props.setNewEmployee(nextState.employee);
    }

    _createProvinceMenuItems() {
        let menuItems = [];
        for (let province of provinces) {
            // let itemIndex = provinces.indexOf(province);
            let item = (
                <MenuItem
                    value={province.key}
                    key={province.key}
                    primaryText={province.desc} />
            );
            menuItems.push(item);
        }

        return menuItems;
    }

    getIndexProvince(jobFamily){
      let indexProvince = 0;
      for (let province of provinces) {
        if(province.key === jobFamily){
          indexProvince = provinces.indexOf(province);
        }
      }
      return indexProvince;
    }

    render() {
         return (
               <SelectField
                   value={this.state.province.key}
                   style={Design.inputText}
                   floatingLabelText="Job Family"
                   floatingLabelStyle={Design.floatingText}
                   onChange={this._onProvinceSelected.bind(this)}>
                   { this._createProvinceMenuItems() }
               </SelectField>
         );
    }
}
