import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import update from 'react-addons-update';
import $ from 'jquery';

import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import {indigo400, white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Design from '../data/Design';
import lookups from '../data/lookups';
import GradeDialog from '../component/GradeDialog';
import DevStageDropDown from '../component/DevStageDropDown';

class GradeTab extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      disabled : true,
      dialogMode : false,
    };
  }

  setGrade(employee) {
    let setgrade = '';
    for (let lookup of lookups) {
        if((lookup.data_type === 'GRADE')&&(lookup.assoc_val_1 === employee.jobFamily)){
          if(lookup.ds.indexOf(employee.devstage) > -1){
            setgrade = lookup.data_code;
            console.log("GRADE"+setgrade);

          }
        }
    }
    return setgrade;
  }

  handleChangeSelectValue(event, index, value, type) {
        var newgrade = this.setGrade(this.props.employee);
        var nextState = update(this.props, {
             employee: {[type]: {$set: value}, grade: {$set: newgrade}}
        });
        this.props.setCurrentEmployee(nextState.employee);
  }

  handleChangeDateValue(event, date, type) {
    var nextState = update(this.props, {
         employee: {[type]: {$set: date}}
    });
    this.props.setCurrentEmployee(nextState.employee);
  }

  editClick() {
    this.setState({disabled: !this.state.disabled} );
  }

  cancelClick() {
    this.setState({disabled: !this.state.disabled} );
  }

  saveClick() {
        var index = this.props.employees.map( (employee) => employee.id ).indexOf($("#employeeId").val())
        console.log("-- Update Employee["+index+"] "+ $("#employeeId").val() +" --");
        console.log(this.props.employees);
        var employees = this.props.employees;
        employees[index] = this.props.employee;
        this.props.setEmployees(employees);
        this.setState({
            disabled: true
        })
          console.log("zafter");
            console.log(this.props.employees);
  }

  onDrop(acceptedFiles) {
    this.setState({
      files: acceptedFiles
    });
  }

  render() {

    return(
      <div>
        <div>
          <div style={Design.firstColumn}>
            <DevStageDropDown dialogMode={this.state.dialogMode} disabled={this.state.disabled} employee={this.props.employee} handleChangeSelectValue={this.handleChangeSelectValue.bind(this)} />
            <br />
            <DatePicker textFieldStyle={Design.rightInputText}
              onChange={(event, date) => this.handleChangeDateValue(event, date, 'startDate')}
              floatingLabelText="Start Date"
              floatingLabelFixed={true}
              floatingLabelStyle={Design.floatingText}
              hintText="Start Date"
              container="inline"
              value={this.props.employee.startDate}
              disabled={this.state.disabled}/>
          </div>
          <div style={Design.secondColumn}>
              <GradeDialog dialogMode={this.state.dialogMode} employee={this.props.employee} />
          </div>
        </div>
        <div>
          <Toolbar style={Design.toolbar}>
            <ToolbarGroup />
            <ToolbarGroup>
                <RaisedButton label="Edit" secondary={true} onClick={this.editClick.bind(this)} style={this.state.disabled? Design.show : Design.hidden}/>
                <RaisedButton label="Cancel" secondary={true} onClick={this.cancelClick.bind(this)} style={this.state.disabled? Design.hidden : Design.show}/>
                <RaisedButton label="Save" secondary={true} onClick={this.saveClick.bind(this)} style={this.state.disabled? Design.hidden : Design.show}/>
            </ToolbarGroup>
          </Toolbar>
        </div>

      </div>
    );
  }
}

export default GradeTab;
