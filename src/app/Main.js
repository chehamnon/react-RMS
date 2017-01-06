/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import SearchInput, {createFilter} from 'react-search-input';

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
import Paper from 'material-ui/Paper';
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
import EmployeeTab from '../component/EmployeeTab'
import EmployeeDialog from '../component/EmployeeDialog'
import LocationTab from '../component/LocationTab'

const employeesData = [
  {
    id: 'milla_khan',
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
    jobFamily: 'SE',
  },
  {
    id: 'karmilla_el_zara',
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
    jobFamily: 'SE',
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

  inputStyle: {
    fontSize: 14,
  },

  rightInputStyle: {
    paddingLeft: 20,
    fontSize: 14,
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

const KEYS_TO_FILTERS = ['firstName','lastName'];
class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      value:1,
      employees: employeesData,
      employee: employeesData[0],
      disabled: true,
      searchMode: false,
      searchQuery: '',
      searchEmployee: {},
    };
  }

  setEmployees(employees) {
      this.setState({
          employees: employees
      })
  }

  setCurrentEmployee(currentEmployee) {
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

  handleChangeSearchText(event, type) {
      var nextState = {};
      nextState[type] = event.target.value;
      this.setState(nextState);

      this.handleSearchEmployee(event);
  }

  handleSearchEmployee(event){
      var employees = this.state.employees;
      if (event.target.value.length >= 3){
          var searchResult = employees.filter(createFilter(event.target.value, KEYS_TO_FILTERS));
          this.setState({
              searchEmployee: searchResult,
              searchMode: true,
          });
      } else {
          this.handleUncompleteSearch(event);
      }
  }

  handleUncompleteSearch(event){
    if (event.target.value.length < 3){
        this.setState({
            searchMode: false,
        });
    }
  }

  handleResetSearch(){
      this.setState({
          searchMode: false,
          searchQuery: '',
      });
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

    var listEmployee = {};
    if (this.state.searchMode){
        listEmployee = this.state.searchEmployee.map( employee =>
        <ListEmployee key={employee.id} employee={employee} employees={this.state.employees} setCurrentEmployee={this.setCurrentEmployee.bind(this)}/>
        );
    } else {
        listEmployee = this.state.employees.map( employee =>
        <ListEmployee key={employee.id} employee={employee} employees={this.state.employees} setCurrentEmployee={this.setCurrentEmployee.bind(this)}/>
        );
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar iconElementRight={rightButtons} iconElementLeft={leftButtons}
          />
          <div style={styles.leftColumn}>
            <div>
              <Toolbar style={styles.toolbar}>
                  <ToolbarGroup firstChild={true}>
                    <IconButton>
                      <ActionSearch style={styles.searchIcon} color={white}/>
                    </IconButton>
                    <TextField
                      id="search"
                      value={this.state.searchQuery}
                      onChange={event => this.handleChangeSearchText(event, 'searchQuery')}
                      onBlur={this.handleUncompleteSearch.bind(this)}
                      hintText="Search"
                      hintStyle={styles.searchField}
                      style={styles.searchField}
                      inputStyle={styles.searchField}
                      underlineShow={false}
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
                    {listEmployee.length}
                  </Chip>
                  </ToolbarGroup>
                </Toolbar>
            </div>
            <div>
              {listEmployee.length > 0 ? (
                  <div>
                      {listEmployee}
                  </div>
              ) : (
                  <Paper zDepth={1}>
                    <List>
                      <ListItem>
                        <span>No Record Found</span>
                      </ListItem>
                    </List>
                  </Paper>
              )}
              <EmployeeDialog
                  employees={this.state.employees}
                  setEmployees={this.setEmployees.bind(this)}
                  setCurrentEmployee={this.setCurrentEmployee.bind(this)}
              />
            </div>
          </div>

          <div style={styles.rightColumn}>
            <div>
              <Tabs>
                <Tab style={styles.tab} icon={<SocialPerson/>}>
                  <EmployeeTab
                    employees={this.state.employees}
                    employee={this.state.employee}
                    setEmployees={this.setEmployees.bind(this)}
                    setCurrentEmployee={this.setCurrentEmployee.bind(this)}
                  />
                </Tab>
                <Tab style={styles.tab} icon={<ActionRestore/>} />
                <Tab style={styles.tab} icon={<SocialSchool/>} />
                <Tab style={styles.tab} icon={<NotificationWc/>} />
                <Tab style={styles.tab} icon={<ActionHome/>} />
                <Tab style={styles.tab} icon={<MapsPlace/>}>
                  <LocationTab
                    employees={this.state.employees}
                    employee={this.state.employee}
                    setEmployees={this.setEmployees.bind(this)}
                    setCurrentEmployee={this.setCurrentEmployee.bind(this)}

                  />
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
