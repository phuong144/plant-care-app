import RNFetchBlob from "rn-fetch-blob";

const fs = RNFetchBlob.fs;
let imagePath = null;

export const uriToBase64 = (uri) => {
  if (Platform.OS === 'ios') {
    let arr = uri.split('/')
    const dirs = RNFetchBlob.fs.dirs
    uri = `${dirs.DocumentDir}/${arr[arr.length - 1]}`
  } else {
    uri = audioDataUri
  }


  RNFetchBlob.fs.readFile(uri, 'base64')
    .then((data) => {
      console.log(data);
    })

  return "";
}