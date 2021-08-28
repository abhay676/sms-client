import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import styles from './SignUp.module.css';
import { TabList, TabPanel, Tabs, Tab } from 'react-tabs';
import TextField from '../../../shared/FormFields/TextField/TextField';
import { FieldType } from '../../../shared/FormFields/TextField/ITextField';
import NumberField from '../../../shared/FormFields/NumberField/NumberField';
import Button from '../../../shared/Button/Button';
export default class SignUp extends Component {
  render() {
    const handleFieldValue = (v: string | number) => {
      console.log(v);
    };
    const handleOnChange = () => {
      // confirm from user
    };
    return (
      <div>
        <Tabs
          onSelect={handleOnChange}
          selectedTabClassName={styles.selected_tab}
        >
          <TabList>
            <Tab>Students SignUp</Tab>
            <Tab>Teachers SignUp</Tab>
          </TabList>
          <TabPanel>
            <div>
              <TextField
                name="Student Name"
                onChange={handleFieldValue}
                type={FieldType.TEXT}
              />
              <TextField
                name="School Name"
                onChange={handleFieldValue}
                type={FieldType.TEXT}
              />
              <NumberField name="Phone Number" onChange={handleFieldValue} />
              <TextField
                name="Class"
                onChange={handleFieldValue}
                type={FieldType.TEXT}
              />
              <TextField
                name="Email"
                onChange={handleFieldValue}
                type={FieldType.EMAIL}
              />
              <Button text="SignUp" />
            </div>
          </TabPanel>
          <TabPanel>Teachers Div</TabPanel>
        </Tabs>
      </div>
    );
  }
}
