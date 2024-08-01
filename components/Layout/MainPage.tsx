import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';

import {RootStackParamList} from '../../App';
import Header from '../LayoutComponents/Header';
import StatusBar from '../LayoutComponents/StatusBar';
import Navbar from '../LayoutComponents/Navbar';

import JobMonitoring from '../LayoutComponents/MainPageNav/JobMonitoring';
import History from '../LayoutComponents/MainPageNav/History';
import MySurvey from '../LayoutComponents/MainPageNav/MySurvey';
import IncomingJobPage from '../LayoutComponents/MainPageNav/IncomingJobPage';

type MainPageProps = NativeStackScreenProps<RootStackParamList, 'mainPage'>;

const MainPage = ({route}: MainPageProps) => {
  const [menuOptions, setMenuOptions] = useState<string>('Incoming Job');
  const handleOptionChange = (option: string) => {
    setMenuOptions(option);
  };

  const renderComponent = () => {
    switch (menuOptions) {
      case 'Incoming Job':
        return <IncomingJobPage />;
      case 'Job Monitoring':
        return <JobMonitoring />;
      case 'My Survey':
        return <MySurvey />;
      case 'History':
        return <History />;
      default:
        return null;
    }
  };
  // const {username, password} = route.params;
  return (
    <View className="w-full h-full flex flex-col">
      {/* Header */}
      <Header menuOption={menuOptions}/>

      {/* Status Bar */}
      <StatusBar />

      {/* Navbar */}
      <Navbar onMenuChange={handleOptionChange} />

      {/* Content based on navbar */}
      {renderComponent()}
    </View>
  );
};

export default MainPage;
