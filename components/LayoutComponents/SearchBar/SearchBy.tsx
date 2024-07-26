import {Text, View} from 'react-native';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';

interface SearchProps {
  onSearchByChange: (selection: string) => void;
}

const SearchBy = ({onSearchByChange}: SearchProps) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState('');
  const list2 = [
    {name: 'First item', subtitle: 'Subtitle 1'},
    {name: 'Second item', subtitle: 'Subtitle 2'},
    {name: 'Third item', subtitle: 'Subtitle 3'},
  ];

  const handleSearchByChange = (option: string) => {
    onSearchByChange(option);
  };
  return (
    <View>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content className="max-w-[70px] ">
              <ListItem.Title className="text-sm">
                {selected ? selected : 'Search By'}
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        containerStyle={{backgroundColor: 'transparent'}}
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}>
        {list2.map((l, i) => (
          <ListItem
            key={i}
            onPress={() => {
              console.log(`search: ${l.name}`);
              handleSearchByChange(l.name);
              setSelected(l.name);
              setExpanded(!expanded);
            }}
            bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </ListItem.Accordion>
    </View>
  );
};

export default SearchBy;
