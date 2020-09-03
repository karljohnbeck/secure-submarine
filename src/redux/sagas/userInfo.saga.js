import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchUserInfo () {
    try{
        let response = yield axios.get('/api/userinfo');
        yield put({type: 'SET_USERINFO', payload: response.data})
    } catch (error) {
        console.log('error in fetchUserInfo saga ', error)
    }
}

function* userInfoSaga() {
    yield takeLatest('FETCH_USERINFO', fetchUserInfo)
}

export default userInfoSaga;
