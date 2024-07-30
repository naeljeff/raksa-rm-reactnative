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
          {name: 'No Pengajuan', value: 'noPengajuanSurvey'},
          {name: 'Nama Surveyor', value: 'surveyorName'},
          {name: 'Tanggal Request', value: 'requestDate'},
          {name: 'Insured Name', value: 'insuredName'},
        ]);
        break;
      case 'MySurvey':
        setSearchByList([
          {name: 'No Pengajuan', value: 'noPengajuanSurvey'},
          {name: 'Alamat Survey', value: 'alamat'},
          {name: 'No Telepon', value: 'noTelp'},
          {name: 'Merek', value: 'merek'},
          {name: 'Tipe', value: 'tipe'},
          {name: 'Model', value: 'model'},
        ]);
        break;
      default:
        setSearchByList([]);
        break;
    }
  }, [searchTab]);

  const handleSearchBy = (option: {name: string; value: string}) => {
    setSelected(option.value);
    onSearchByChange(option.value);
  };
  return (
    <View className="w-[33%] mt-4 ml-3">
      <Dropdown
        data={searchByList}
        search
        activeColor="#ffffea"
        maxHeight={300}
        labelField="name"
        valueField="value"
        placeholder="Search By"
        searchPlaceholder="Search By"
        value={selected}
        selectedTextStyle={{fontSize: 12}}
        itemTextStyle={{fontSize: 12}}
        inputSearchStyle={{fontSize: 12}}
        placeholderStyle={{fontSize: 12}}
        style={{paddingHorizontal: 4}}
        onChange={option => handleSearchBy(option)}
      />
    </View>
  );
};

export default SearchBy;
