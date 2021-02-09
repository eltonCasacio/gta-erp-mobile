module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-vector-icons|@react-native-community/picker)/)'
  ]
};

// "jest": {
//   "preset": "react-native",
//   "transformIgnorePatterns": [
//     "node_modules/(?!(react-native|react-native-vector-icons|@react-native-community/picker)/)"
//   ]
// }
