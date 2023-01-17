import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBoGzpEv3rXzBHMWrwIM_U2rzM9ansHGJA',
  authDomain: 'thedojosite-cf361.firebaseapp.com',
  projectId: 'thedojosite-cf361',
  storageBucket: 'thedojosite-cf361.appspot.com',
  messagingSenderId: '673918625748',
  appId: '1:673918625748:web:058c1c131b5bcaebacd841',
};

//initialize Firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
