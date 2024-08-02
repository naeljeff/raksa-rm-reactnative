import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import React, {useEffect, useState} from 'react';

interface SearchProps {
  onSearchByChange: (selection: string) => void;
  searchTab: string;
}

const SearchBy = ({onSearchByChange, searchTab}: SearchProps) => {
  const [selected, setSelected] = useState('');
  const [searchByList, setSearchByList] = useState<any[]>([]);

  useEffect(() => {
    switch (searchTab) {
      case 'IncomingJob':
        setSearchByList([
          {name: 'None', value: 'none'},
          {name: 'No Pengajuan', value: 'noPengajuanSurvey'},
          {name: 'Alamat Survey', value: 'alamat'},
          {name: 'No Telepon', value: 'noTelp'},
          {name: 'Merek', value: 'merek'},
          {name: 'Tipe', value: 'tipe'},
          {name: 'Model', value: 'model'},
          {name: 'Jenis Asuransi', value: 'jenisAsuransi'},
          {name: 'Plat Nomor', value: 'platNomor'},
        ]);
        break;
      case 'JobMonitoring':
        setSearchByList([
          {name: 'None', value: 'none'},
          {name: 'No Pengajuan', value: 'noPengajuanSurvey'},
          {name: 'Nama Surveyor', value: 'surveyorName'},
          {name: 'Tanggal Request', value: 'requestDate'},
          {name: 'Insured Name', value: 'insuredName'},
        ]);
        break;
      case 'MySurvey':
        setSearchByList([
          {name: 'None', value: 'none'},
          {name: 'No Pengajuan', value: 'noPengajuanSurvey'},
          {name: 'Alamat Survey', value: 'alamat'},
          {name: 'No Telepon', value: 'noTelp'},
          {name: 'Merek', value: 'merek'},
          {name: 'Tipe', value: 'tipe'},
          {name: 'Model', value: 'model'},
        ]);
        break;
      case 'History':
        setSearchByList([
          {name: 'None', value: 'none'},
          {name: 'No Pengajuan', value: 'noPengajuanSurvey'},
          {name: 'Alamat Survey', value: 'alamat'},
          {name: 'No Telepon', value: 'noTelp'},
          {name: 'Merek', value: 'merek'},
          {name: 'Tipe', value: 'tipe'},
          {name: 'Model', value: 'model'},
          {name: 'Jenis Asuransi', value: 'jenisAsuransi'},
          {name: 'Plat Nomor', value: 'platNomor'},
        ]);
        break;
      default:
        setSearchByList([]);
        break;
    }
  }, [searchTab]);

  const handleSearchBy = (option: {name: string; value: string}) => {
    console.log('Selected option:', option);
    if (option.value === 'none') {
      setSelected(option.name);
      onSearchByChange('');
    } else {
      setSelected(option.value);
      onSearchByChange(option.value);
    }
  };
  return (
    <View className="w-[33%] mt-4 ml-3">
      <Dropdown
        data={searchByList}
        search
        activeColor="#f7ebd7"
        maxHeight={300}
        labelField="name"
        valueField="value"
        placeholder="Search By"
        searchPlaceholder="Search By"
        value={selected}
        selectedTextStyle={{fontSize: 12, color: 'black'}}
        itemTextStyle={{fontSize: 12, color: 'black'}}
        inputSearchStyle={{fontSize: 12, color: 'black'}}
        placeholderStyle={{fontSize: 12, color: 'black'}}
        style={{paddingHorizontal: 4}}
        onChange={option => handleSearchBy(option)}
      />
    </View>
  );
};

export default SearchBy;
