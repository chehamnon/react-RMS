const lookups = [
    {
      data_type: 'GRADE',
      data_code: 'SE-JP',
      assoc_val_1: 'SE',
      ds:['DS1', 'DS2', 'DS3'],
      desc: 'Junior Programmer'
    },
    {
      data_type: 'GRADE',
      data_code: 'SE-PG',
      assoc_val_1: 'SE',
      ds:['DS4', 'DS5', 'DS6', 'DS7'],
      desc: 'Programmer'
    },
    {
      data_type: 'GRADE',
      data_code: 'SE-AP',
      assoc_val_1: 'SE',
      ds:['DS8', 'DS9', 'DS10', 'DS11', 'DS12', 'DS13'],
      desc: 'Analyst Programmer'
    },
    {
      data_type: 'GRADE',
      data_code: 'SE-AN',
      assoc_val_1: 'SE',
      ds:['DS14', 'DS15', 'DS16', 'DS17', 'DS18', 'DS19','DS20','DS21','DS22'],
      desc: 'Analyst'
    },
    {
      data_type: 'GRADE',
      data_code: 'SQ-JT',
      assoc_val_1: 'SQ',
      ds:['DS1', 'DS2', 'DS3'],
      desc: 'Junior Tester'
    },
    {
      data_type: 'GRADE',
      data_code: 'SQ-TS',
      assoc_val_1: 'SQ',
      ds:['DS4', 'DS5', 'DS6', 'DS7'],
      desc: 'Tester Senior'
    },
    {
      data_type: 'GRADE',
      data_code: 'SQ-ST',
      assoc_val_1: 'SQ',
      ds:['DS8', 'DS9', 'DS10', 'DS11', 'DS12', 'DS13'],
      desc: 'Senior Tester'
    },
    {
      data_type: 'GRADE',
      data_code: 'SQ-TA',
      assoc_val_1: 'SQ',
      ds:['DS14', 'DS15', 'DS16', 'DS17', 'DS18', 'DS19','DS20','DS21','DS22'],
      desc: 'Tester Analyst'
    },
    {
      data_type: 'GRADE',
      data_code: 'CON-JC',
      assoc_val_1: 'CON',
      ds:['DS1', 'DS2', 'DS3'],
      desc: 'Junior Consultant'
    },
    {
      data_type: 'GRADE',
      data_code: 'CON-CON',
      assoc_val_1: 'CON',
      ds:['DS4', 'DS5', 'DS6', 'DS7'],
      desc: 'Consultant'
    },
    {
      data_type: 'GRADE',
      data_code: 'CON-SC',
      assoc_val_1: 'CON',
      ds:['DS8', 'DS9', 'DS10', 'DS11', 'DS12', 'DS13'],
      desc: 'Senior Consultant'
    },
    {
      data_type: 'GRADE',
      data_code: 'CON-LC',
      assoc_val_1: 'CON',
      ds:['DS14', 'DS15', 'DS16', 'DS17', 'DS18', 'DS19','DS20','DS21','DS22'],
      desc: 'Lead Consultant'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-MG1',
      assoc_val_1: 'MJF',
      ds:['DS1'],
      desc: 'Evangelist 1'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-MG2',
      assoc_val_1: 'MJF',
      ds:['DS2'],
      desc: 'Evangelist 2'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-MG3',
      assoc_val_1: 'MJF',
      ds:['DS3'],
      desc: 'Evangelist 3'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-AAM',
      assoc_val_1: 'MJF',
      ds:['DS4', 'DS5', 'DS6'],
      desc: 'Acting Account Manager'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-AM',
      assoc_val_1: 'MJF',
      ds:['DS7', 'DS8', 'DS9'],
      desc: 'Account Manager'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-PM',
      assoc_val_1: 'MJF',
      ds:['DS10', 'DS11', 'DS12', 'DS13'],
      desc: 'Project Manager'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-SM',
      assoc_val_1: 'MJF',
      ds:['DS14', 'DS15', 'DS16', 'DS17', 'DS18'],
      desc: 'Senior Manager'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-GM',
      assoc_val_1: 'MJF',
      ds:['DS19', 'DS20', 'DS21', 'DS22'],
      desc: 'General Manager'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-VP',
      assoc_val_1: 'DIR',
      ds:['DS1', 'DS2', 'DS3', 'DS4', 'DS5','DS6','DS7'],
      desc: 'Vice Presiden'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-Presiden',
      assoc_val_1: 'DIR',
      ds:['DS8', 'DS9', 'DS10', 'DS11', 'DS12','DS13','DS14','DS15'],
      desc: 'Presiden Director'
    },
    {
      data_type: 'GRADE',
      data_code: 'MJF-Chairman',
      assoc_val_1: 'DIR',
      ds:['DS16', 'DS17', 'DS18', 'DS19', 'DS20','DS21','DS22'],
      desc: 'Chairman'
    },
    {
      data_type: 'DS',
      data_code: 'DS1',
    },
    {
      data_type: 'DS',
      data_code: 'DS2',
    },
    {
      data_type: 'DS',
      data_code: 'DS3',
    },
    {
      data_type: 'DS',
      data_code: 'DS4',
    },
    {
      data_type: 'DS',
      data_code: 'DS5',
    },
    {
      data_type: 'DS',
      data_code: 'DS6',
    },
    {
      data_type: 'DS',
      data_code: 'DS7',
    },
    {
      data_type: 'DS',
      data_code: 'DS8',
    },
    {
      data_type: 'DS',
      data_code: 'DS9',
    },
    {
      data_type: 'DS',
      data_code: 'DS10',
    },
    {
      data_type: 'DS',
      data_code: 'DS11',
    },
    {
      data_type: 'DS',
      data_code: 'DS12',
    },
    {
      data_type: 'DS',
      data_code: 'DS13',
    },
    {
      data_type: 'DS',
      data_code: 'DS14',
    },
    {
      data_type: 'DS',
      data_code: 'DS15',
    },
    {
      data_type: 'DS',
      data_code: 'DS16',
    },
    {
      data_type: 'DS',
      data_code: 'DS17',
    },
    {
      data_type: 'DS',
      data_code: 'DS18',
    },
    {
      data_type: 'DS',
      data_code: 'DS19',
    },
    {
      data_type: 'DS',
      data_code: 'DS20',
    },
    {
      data_type: 'DS',
      data_code: 'DS21',
    },
    {
      data_type: 'DS',
      data_code: 'DS22',
    },
  ];
export default lookups;
