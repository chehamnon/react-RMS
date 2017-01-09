/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import update from 'react-addons-update';
import Dropzone from 'react-dropzone';

import Avatar from 'material-ui/Avatar';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionRestore from 'material-ui/svg-icons/action/restore';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ImagePhotoCamera from 'material-ui/svg-icons/image/photo-camera';
import MenuItem from 'material-ui/MenuItem';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import NotificationWc from 'material-ui/svg-icons/notification/wc';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import SocialSchool from 'material-ui/svg-icons/social/school';
import SocialPerson from 'material-ui/svg-icons/social/person';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import {pink500, indigo500, indigo100, indigo400, white} from 'material-ui/styles/colors';
import {Step, Stepper, StepButton} from 'material-ui/Stepper';

import Design from '../data/Design';
import lookups from '../data/lookups';
import DevStageDropDown from '../component/DevStageDropDown';
import JobFamilyDropDown from '../component/JobFamilyDropDown';

const styles = {

  leftColumn: {
    float: 'left',
    paddingTop: 0,
    paddingLeft: 30,
  },

  rightColumn: {
    float: 'left',
    paddingTop: 0,
    position: 'relative',
    paddingLeft: 30,
  },

  thirdColumn: {
    float: 'left',
    paddingTop: 0,
    position: 'relative',
    paddingLeft: 30,
  },

  largeIcon: {
    width: 60,
    height: 60,
  },

  large: {
    width: 60,
    height: 60,
    paddingTop:0,
    float: 'right',
  },

  dropzoneStyle: {
    width: 100,
    height: 100,
  },

  avatarStyles: {
    float: 'left',
    marginTop: 10,
  },

  listStyles: {
    float: 'left',
    paddingTop: 0,
    paddingLeft: 0,
  },

  errorStyle: {
    color: pink500,
  },

  dialogStyles: {
    minHeight: 500,
  },

}

