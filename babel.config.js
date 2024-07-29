module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      'nativewind/babel',
      'react-native-paper/babel',
      'module:react-native-dotenv',
    ],
  };
};
