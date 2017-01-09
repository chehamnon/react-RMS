import React from 'react';
import update from 'react-addons-update';

import { DropDownMenu, MenuItem } from "material-ui";
import SelectField from 'material-ui/SelectField';

import Design from '../data/Design';
import lookups from '../data/lookups';

export default class GradeDialog extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    handleChangeSelectValue(event, index, value, type) {
          var nextState = update(this.props, {
               employee: {[type]: {$set: value}}
          });
          if(this.props.dialogMode){
            this.props.setNewEmployee(nextState.employee);
          }else{
            this.props.setCurrentEmployee(nextState.employee);
          }

          // console.log(nextState.employee);
    }

    _createGradeMenuItems() {
        let menuItems = [];
        for (let lookup of lookups) {
          if((lookup.data_type === 'GRADE')&&(lookup.assoc_val_1 === this.props.employee.jobFamily)){
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
                   value={this.props.employee.grade}
                   style={this.props.dialogMode? Design.inputText : Design.rightInputText}
                   floatingLabelText="Grade"
                   floatingLabelStyle={Design.floatingText}
                   disabled={true}>
                   { this._createGradeMenuItems() }
               </SelectField>
         );
    }
}
