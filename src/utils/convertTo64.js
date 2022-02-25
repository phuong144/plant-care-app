import * as FileSystem from 'expo-file-system';

export const uriToBase64 = async (uri) => {
  let base64 = "";
  if (Platform.OS === 'ios') {
    base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
  }
  return base64;
}