/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import {pink500, indigo500, indigo100, indigo400, white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionSearch from 'material-ui/svg-icons/action/search';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';
import AvSortByAlpha from 'material-ui/svg-icons/av/sort-by-alpha';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NotificationWc from 'material-ui/svg-icons/notification/wc';
import SocialSchool from 'material-ui/svg-icons/social/school';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ActionRestore from 'material-ui/svg-icons/action/restore';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import IconButton from 'material-ui/IconButton';
import ListEmployee from '../data/ListEmployee';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
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
});

const jktAddress=[
  <span>Gedung Wirausaha, 8th Floor<br/>
    Jl. HR. Rasuna Said Kav C5 Jakarta Selatan, 12940
    </span>
];

const yogAddress=[
  <span>'Jl. Sidobali No. 2 Muja Muju, Umbulharjo'<br/>
    Yogyakarta, 55165
  </span>
];

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      value:1,
      employees: employeesData,
      employee: employeesData[0],
      disabled: true,
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

  getOfficeAddress(location) {
    switch (location) {
      case "JKT":
        return (
          <div>
            <Avatar icon={<MapsPlace />} backgroundColor={indigo500} style={styles.avatarStyles}/>
            <List style={styles.listStyles}>
              <ListItem>
              <TextField
                value = "Jakarta Office"
                floatingLabelText="Office Location"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.floatingLabelStyle}
                disabled={this.state.disabled}
                style= {styles.textStyle}
              />
              <TextField
                value = {jktAddress}
                floatingLabelText="Address"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.floatingLabelStyle}
                disabled={true}
                style= {styles.textStyle}
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
                  underlineShow={false}
                  disabled={this.state.disabled}
                />
                <br/>
                <TextField
                  floatingLabelText="Address"
                  floatingLabelFixed={true}
                  underlineShow={false}
                  disabled={true}
                />
                <ListItem
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
                  underlineShow={false}
                  disabled={this.state.disabled}
                />
                <br/>
                <TextField
                  floatingLabelText="Address"
                  floatingLabelFixed={true}
                  underlineShow={false}
                  disabled={true}
                />
                <ListItem
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
                  underlineShow={false}
                  disabled={this.state.disabled}
                />
                <br/>
                <TextField
                  floatingLabelText="Address"
                  floatingLabelFixed={true}
                  underlineShow={false}
                  disabled={true}
                />
                <ListItem
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
                  <EmployeeTab employee={this.state.employee}/>
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
