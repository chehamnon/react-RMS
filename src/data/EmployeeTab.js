import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import {indigo400, white} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Dropzone from 'react-dropzone';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


const styles = {
  text: {
    paddingLeft: 20,
    fontSize: 14,
  },

  firstColumn: {
    float: 'left',
    paddingTop: 0,
    paddingLeft: 100,
  },

  secondColumn: {
    float: 'left',
    paddingTop: 0,
    position: 'relative',
    paddingLeft: 80,
  },

  thirdColumn: {
    float: 'left',
    paddingTop: 0,
    position: 'relative',
    paddingLeft: 80,
  },

  toolbar: {
    backgroundColor: indigo400,
    position: 'relative',
    width: '100%',
  },

  hidden: {
    display: 'none',
  },

  show: {
    display: 'inline-block',
  },

  floatingLabelStyle: {
    fontSize: 18,
  },

  textStyle: {
    fontSize: 14,
  },

  itemStyles:{
    fontSize: 12,
  },
}


const datetime = new Date(1989, 6, 2);

class EmployeeTab extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value:"Male",
      status:"Contract",
      marital:"Single",
      grade:"SE-JP",
      division:"CDC Asterx",
      dob: datetime,
      disabled : true,
      files: [],
    };
  }

  handleChange = (event, index, value) => this.setState({value});
  handleChangeStatus = (event, index, status) => this.setState({status});
  handleChangeMarital = (event, index, marital) => this.setState({marital});
  handleChangeGrade = (event, index, grade) => this.setState({grade});
  handleChangeDivision = (event, index, division) => this.setState({division});

  editClick() {
    this.setState({disabled: !this.state.disabled} );
  }

  cancelClick() {
    this.setState({disabled: !this.state.disabled} );
  }

  saveClick() {
    this.setState({disabled: !this.state.disabled} );
    console.log(this.props.employee.firstName);
  }

  onDrop(acceptedFiles) {
    this.setState({files: acceptedFiles});
  }

  render() {

    return(
        <div>
          <div>
            <div style={styles.firstColumn}>
              <TextField
                hintText="First Name"
                value = {this.props.employee.firstName}
                floatingLabelText="First Name"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.floatingLabelStyle}
                onChange={this.handleChange}
                disabled={this.state.disabled}
                style= {styles.textStyle}
              />
              <br/>
              <TextField
                hintText="Last Name"
                value = {this.props.employee.lastName}
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelText="Last Name"
                floatingLabelFixed={true}
                disabled={this.state.disabled}
                style= {styles.textStyle}
              />
              <br/>
              <SelectField floatingLabelText="Gender"
                floatingLabelStyle={styles.floatingLabelStyle}
                value={this.props.employee.gender}
                onChange={this.handleChange}
                disabled={this.state.disabled}
                style= {styles.textStyle}>
                <MenuItem style={styles.itemStyles} value={"Male"} primaryText="Male" />
                <MenuItem style={styles.itemStyles} value={"Female"} primaryText="Female" />
              </SelectField>
              <br/>
                <DatePicker floatingLabelText="Date of Birth"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  hintText="Date of Birth"
                  container="inline"
                  value={this.props.employee.dob}
                  style= {styles.textStyle}
                  disabled={this.state.disabled}/>
                <TextField
                  hintText="Nationality"
                  value = {this.props.employee.nationality}
                  floatingLabelText="Nationality"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  disabled={this.state.disabled}
                  style= {styles.textStyle}
                />
              <br/>
                <SelectField floatingLabelText="Marital Status"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  value={this.props.employee.maritalStatus}
                  onChange={this.handleChangeMarital}
                  disabled={this.state.disabled}
                  style= {styles.textStyle}>
                  <MenuItem style={styles.itemStyles} value={"Single"} primaryText="Single" />
                  <MenuItem style={styles.itemStyles} value={"Married"} primaryText="Married" />
                  <MenuItem style={styles.itemStyles} value={"Widow"} primaryText="Widow" />
                </SelectField>
              <br/>
                <TextField
                  hintText="Phone Number"
                  value = {this.props.employee.phone}
                  floatingLabelText="Phone"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  disabled={this.state.disabled}
                  style= {styles.textStyle}
                />
            </div>
            <div style={styles.secondColumn}>
              <TextField style={styles.text}
                hintText="Sub Division"
                value = {this.props.employee.subDivision}
                floatingLabelText="Sub Division"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.floatingLabelStyle}
                disabled={this.state.disabled}
              />
              <br/>
              <SelectField style={styles.text}
                floatingLabelText="Status"
                floatingLabelStyle={styles.floatingLabelStyle}
                value={this.props.employee.status}
                onChange={this.handleChangeStatus}
                disabled={this.state.disabled}>
                <MenuItem style={styles.itemStyles} value={"Contract"} primaryText="Contract" />
                <MenuItem style={styles.itemStyles} value={"Permanent"} primaryText="Permanent" />
              </SelectField>
              <br/>
                <DatePicker textFieldStyle={styles.text}
                  floatingLabelText="Suspend Date"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  hintText="Suspend Date"
                  container="inline"
                  disabled={this.state.disabled}/>
                <DatePicker textFieldStyle={styles.text}
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelText="Hired Date"
                  floatingLabelFixed={true}
                  hintText="Hired Date"
                  value={this.props.employee.hiredDate}
                  container="inline"
                  disabled={this.state.disabled}/>
                <SelectField style={styles.text}
                  floatingLabelText="Grade"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  value={this.props.employee.grade}
                  onChange={this.handleChangeGrade}
                  disabled={this.state.disabled}>
                  <MenuItem style={styles.itemStyles} value={"SE-JP"} primaryText="SE-JP" />
                  <MenuItem style={styles.itemStyles} value={"SE-PG"} primaryText="SE-PG" />
                  <MenuItem style={styles.itemStyles} value={"SE-AP"} primaryText="SE-AP" />
                  <MenuItem style={styles.itemStyles} value={"SE-AN"} primaryText="SE-AN" />
                </SelectField>
                <br/>
                  <SelectField style={styles.text}
                    floatingLabelText="Division"
                    floatingLabelStyle={styles.floatingLabelStyle}
                    value={this.props.employee.division}
                    onChange={this.handleChangeDivision}
                    disabled={this.state.disabled}>
                    <MenuItem style={styles.itemStyles} value={"CDC Asterx"} primaryText="CDC Asterx" />
                    <MenuItem style={styles.itemStyles} value={"SWD Blue"} primaryText="SWD Blue" />
                    <MenuItem style={styles.itemStyles} value={"SWD Red Infomedia"} primaryText="SWD Red Infomedia" />
                    <MenuItem style={styles.itemStyles} value={"SWD Green"} primaryText="SWD Green" />
                    <MenuItem style={styles.itemStyles} value={"SWD Techone"} primaryText="SWD Techone" />
                    <MenuItem style={styles.itemStyles} value={"CDC Java Bootcamp"} primaryText="CDC Java Bootcamp" />
                  </SelectField>
                <br/>
                  <TextField style={styles.text}
                    hintText="Email"
                    value = {this.props.employee.email}
                    floatingLabelText="Email"
                    floatingLabelFixed={true}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    disabled={this.state.disabled}
                  />
            </div>
            <div style={styles.thirdColumn}>
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
            <Toolbar style={styles.toolbar}>
              <ToolbarGroup />
              <ToolbarGroup>
                  <RaisedButton label="Edit" secondary={true} onClick={this.editClick.bind(this)} style={this.state.disabled? styles.show : styles.hidden}/>
                  <RaisedButton label="Cancel" secondary={true} onClick={this.cancelClick.bind(this)} style={this.state.disabled? styles.hidden : styles.show}/>
                  <RaisedButton label="Save" secondary={true} onClick={this.saveClick.bind(this)} style={this.state.disabled? styles.hidden : styles.show}/>
              </ToolbarGroup>
            </Toolbar>
          </div>
        </div>
    );
  }
}

export default EmployeeTab;