class EmployeeDialog extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      files: [],
      stepIndex: 0,
      isRequired: '',
      employee: {
         id: '',
         firstName: '',
         lastName: '',
         gender: 'Male',
         dob: new Object,
         nationality: '',
         maritalStatus: 'Single',
         phone: '',
         subDivision: '',
         status: 'Contract',
         suspendDate: new Object,
         hireDate: new Object,
         grade: 'SE-JP',
         devstage: 'DS1',
         startDate: new Object,
         division: 'CDC Asterx',
         email: '',
         location: 'BALI',
         jobFamily: 'SE',
         img: require("../images/person-flat.png"),
       }
    };
  }

  onDrop(acceptedFiles) {
    this.setState({files: acceptedFiles});
    console.log(acceptedFiles[0].name);
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
      files: [],
      stepIndex: 0,
      isRequired: '',
      employee: {
         id: '',
         firstName: '',
         lastName: '',
         gender: 'Male',
         dob: new Object,
         nationality: '',
         maritalStatus: 'Single',
         phone: '',
         subDivision: '',
         status: 'Contract',
         suspendDate: new Object,
         hireDate: new Object,
         grade: 'SE-JP',
         devstage: 'DS1',
         startDate: new Object,
         division: 'CDC Asterx',
         email: '',
         jobFamily: '',
         location: 'BALI',
         img: this.state.files.length > 0 ? this.state.employee.img : require("../images/person-flat.png"),
       }
    });
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

  setNewEmployee(newEmployee) {
     this.setState({
         employee: newEmployee
     })
   }

  handleBack(){
    this.setState({
      stepIndex: this.state.stepIndex - 1,
    });
  }
  handleNext(){
    var isValid = true;
    console.log("Next");
    console.log(this.state.employee);
    if(this.state.employee.firstName===''|| this.state.employee.lasttName==='' || this.state.employee.phone==='' || this.state.employee.email===''){
      isValid = false;
    }

    if(isValid === false){
      this.setState({
        isRequired: 'This field is required',
      });
    }else{
      this.setState({
        stepIndex: this.state.stepIndex + 1,
      });
    }
  }

  handleCreate(){
    let generatedId = this.state.employee.firstName +" "+ this.state.employee.lastName;
    let image= this.state.files.length > 0 ? this.state.files[0].preview : this.state.employee.img;
    generatedId= generatedId.replace(/ /g, '_');
    var setgrade= this.setGrade(this.state.employee);
    var newEmployee = update(this.state, {
     employee: {id: {$set: generatedId}, img: {$set: image}, grade: {$set: setgrade}}
    });
    var employeesData = this.props.employees
    console.log(newEmployee);
    employeesData.push(newEmployee.employee)
    this.props.setEmployees(employeesData);
    this.handleRequestClose();
   }

  handleChangeDOB(event, date) {
    this.setState({
        dob: date
    });
  }

  handleChangeOffice(event, index, value) {
    this.setState({
        location: value
    });
  }

  handleChangeValue(event, type) {
    //console.log(event.target.value);
    //console.log(type);
    var nextState = update(this.state, {
         employee: {[type]: {$set: event.target.value}}
    });
    this.setState({
      employee: nextState.employee,
    })
    // console.log(this.state);
  }

  handleChangeSelectValue(event, index, value, type) {
        var nextState = update(this.state, {
             employee: {[type]: {$set: value}}
        });
        this.setState({
          employee: nextState.employee,
        })
        console.log(this.state.employee);
  }

  handleChangeDateValue(event, date, type) {
    var nextState = update(this.state, {
         employee: {[type]: {$set: date}}
    });
    this.setState({
      employee: nextState.employee,
    })
  }

  getOfficeAddress(location) {
    switch (location) {
      case "JKT":
        return (
          <div>
            <Avatar icon={<MapsPlace />} backgroundColor={indigo500} style={styles.avatarStyles}/>
            <List style={styles.listStyles}>
              <ListItem style={Design.inputText}
                primaryText="Gedung Wirausaha, 8th Floor"
                secondaryText="Jl. HR. Rasuna Said Kav C5 Jakarta Selatan, 12940"
              />
            </List>
          </div>
        );

      case "YOG":
        return(
          <div>
            <Avatar icon={<MapsPlace />} backgroundColor={indigo500} style={styles.avatarStyles}/>
            <List style={styles.listStyles}>
              <ListItem style={Design.inputText}
                primaryText="Jl. Sidobali No. 2 Muja Muju, Umbulharjo"
                secondaryText="Yogyakarta, 55165"
              />
            </List>
          </div>
        );

        case "BDG":
          return(
            <div>
              <Avatar icon={<MapsPlace />} backgroundColor={indigo500} style={styles.avatarStyles}/>
              <List style={styles.listStyles}>
                <ListItem style={Design.inputText}
                  primaryText="Jl. Prof Surya Sumantri No: 8-D"
                  secondaryText="Bandung, 40164"
                />
              </List>
            </div>
          );
        default:
          return(
            <div>
              <Avatar icon={<MapsPlace />} backgroundColor={indigo500} style={styles.avatarStyles}/>
              <List style={styles.listStyles}>
                <ListItem style={Design.inputText}
                  primaryText="Jl. Bypass Ngurah Rai gg. Mina Utama No. 1"
                  secondaryText="​Suwung 80223, Bali​"
                />
              </List>
            </div>
          );
    }
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
          return (
            <div>
            <div style={styles.leftColumn}>
                <input type="hidden" id="employeeId" value={this.state.employee.id}/>
                <TextField
                  style={Design.inputText}
                  hintText="First Name"
                  floatingLabelText="First Name"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  errorText={this.state.employee.firstName=== ''?this.state.isRequired:''}
                  errorStyle={styles.errorStyle}
                  onChange={event => this.handleChangeValue(event, 'firstName')}
                />
                <br/>
                <TextField
                  style={Design.inputText}
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  errorText={this.state.employee.lastName=== ''?this.state.isRequired:''}
                  errorStyle={styles.errorStyle}
                  onChange={event => this.handleChangeValue(event, 'lastName')}
                />
                <br/>
                <SelectField floatingLabelText="Gender"
                  style={Design.inputText}
                  floatingLabelStyle={Design.floatingText}
                  value={this.state.employee.gender}
                  onChange={(event, index, value) => this.handleChangeSelectValue(event, index, value, 'gender')}>
                  <MenuItem style={Design.menuItemText} value={"Male"} primaryText="Male" />
                  <MenuItem style={Design.menuItemText} value={"Female"} primaryText="Female" />
                </SelectField>
                <br/>
                  <DatePicker
                    textFieldStyle={Design.inputText}
                    floatingLabelText="Date of Birth"
                    floatingLabelFixed={true}
                    floatingLabelStyle={Design.floatingText}
                    hintText="Date of Birth"
                    container="inline"
                    onChange={(event, date) => this.handleChangeDateValue(event, date, 'dob')}/>
                  <TextField
                    style={Design.inputText}
                    hintText="Nationality"
                    floatingLabelText="Nationality"
                    floatingLabelFixed={true}
                    floatingLabelStyle={Design.floatingText}
                    onChange={event => this.handleChangeValue(event, 'nationality')}
                  />
                <br/>
                  <SelectField floatingLabelText="Marital Status"
                    style={Design.inputText}
                    floatingLabelStyle={Design.floatingText}
                    value={this.state.employee.maritalStatus}
                    onChange={(event, index, value) => this.handleChangeSelectValue(event, index, value, 'maritalStatus')}>
                    <MenuItem style={Design.menuItemText} value={"Single"} primaryText="Single" />
                    <MenuItem style={Design.menuItemText} value={"Married"} primaryText="Married" />
                    <MenuItem style={Design.menuItemText} value={"Widow"} primaryText="Widow" />
                  </SelectField>
                <br/>
                  <TextField
                    style={Design.inputText}
                    hintText="Phone Number"
                    floatingLabelText="Phone"
                    floatingLabelFixed={true}
                    floatingLabelStyle={Design.floatingText}
                    errorText={this.state.employee.phone=== ''?this.state.isRequired:''}
                    errorStyle={styles.errorStyle}
                    onChange={event => this.handleChangeValue(event, 'phone')}
                  />
            </div>
            <div style={styles.rightColumn}>
                <TextField style={Design.inputText}
                  hintText="Sub Division"
                  floatingLabelText="Sub Division"
                  floatingLabelFixed={true}
                  floatingLabelStyle={Design.floatingText}
                  onChange={event => this.handleChangeValue(event, 'subDivision')}
                />
                <br/>
                <SelectField style={Design.inputText}
                  floatingLabelText="Status"
                  floatingLabelStyle={Design.floatingText}
                  value={this.state.employee.status}
                  onChange={(event, index, value) => this.handleChangeSelectValue(event, index, value, 'status')}>
                  <MenuItem style={Design.menuItemText} value={"Contract"} primaryText="Contract" />
                  <MenuItem style={Design.menuItemText} value={"Permanent"} primaryText="Permanent" />
                </SelectField>
                <br/>
                  <DatePicker textFieldStyle={Design.inputText} floatingLabelText="Suspend Date" floatingLabelStyle={Design.floatingText} floatingLabelFixed={true} hintText="Suspend Date" container="inline" onChange={(event, date) => this.handleChangeDateValue(event, date, 'suspendDate')} />
                  <DatePicker textFieldStyle={Design.inputText} floatingLabelText="Hired Date" floatingLabelStyle={Design.floatingText} floatingLabelFixed={true} hintText="Hired Date" container="inline" onChange={(event, date) => this.handleChangeDateValue(event, date, 'hiredDate')}/>
                  <JobFamilyDropDown employees={this.state.employees} employee={this.state.employee} handleChangeSelectValue={this.handleChangeSelectValue.bind(this)}/>
                  <br/>
                    <SelectField style={Design.inputText} floatingLabelText="Division" floatingLabelStyle={Design.floatingText} value={this.state.employee.division} onChange={(event, index, value) => this.handleChangeSelectValue(event, index, value, 'division')}>
                      <MenuItem style={Design.menuItemText} value={"CDC Asterx"} primaryText="CDC Asterx" />
                      <MenuItem style={Design.menuItemText} value={"SWD Blue"} primaryText="SWD Blue" />
                      <MenuItem style={Design.menuItemText} value={"SWD Red Infomedia"} primaryText="SWD Red Infomedia" />
                      <MenuItem style={Design.menuItemText} value={"SWD Green"} primaryText="SWD Green" />
                      <MenuItem style={Design.menuItemText} value={"SWD Techone"} primaryText="SWD Techone" />
                    </SelectField>
                  <br/>
                    <TextField style={Design.inputText}
                      hintText="Email"
                      floatingLabelText="Email"
                      floatingLabelFixed={true}
                      floatingLabelStyle={Design.floatingText}
                      onChange={event => this.handleChangeValue(event, 'email')}
                      errorText={this.state.employee.email=== ''?this.state.isRequired:''}
                      errorStyle={styles.errorStyle}
                    />
            </div>
            <div style={styles.thirdColumn}>
                {!this.state.disabled == true ? <div>
                  <Dropzone style={styles.dropzoneStyle} onDrop={this.onDrop.bind(this)}>
                    <ImagePhotoCamera/>
                    <div>Add Photo</div>
                  </Dropzone>
                </div> : null}
                {this.state.files.length > 0 ? <div>
                <div>{this.state.files.map((file) => <Avatar src={file.preview} size={60} key={file.preview}/> )}</div>
                </div> : null}
            </div>
          </div>);
          case 1:
              return 'History';
          case 2:
              return(
                <div style={styles.leftColumn}>
                  <DevStageDropDown dialogMode={true} employees={this.state.employees} employee={this.state.employee} handleChangeSelectValue={this.handleChangeSelectValue.bind(this)}/>
                  <br/>
                    <DatePicker
                      textFieldStyle={Design.inputText}
                      floatingLabelText="Start Date"
                      floatingLabelFixed={true}
                      floatingLabelStyle={Design.floatingText}
                      hintText="Start Date"
                      container="inline"
                      onChange={(event, date) => this.handleChangeDateValue(event, date, 'startDate')}/>
                </div>
              );
          case 3:
              return 'Family member';
          case 4:
              return 'Address';
          default:
          return (
            <div style={styles.leftColumn}>
                  <SelectField
                      style={Design.inputText}
                      value={this.state.employee.location}
                      floatingLabelText="Location"
                      floatingLabelStyle={Design.floatingText}
                      onChange={(event, index, value) => this.handleChangeSelectValue(event, index, value, 'location')}>
                      <MenuItem style={Design.menuItemText} value={"JKT"} primaryText="Jakarta" />
                      <MenuItem style={Design.menuItemText} value={"YOG"} primaryText="Yogyakarta" />
                      <MenuItem style={Design.menuItemText} value={"BDG"} primaryText="Bandung" />
                      <MenuItem style={Design.menuItemText} value={"BALI"} primaryText="Bali" />
                  </SelectField>
              {this.getOfficeAddress(this.state.employee.location)}
            </div>
            );
          }
        }

  render() {
    const standardActions = [
      <FlatButton
          label="Back"
          primary={true}
          disabled={this.state.stepIndex === 0? true : false}
          onTouchTap={this.handleBack.bind(this)}
      />,
      <RaisedButton
        label={this.state.stepIndex === 5 ? 'Finish' : 'Next'}
        secondary={true}
        onTouchTap={this.state.stepIndex  === 5 ? this.handleCreate.bind(this) : this.handleNext.bind(this)}
      />
    ];

    return (
      <div>
          <IconButton iconStyle={styles.largeIcon} style={styles.large} onTouchTap={this.handleTouchTap}>
              <ContentAddCircle color={pink500}/>
          </IconButton>
          <Dialog
            open={this.state.open}
            title="Create Employee"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
            autoScrollBodyContent={true}
          >
          <div>
            <Stepper key="Stepper" linear={false} activeStep={this.state.stepIndex}>
              <Step>
                  <StepButton icon={<SocialPerson color={indigo400}/>} onClick={() => this.setState({stepIndex: 0})} />
              </Step>
              <Step>
                  <StepButton icon={<ActionRestore color={indigo400}/>} onClick={() => this.setState({stepIndex: 1})} />
              </Step>
              <Step>
                  <StepButton icon={<SocialSchool color={indigo400}/>} onClick={() => this.setState({stepIndex: 2})} />
              </Step>
              <Step>
                  <StepButton icon={<NotificationWc color={indigo400}/>} onClick={() => this.setState({stepIndex: 3})} />
              </Step>
              <Step>
                  <StepButton icon={<ActionHome color={indigo400}/>} onClick={() => this.setState({stepIndex: 4})} />
              </Step>
              <Step>
                  <StepButton icon={<MapsPlace color={indigo400}/>} onClick={() => this.setState({stepIndex: 5})} />
              </Step>
            </Stepper>
          </div>
          <div style={styles.dialogStyles}>
            {this.getStepContent(this.state.stepIndex)}
          </div>
          </Dialog>
        </div>
    );
  }
}

export default EmployeeDialog;
