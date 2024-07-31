import {TouchableOpacity} from 'react-native';
import {Menu, Divider} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import {JobProps} from '../../../props/JobProps';

const JobListMenu = ({item}: {item: JobProps}) => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const openMenu = () => setMenuState(true);
  const closeMenu = () => setMenuState(false);
  return (
    <Menu
      visible={menuState}
      onDismiss={closeMenu}
      contentStyle={{backgroundColor: '#fff'}}
      elevation={5}
      anchor={
        <TouchableOpacity onPress={openMenu}>
          <Feather name="more-vertical" size={22} color="black" />
        </TouchableOpacity>
      }>
      <Menu.Item
        style={{
          height: 50,
        }}
        titleStyle={{fontSize: 16, color: 'black'}}
        onPress={() => {
          closeMenu();
          console.log(`View Clicked: ${item.noPengajuanSurvey}`);
        }}
        title="View"
      />
      <Divider />
      <Menu.Item
        style={{
          height: 50,
        }}
        titleStyle={{fontSize: 16, color: 'black'}}
        onPress={() => {
          closeMenu();
          console.log(`Reject Clicked: ${item.noPengajuanSurvey}`);
        }}
        title="Reject"
      />
      <Divider />
      <Menu.Item
        style={{
          height: 50,
        }}
        titleStyle={{fontSize: 16, color: 'black'}}
        onPress={() => {
          closeMenu();
          console.log(`Accept Clicked: ${item.noPengajuanSurvey}`);
        }}
        title="Accept"
      />
      <Divider />
      <Menu.Item
        style={{
          height: 50,
        }}
        titleStyle={{fontSize: 16, color: 'black'}}
        onPress={() => {
          closeMenu();
          console.log(`Assign Clicked: ${item.noPengajuanSurvey}`);
        }}
        title="Assign"
      />
    </Menu>
  );
};

export default JobListMenu;
