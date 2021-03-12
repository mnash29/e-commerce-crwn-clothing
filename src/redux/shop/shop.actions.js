import { 
  FETCH_COLLECTIONS_FAILURE, 
  FETCH_COLLECTIONS_START, 
  FETCH_COLLECTIONS_SUCCESS } from './shop.types';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

// This code was moved into shop.sagas.js
//
// export const fetchCollectionsStartAsync = () => {
//   return dispatch => {
//     const collectionRef = firestore.collection('collections');
//     dispatch(fetchCollectionsStart());

//     // Using Promise pattern (one-off api call)
//     // Does not provide a live stream of data if something changes in the database
//     // Changes would require the component to remount
//     collectionRef.get()
//       .then(snapshot => {
//         const collectionMap = convertCollectionsSnapshotToMap(snapshot);
//         dispatch(fetchCollectionSuccess(collectionMap));
//       })
//       .catch(error => dispatch(fetchCollectionFailure(error.message)));
//   }
// };