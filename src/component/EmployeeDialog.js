/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import DatePicker from 'material-ui/DatePicker';
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle';
import {List, ListItem} from 'material-ui/List';
import {pink500, indigo500, indigo100, indigo400, white} from 'material-ui/styles/colors';

import {Step, Stepper, StepButton} from 'material-ui/Stepper';
import NotificationWc from 'material-ui/svg-icons/notification/wc';
import SocialSchool from 'material-ui/svg-icons/social/school';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ActionRestore from 'material-ui/svg-icons/action/restore';
import ActionHome from 'material-ui/svg-icons/action/home';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import ImagePhotoCamera from 'material-ui/svg-icons/image/photo-camera';

import Dropzone from 'react-dropzone';

const styles = {
  text: {
    paddingLeft: 0,
    fontSize: 14,
  },

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

  floatingLabelStyle: {
    color: indigo500,
    fontSize: 18,
  },

  dialogStyles: {
    minHeight: 500,
  },

  itemStyles: {
    fontSize: 12,
  },
}

class EmployeeDialog extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      value:"Male",
      status:"Contract",
      marital: "Single",
      grade: "SE-JP",
      division:"CDC Asterx",
      stepIndex: 0,
      location:"BALI",
      files: [],
      img: require("../images/person-flat.png"),
      isRequired: '',
      firstName: '',
      lastName: '',
      phone: '',
      dob: new Object,
      nationality: '',
      suspendDate: new Object,
      hireDate: new Object,
      email: '',
      subDivision: '',
    };
    this.handleAddEmployee = this.props.handleAddEmployee.bind(this);
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
      stepIndex: 0,
      open: false,
      firstName: '',
      lastName: '',
      gender: '',
      dob: new Object,
      nationality: '',
      maritalStatus: '',
      phone: '',
      subDivision: '',
      status: '',
      suspendDate: new Object,
      hireDate: new Object,
      grade: '',
      division: '',
      email: '',
      location: '',
      img: '',
    });
  }

  handleBack(){
    this.setState({
      stepIndex: this.state.stepIndex - 1,
    });
  }
  handleNext(){
    var isValid = true;

    if(this.state.firstName===''|| this.state.lasttName==='' || this.state.phone===''){
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
    var id = this.state.firstName +" "+ this.state.lastName;
    var newEmployee = {
         id: id.replace(/ /g, '_'),
         firstName: this.state.firstName,
         lastName: this.state.lastName,
         gender: this.state.gender,
         dob: this.state.dob,
         nationality: this.state.nationality,
         maritalStatus: this.state.maritalStatus,
         phone: this.state.phone,
         subDivision: this.state.subDivision,
         status: this.state.status,
         suspendDate: this.state.suspendDate,
         hireDate: this.state.hireDate,
         grade: this.state.grade,
         division: this.state.division,
         email: this.state.email,
         location: this.state.location,
         img: this.state.files.length > 0 ? this.state.files[0].preview : this.state.img
    }
    this.handleAddEmployee(newEmployee);
    this.handleRequestClose();
   }

  handleChange = (event, index, value) => this.setState({value});
  handleChangeStatus = (event, index, status) => this.setState({status});
  handleChangeMarital = (event, index, marital) => this.setState({marital});
  handleChangeGrade = (event, index, grade) => this.setState({grade});
  handleChangeDivision = (event, index, division) => this.setState({division});
  handleChangeFirstName(event) {
    this.setState({
        firstName: event.target.value,
    });
  }

  handleChangeLastName(event) {
      this.setState({
          lastName: event.target.value
      });
  }
  handleChangeDOB(event, date) {
    this.setState({
        dob: date
    });
  }
  handleChangeEmail(event) {
    this.setState({
        email: event.target.value
    });
  }

  handleChangeSubDivision(event) {
    this.setState({
        subDivision: event.target.value
    });
  }

  handleChangePhone(event) {
    this.setState({
        phone: event.target.value
    });
  }

  handleChangeNationality(event) {
    this.setState({
        nationality: event.target.value
    });
  }

  handleChangeOffice(event, index, value) {
    this.setState({
        location: value
    });
  }

  getOfficeAddress(location) {
    switch (location) {
      case "JKT":
        return (
          <div>
            <Avatar icon={<MapsPlace />} backgroundColor={indigo500} style={styles.avatarStyles}/>
            <List style={styles.listStyles}>
              <ListItem style={styles.text}
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
              <ListItem style={styles.text}
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
                <ListItem style={styles.text}
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
                <ListItem style={styles.text}
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
                <TextField
                  style={styles.text}
                  hintText="First Name"
                  floatingLabelText="First Name"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  errorText={this.state.firstName=== ''?this.state.isRequired:''}
                  errorStyle={styles.errorStyle}
                  onChange={this.handleChangeFirstName.bind(this)}
                />
                <br/>
                <TextField
                  style={styles.text}
                  hintText="Last Name"
                  floatingLabelText="Last Name"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  errorText={this.state.lastName=== ''?this.state.isRequired:''}
                  errorStyle={styles.errorStyle}
                  onChange={this.handleChangeLastName.bind(this)}
                />
                <br/>
                <SelectField floatingLabelText="Gender"
                  style={styles.text}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  value={this.state.value}
                  onChange={this.handleChange}>
                  <MenuItem style={styles.itemStyles} value={"Male"} primaryText="Male" />
                  <MenuItem style={styles.itemStyles} value={"Female"} primaryText="Female" />
                </SelectField>
                <br/>
                  <DatePicker
                    textFieldStyle={styles.text}
                    floatingLabelText="Date of Birth"
                    floatingLabelFixed={true}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    hintText="Date of Birth"
                    container="inline"
                    onChange={this.handleChangeDOB.bind(this)}/>
                  <TextField
                    style={styles.text}
                    hintText="Nationality"
                    floatingLabelText="Nationality"
                    floatingLabelFixed={true}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    onChange={this.handleChangeNationality.bind(this)}
                  />
                <br/>
                  <SelectField floatingLabelText="Marital Status"
                    style={styles.text}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    value={this.state.marital}
                    onChange={this.handleChangeMarital}>
                    <MenuItem style={styles.itemStyles} value={"Single"} primaryText="Single" />
                    <MenuItem style={styles.itemStyles} value={"Married"} primaryText="Married" />
                    <MenuItem style={styles.itemStyles} value={"Widow"} primaryText="Widow" />
                  </SelectField>
                <br/>
                  <TextField
                    style={styles.text}
                    hintText="Phone Number"
                    floatingLabelText="Phone"
                    floatingLabelFixed={true}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    errorText={this.state.phone=== ''?this.state.isRequired:''}
                    errorStyle={styles.errorStyle}
                    onChange={this.handleChangePhone.bind(this)}
                  />
            </div>
            <div style={styles.rightColumn}>
                <TextField style={styles.text}
                  hintText="Sub Division"
                  floatingLabelText="Sub Division"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  onChange={this.handleChangeSubDivision.bind(this)}
                />
                <br/>
                <SelectField style={styles.text}
                  floatingLabelText="Status"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  value={this.state.status}
                  onChange={this.handleChangeStatus}>
                  <MenuItem style={styles.itemStyles} value={"Contract"} primaryText="Contract" />
                  <MenuItem style={styles.itemStyles} value={"Permanent"} primaryText="Permanent" />
                </SelectField>
                <br/>
                  <DatePicker textFieldStyle={styles.text} floatingLabelText="Suspend Date" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFixed={true} hintText="Suspend Date" container="inline" />
                  <DatePicker textFieldStyle={styles.text} floatingLabelText="Hired Date" floatingLabelStyle={styles.floatingLabelStyle} floatingLabelFixed={true} hintText="Hired Date" container="inline" />
                  <SelectField style={styles.text} floatingLabelText="Grade" floatingLabelStyle={styles.floatingLabelStyle} value={this.state.grade} onChange={this.handleChangeGrade}>
                    <MenuItem style={styles.itemStyles} value={"SE-JP"} primaryText="SE-JP" />
                    <MenuItem style={styles.itemStyles} value={"SE-PG"} primaryText="SE-PG" />
                    <MenuItem style={styles.itemStyles} value={"SE-AP"} primaryText="SE-AP" />
                    <MenuItem style={styles.itemStyles} value={"SE-AN"} primaryText="SE-AN" />
                  </SelectField>
                  <br/>
                    <SelectField style={styles.text} floatingLabelText="Division" floatingLabelStyle={styles.floatingLabelStyle} value={this.state.division} onChange={this.handleChangeDivision}>
                      <MenuItem style={styles.itemStyles} value={"CDC Asterx"} primaryText="CDC Asterx" />
                      <MenuItem style={styles.itemStyles} value={"SWD Blue"} primaryText="SWD Blue" />
                      <MenuItem style={styles.itemStyles} value={"SWD Red Infomedia"} primaryText="SWD Red Infomedia" />
                      <MenuItem style={styles.itemStyles} value={"SWD Green"} primaryText="SWD Green" />
                      <MenuItem style={styles.itemStyles} value={"SWD Techone"} primaryText="SWD Techone" />
                    </SelectField>
                  <br/>
                    <TextField style={styles.text}
                      hintText="Email"
                      floatingLabelText="Email"
                      floatingLabelFixed={true}
                      floatingLabelStyle={styles.floatingLabelStyle}
                      onChange={this.handleChangeEmail.bind(this)}
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
              return 'Grade';
          case 3:
              return 'Family member';
          case 4:
              return 'Address';
          default:
          return (
            <div style={styles.leftColumn}>
                  <SelectField
                      style={styles.text}
                      value={this.state.location}
                      floatingLabelText="Location"
                      floatingLabelStyle={styles.floatingLabelStyle}
                      onChange={this.handleChangeOffice.bind(this)} >
                      <MenuItem style={styles.itemStyles} value={"JKT"} primaryText="Jakarta" />
                      <MenuItem style={styles.itemStyles} value={"YOG"} primaryText="Yogyakarta" />
                      <MenuItem style={styles.itemStyles} value={"BDG"} primaryText="Bandung" />
                      <MenuItem style={styles.itemStyles} value={"BALI"} primaryText="Bali" />
                  </SelectField>
              {this.getOfficeAddress(this.state.location)}
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
