import React from 'react';
import update from 'react-addons-update';

import { DropDownMenu, MenuItem } from "material-ui";
import SelectField from 'material-ui/SelectField';

import Design from '../data/Design';

let gradesSE = ["SE-JP","SE-PG", "SE-AP","SE-AN"];
let gradesCON = ["CON-JC","CON-CON", "CON-SC","CON-LC"];
let gradesMJF = ["MJF-AAM","MJF-AM", "MJF-PM","MJF-SM","MJF-GM","MJF-VP","MJF-Chairman"];
let gradesSQ = ["SQ-JT","SQ-TS", "SQ-ST","SQ-TA"];

export default class GradeDialog extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            grade: '',
        };
    }

    _onProvinceSelected(e, index, value) {
        e.preventDefault();
        this.setState({grade: value});
        this.handleChangeSelectValue(e,index,value,'grade');
        console.log(this.props.employee);
    }

    handleChangeSelectValue(event, index, value, type) {
        console.log(type);
          var nextState = update(this.props, {
               employee: {[type]: {$set: value}}
          });
          if(this.props.dialogMode){
            this.props.setNewEmployee(nextState.employee);
          }else{
            this.props.setCurrentEmployee(nextState.employee);
          }

          console.log(nextState.employee);
    }

    _createGradeMenuItems(jobFamily) {
        let menuItems = [];
        if(jobFamily === 'SE'){
          for (let grade of gradesSE) {
              let itemIndex = gradesSE.indexOf(grade);
              let item = (
                  <MenuItem
                      value={grade}
                      key={`key-${grade}`}
                      primaryText={grade} />
              );
              menuItems.push(item);
          }
        }
        else if(jobFamily === 'SQ'){
          for (let grade of gradesSQ) {
              let itemIndex = gradesSQ.indexOf(grade);
              let item = (
                  <MenuItem
                      value={grade}
                      key={`key-${grade}`}
                      primaryText={grade} />
              );
              menuItems.push(item);
          }
        }
        else if(jobFamily === 'CON'){
          for (let grade of gradesCON) {
              let itemIndex = gradesCON.indexOf(grade);
              let item = (
                  <MenuItem
                      value={grade}
                      key={`key-${grade}`}
                      primaryText={grade} />
              );
              menuItems.push(item);
          }
        }else{
            for (let grade of gradesMJF) {
                let itemIndex = gradesMJF.indexOf(grade);
                let item = (
                    <MenuItem
                        value={grade}
                        key={`key-${grade}`}
                        primaryText={grade} />
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
                   disabled={this.props.disabled}
                   onChange={this._onProvinceSelected.bind(this)}>
                   { this._createGradeMenuItems(this.props.employee.jobFamily) }
               </SelectField>
         );
    }
}
