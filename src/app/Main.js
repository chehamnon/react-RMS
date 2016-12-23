/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

//material-ui
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import {pink500, indigo500, indigo100, indigo400, white, grey400} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';

//icons
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import ActionRestore from 'material-ui/svg-icons/action/restore';
import ActionSearch from 'material-ui/svg-icons/action/search';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import AvSortByAlpha from 'material-ui/svg-icons/av/sort-by-alpha';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NotificationWc from 'material-ui/svg-icons/notification/wc';
import SocialSchool from 'material-ui/svg-icons/social/school';
import SocialPerson from 'material-ui/svg-icons/social/person';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import IconButton from 'material-ui/IconButton';
import ListEmployee from '../data/ListEmployee';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';

//other component or file
import EmployeeTab from '../data/EmployeeTab'
import EmployeeDialog from '../component/EmployeeDialog'

const employeesData = [
  {
    id: 1,
    img: require("../images/avatar-chris.png"),
    firstName: 'Milla',
    lastName: 'Khan',
    dob: new Date(1988,7,2),
    gender: 'Male',
    nationality: 'Australian',
    maritalStatus: 'Married',
    phone: '+628123898787',
    status: 'Permanent',
    division: 'CDC Asterx',
    subDivision: 'Java Bootcamp',
    email: 'milla.khan@mitrais.com',
    location: 'BALI',
    suspendDate: new Object,
    hiredDate: new Date(2013,6,3),
    grade: 'SE-PG',
  },
  {
    id: 2,
    img: require("../images/kim_face.jpeg"),
    firstName: 'Karmilla',
    lastName: 'El Zara',
    dob: new Date(1992,12,3),
    gender: 'Female',
    nationality: 'Indonesian',
    maritalStatus: 'Single',
    phone: '+628123456787',
    status: 'Permanent',
    division: 'SWD Blue',
    subDivision: 'SWD ',
    email: 'karmilla.elzara@mitrais.com',
    location: 'YOG',
    suspendDate: new Object,
    hiredDate: new Date(2013,6,3),
    grade: 'SE-AP',
  },
];

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
  },

  leftApp: {
    float: 'left',
    paddingTop: 0,
    width: 450,
  },

  leftColumn: {
    float: 'left',
    paddingTop: 0,
    width: 450,
    position: 'absolute',
  },

  rightColumn: {
    paddingTop: 0,
    paddingLeft: 450,
  },

  toolbar: {
    backgroundColor: indigo400,
  },

  tab: {
    backgroundColor: indigo400,
    height: 56,
  },

  searchField: {
    paddingLeft: 15,
    color: 'white',
  },

  searchIcon: {
    paddingLeft: 20,
    height: 24,
    width: 24,
  },

  iconSize: {
    height: 24,
    width: 24,
  },

  iconMedium: {
    paddingLeft: 0,
    paddingTop: 20,
    float: 'left',
    height: 36,
    width: 36,
  },

  listStyles: {
    color: 'white',
    float: 'left',
    textAlign: 'start',
  },

  locationStyles: {
    color: grey400,
    fontSize: 14,
    paddingLeft: 85,
  },

  textStyles: {
    fontSize: 14,
    paddingLeft: 100,
  },

  floatingText: {
    fontSize: 18,
  },

  addressStyles: {
    height: 0,
    paddingLeft: 100,
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

  footer: {
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

};

const iconStyles = {
  paddingLeft: 10,
  paddingTop: 20,
  height: 24,
  width: 24,
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: pink500,
    primary1Color: indigo500
  },
  datePicker: {
    selectColor: pink500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      value:1,
      employees: employeesData,
      employee: employeesData[0],
      disabled: true,
      files: [],
    };
  }

  setEmployee(currentEmployee) {
      this.setState({
          employee: currentEmployee
      })
  }

  addEmployee(newEmployee){
      var employeesData = this.state.employees
      employeesData.push(newEmployee)
      console.log(newEmployee);
      this.setState({ employees: employeesData })
  }

  handleAddEmployee(newEmployee){
      var parent = this._reactInternalInstance._currentElement._owner._instance;
      parent.addEmployee(newEmployee);
  }

  handleTouchTap(currentEmployee){
    var parent = this._reactInternalInstance._currentElement._owner._instance;
    parent.setEmployee(currentEmployee);
  }

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


  getOfficeAddress(location) {
    switch (location) {
      case "JKT":
        return (
          <div>
          <List>
            <ListItem>
              <TextField
                value = "Jakarta Office"
                floatingLabelText="Office Location"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.floatingText}
                underlineShow={false}
                disabled={this.state.disabled}
                style={styles.textStyles}
              />
              <br/>
              <TextField
                floatingLabelText="Address"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.floatingText}
                underlineShow={false}
                disabled={true}
                style={styles.addressStyles}
              />
              <ListItem style={styles.locationStyles}
                primaryText="Gedung Wirausaha, 8th Floor"
                secondaryText="Jl. HR. Rasuna Said Kav C5 Jakarta Selatan, 12940"
              />
            </ListItem>
            <Divider/>
          </List>
          </div>
        );

      case "YOG":
        return(
          <div>
            <List>
              <ListItem>
                <TextField
                  value = "Yogyakarta Office"
                  floatingLabelText="Office Location"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingText}
                  underlineShow={false}
                  disabled={this.state.disabled}
                  style={styles.textStyles}
                />
                <br/>
                <TextField
                  floatingLabelText="Address"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingText}
                  underlineShow={false}
                  disabled={true}
                  style={styles.addressStyles}
                />
                <ListItem
                  style={styles.locationStyles}
                  primaryText="Jl. Sidobali No. 2 Muja Muju, Umbulharjo"
                  secondaryText="Yogyakarta, 55165"
                />
              </ListItem>
              <Divider/>
            </List>
          </div>
        );

        case "BDG":
          return(
            <div>
            <List>
              <ListItem>
                <TextField
                  value = "Bandung Office"
                  floatingLabelText="Office Location"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingText}
                  underlineShow={false}
                  disabled={this.state.disabled}
                  style={styles.textStyles}
                />
                <br/>
                <TextField
                  floatingLabelText="Address"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingText}
                  underlineShow={false}
                  disabled={true}
                  style={styles.addressStyles}
                />
                <ListItem
                  style={styles.locationStyles}
                  primaryText="Jl. Prof Surya Sumantri No: 8-D"
                  secondaryText="Bandung, 40164"
                />
              </ListItem>
              <Divider/>
            </List>
            </div>
          );
        default:
          return(
            <div>
            <List>
              <ListItem>
                <TextField
                  value = "Bali Office"
                  floatingLabelText="Office Location"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingText}
                  underlineShow={false}
                  disabled={this.state.disabled}
                  style={styles.textStyles}
                />
                <br/>
                <TextField
                  floatingLabelText="Address"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.floatingText}
                  underlineShow={false}
                  disabled={true}
                  style={styles.addressStyles}
                />
                <ListItem
                  style={styles.locationStyles}
                  primaryText="Jl. Bypass Ngurah Rai gg. Mina Utama No. 1"
                  secondaryText="Suwung 80223, Bali​"
                />
              </ListItem>
              <Divider/>
            </List>
            </div>
          );
    }
  }

  render() {
    const rightButtons = (
      <div>
        <IconButton>
          <ActionSettings style={iconStyles} color={white}/>
        </IconButton>
        <IconButton>
          <ActionPowerSettingsNew style={iconStyles} color={white}/>
        </IconButton>
      </div>
    );

    const leftButtons = (
      <div style={styles.leftApp}>
        <IconButton style={styles.iconMedium}>
          <NavigationMenu color={white}/>
        </IconButton>
        <ActionAccountCircle style={styles.iconMedium} color={indigo100}/>
        <List>
          <ListItem
            style={styles.listStyles}
            primaryText= "Michael Jacob Hutapea"
            secondaryText = "SE-AP"
          >
        </ListItem>
        </List>
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar iconElementRight={rightButtons} iconElementLeft={leftButtons}
          />
          <div style={styles.leftColumn}>
            <div>
              <Toolbar style={styles.toolbar}>
                  <ToolbarGroup firstChild={true}>
                    <ActionSearch style={styles.searchIcon} color={white}/>
                    <TextField
                      id="search" hintText="Search" hintStyle={styles.searchField} style={styles.searchField} inputStyle={styles.searchField} underlineShow={false}
                    />
                  </ToolbarGroup>
                  <ToolbarGroup>
                  <IconButton>
                    <ContentFilterList style={styles.iconSize} color={white}/>
                  </IconButton>
                  <IconButton>
                    <AvSortByAlpha style={styles.iconSize} color={white}/>
                  </IconButton>
                  <Chip>
                    {this.state.employees.length}
                  </Chip>
                  </ToolbarGroup>
                </Toolbar>
            </div>
            <div>
              {employeesData.map((employee) => (
                <ListEmployee key={employee.id} employee={employee} handleTouchTap={this.handleTouchTap}/>
              ))}
              <EmployeeDialog handleAddEmployee={this.handleAddEmployee}/>
            </div>
          </div>

          <div style={styles.rightColumn}>
            <div>
              <Tabs>
                <Tab style={styles.tab} icon={<SocialPerson/>}>
                  <div>
                    <div>
                      <div style={styles.firstColumn}>
                        <TextField
                          hintText="First Name"
                          value = {this.state.employee.firstName}
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
                          value = {this.state.employee.lastName}
                          floatingLabelStyle={styles.floatingLabelStyle}
                          floatingLabelText="Last Name"
                          floatingLabelFixed={true}
                          disabled={this.state.disabled}
                          style= {styles.textStyle}
                        />
                        <br/>
                        <SelectField floatingLabelText="Gender"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          value={this.state.employee.gender}
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
                            value={this.state.employee.dob}
                            style= {styles.textStyle}
                            disabled={this.state.disabled}/>
                          <TextField
                            hintText="Nationality"
                            value = {this.state.employee.nationality}
                            floatingLabelText="Nationality"
                            floatingLabelFixed={true}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            disabled={this.state.disabled}
                            style= {styles.textStyle}
                          />
                        <br/>
                          <SelectField floatingLabelText="Marital Status"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            value={this.state.employee.maritalStatus}
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
                            value = {this.state.employee.phone}
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
                          value = {this.state.employee.subDivision}
                          floatingLabelText="Sub Division"
                          floatingLabelFixed={true}
                          floatingLabelStyle={styles.floatingLabelStyle}
                          disabled={this.state.disabled}
                        />
                        <br/>
                        <SelectField style={styles.text}
                          floatingLabelText="Status"
                          floatingLabelStyle={styles.floatingLabelStyle}
                          value={this.state.employee.status}
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
                            value={this.state.employee.hiredDate}
                            container="inline"
                            disabled={this.state.disabled}/>
                          <SelectField style={styles.text}
                            floatingLabelText="Grade"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            value={this.state.employee.grade}
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
                              value={this.state.employee.division}
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
                              value = {this.state.employee.email}
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
                          </div> : <div><Avatar src={this.state.employee.img} size={150} key={this.state.employee.img}/></div>}
                      </div>
                    </div>
                    <div>
                      <Toolbar style={styles.footer}>
                        <ToolbarGroup />
                        <ToolbarGroup>
                            <RaisedButton label="Edit" secondary={true} onClick={this.editClick.bind(this)} style={this.state.disabled? styles.show : styles.hidden}/>
                            <RaisedButton label="Cancel" secondary={true} onClick={this.cancelClick.bind(this)} style={this.state.disabled? styles.hidden : styles.show}/>
                            <RaisedButton label="Save" secondary={true} onClick={this.saveClick.bind(this)} style={this.state.disabled? styles.hidden : styles.show}/>
                        </ToolbarGroup>
                      </Toolbar>
                    </div>
                  </div>
                </Tab>
                <Tab style={styles.tab} icon={<ActionRestore/>} />
                <Tab style={styles.tab} icon={<SocialSchool/>} />
                <Tab style={styles.tab} icon={<NotificationWc/>} />
                <Tab style={styles.tab} icon={<ActionHome/>} />
                <Tab style={styles.tab} icon={<MapsPlace/>}>
                  {this.getOfficeAddress(this.state.employee.location)}
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
