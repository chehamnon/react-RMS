import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import update from 'react-addons-update';
import $ from 'jquery';

import Avatar from 'material-ui/Avatar';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import {indigo400, white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Design from '../data/Design';
import GradeDialog from '../component/GradeDialog';

class EmployeeTab extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      disabled : true,
      files: [],
      isRequired: '',
      deleteMode: false,
    };
  }

  handleChangeValue(event, type) {
    var nextState = update(this.props, {
         employee: {[type]: {$set: event.target.value}}
    });
    this.props.setCurrentEmployee(nextState.employee);
  }

  handleChangeSelectValue(event, index, value, type) {
        var nextState = update(this.props, {
             employee: {[type]: {$set: value}}
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

  deleteClick() {
    this.setState({
    deleteMode: true,
    disabled: true,
    });
  }

  deleteEmployee(){
      var index = this.props.employees.map( (employee) => employee.id ).indexOf($("#employeeId").val())
      //console.log("-- Delete Employee["+index+"] "+ $("#employeeId").val() +" --");
      var employees = this.props.employees
      employees.splice( index, 1 );
      if (employees.length > 0){
          this.props.setCurrentEmployee(employees[0]);
      }
      this.closeDelete();
  }

  closeDelete() {
      this.setState({
          deleteMode: false,
      });
  }


  cancelClick() {
    this.setState({disabled: !this.state.disabled} );
  }

  saveClick() {
    var isValid = true;
    if(this.props.employee.firstName===''|| this.props.employee.lasttName==='' || this.props.employee.phone==='' || this.props.employee.email===''){
      isValid = false;
    }

    if(isValid === false){
      this.setState({
        isRequired: 'This field is required',
      });
    } else {
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
  }

  onDrop(acceptedFiles) {
    this.setState({
      files: acceptedFiles
    });
  }

  render() {
    const actionsDeleteDialog = [
      <RaisedButton
          label="Yes"
          secondary={true}
          keyboardFocused={true}
          onTouchTap={this.deleteEmployee.bind(this)}
      />,
      <RaisedButton
          label="No"
          secondary={true}
          onTouchTap={this.closeDelete.bind(this)}
      />
    ];

    return(
      <div>
        <div>
          <div style={Design.firstColumn}>
            <input type="hidden" id="employeeId" value={this.props.employee.id}/>
            <TextField
              value = {this.props.employee.firstName}
              floatingLabelText="First Name"
              floatingLabelStyle={Design.floatingText}
              onChange={event => this.handleChangeValue(event, 'firstName')}
              disabled={this.state.disabled}
              style= {Design.inputText}
              errorText={this.props.employee.firstName=== ''?this.state.isRequired:''}
            />
            <br/>
            <TextField
              hintText="Last Name"
              value = {this.props.employee.lastName}
              floatingLabelStyle={Design.floatingText}
              floatingLabelText="Last Name"
              floatingLabelFixed={true}
              onChange={event => this.handleChangeValue(event, 'lastName')}
              disabled={this.state.disabled}
              style= {Design.inputText}
              errorText={this.props.employee.lastName=== ''?this.state.isRequired:''}
            />
            <br/>
            <SelectField floatingLabelText="Gender"
              floatingLabelStyle={Design.floatingText}
              value={this.props.employee.gender}
              onChange={(event, index, value) => this.handleChangeSelectValue(event, index, value, 'gender')}
              disabled={this.state.disabled}
              style= {Design.inputText}>
              <MenuItem style={Design.menuItemText} value={"Male"} primaryText="Male" />
              <MenuItem style={Design.menuItemText} value={"Female"} primaryText="Female" />
            </SelectField>
            <br/>
              <DatePicker floatingLabelText="Date of Birth"
                onChange={(event, date) => this.handleChangeDateValue(event, date, 'dob')}
                floatingLabelFixed={true}
                floatingLabelStyle={Design.floatingText}
                hintText="Date of Birth"
                container="inline"
                value={this.props.employee.dob}
                style= {Design.inputText}
                disabled={this.state.disabled}/>
              <TextField
                hintText="Nationality"
                value = {this.props.employee.nationality}
                floatingLabelText="Nationality"
                floatingLabelFixed={true}
                floatingLabelStyle={Design.floatingText}
                onChange={event => this.handleChangeValue(event, 'nationality')}
                disabled={this.state.disabled}
                style= {Design.inputText}
              />
            <br/>
              <SelectField floatingLabelText="Marital Status"
                floatingLabelStyle={Design.floatingText}
                value={this.props.employee.maritalStatus}
                onChange={(event, index, value) => this.handleChangeSelectValue(event, index, value, 'maritalStatus')}
                disabled={this.state.disabled}
                style= {Design.inputText}>
                <MenuItem style={Design.menuItemText} value={"Single"} primaryText="Single" />
                <MenuItem style={Design.menuItemText} value={"Married"} primaryText="Married" />
                <MenuItem style={Design.menuItemText} value={"Widow"} primaryText="Widow" />
              </SelectField>
            <br/>
              <TextField
                hintText="Phone Number"
                value = {this.props.employee.phone}
                floatingLabelText="Phone"
                floatingLabelFixed={true}
                floatingLabelStyle={Design.floatingText}
                onChange={event => this.handleChangeValue(event, 'phone')}
                disabled={this.state.disabled}
                style= {Design.inputText}
                errorText={this.props.employee.phone=== ''?this.state.isRequired:''}
              />
          </div>
          <div style={Design.secondColumn}>
            <TextField style={Design.rightInputText}
              hintText="Sub Division"
              value = {this.props.employee.subDivision}
              floatingLabelText="Sub Division"
              floatingLabelFixed={true}
              floatingLabelStyle={Design.floatingText}
              onChange={event => this.handleChangeValue(event, 'subDivision')}
              disabled={this.state.disabled}
            />
            <br/>
            <SelectField style={Design.rightInputText}
              floatingLabelText="Status"
              floatingLabelStyle={Design.floatingText}
              value={this.props.employee.status}
              onChange={(event, index, value) => this.handleChangeSelectValue(event, index, value, 'status')}
              disabled={this.state.disabled}>
              <MenuItem style={Design.menuItemText} value={"Contract"} primaryText="Contract" />
              <MenuItem style={Design.menuItemText} value={"Permanent"} primaryText="Permanent" />
            </SelectField>
            <br/>
              <DatePicker textFieldStyle={Design.rightInputText}
                onChange={(event, date) => this.handleChangeDateValue(event, date, 'suspendDate')}
                floatingLabelText="Suspend Date"
                floatingLabelFixed={true}
                floatingLabelStyle={Design.floatingText}
                hintText="Suspend Date"
                container="inline"
                disabled={this.state.disabled}/>
              <DatePicker textFieldStyle={Design.rightInputText}
                onChange={(event, date) => this.handleChangeDateValue(event, date, 'hiredDate')}
                floatingLabelStyle={Design.floatingText}
                floatingLabelText="Hired Date"
                floatingLabelFixed={true}
                hintText="Hired Date"
                value={this.props.employee.hiredDate}
                container="inline"
                disabled={this.state.disabled}/>
                <GradeDialog employee={this.props.employee}/>
              <br/>
                <SelectField style={Design.rightInputText}
                  floatingLabelText="Division"
                  floatingLabelStyle={Design.floatingText}
                  value={this.props.employee.division}
                  onChange={(event, index, value) => this.handleChangeSelectValue(event, index, value, 'division')}
                  disabled={this.state.disabled}>
                  <MenuItem style={Design.menuItemText} value={"CDC Asterx"} primaryText="CDC Asterx" />
                  <MenuItem style={Design.menuItemText} value={"SWD Blue"} primaryText="SWD Blue" />
                  <MenuItem style={Design.menuItemText} value={"SWD Red Infomedia"} primaryText="SWD Red Infomedia" />
                  <MenuItem style={Design.menuItemText} value={"SWD Green"} primaryText="SWD Green" />
                  <MenuItem style={Design.menuItemText} value={"SWD Techone"} primaryText="SWD Techone" />
                  <MenuItem style={Design.menuItemText} value={"CDC Java Bootcamp"} primaryText="CDC Java Bootcamp" />
                </SelectField>
              <br/>
                <TextField style={Design.rightInputText}
                  hintText="Email"
                  value = {this.props.employee.email}
                  floatingLabelText="Email"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  onChange={event => this.handleChangeValue(event, 'email')}
                  disabled={this.state.disabled}
                  errorText={this.props.employee.email=== ''?this.state.isRequired:''}
                />
          </div>
          <div style={Design.thirdColumn}>
              {!this.state.disabled == true ? <div>
                <Dropzone onDrop={this.onDrop.bind(this)}>
                  <div>Drop or Click here to edit photo</div>
                </Dropzone>
              </div> : null}
              {this.state.files.length > 0 ? <div>
              <div>{this.state.files.map((file) => <Avatar src={file.preview} size={150} key={file.preview}/> )}</div>
              </div> : <div><Avatar src={this.props.employee.img} size={150} key={this.props.employee.img}/></div>}
          </div>
        </div>
        <div>
          <Toolbar style={Design.toolbar}>
            <ToolbarGroup />
            <ToolbarGroup>
                <RaisedButton label="Edit" secondary={true} onClick={this.editClick.bind(this)} style={this.state.disabled? Design.show : Design.hidden}/>
                <RaisedButton label="Delete" secondary={true} onClick={this.deleteClick.bind(this)} style={this.state.disabled? Design.show : Design.hidden}/>
                <RaisedButton label="Cancel" secondary={true} onClick={this.cancelClick.bind(this)} style={this.state.disabled? Design.hidden : Design.show}/>
                <RaisedButton label="Save" secondary={true} onClick={this.saveClick.bind(this)} style={this.state.disabled? Design.hidden : Design.show}/>
            </ToolbarGroup>
          </Toolbar>
        </div>
        <Dialog
           title="Delete Employee"
           open={this.state.deleteMode}
           actions={actionsDeleteDialog}
           onRequestClose={this.closeDelete.bind(this)}
           >
           <div>
               <span>Are you sure want to delete this employee? Click Yes button to continue</span>
           </div>
        </Dialog>
      </div>
    );
  }
}

export default EmployeeTab;
