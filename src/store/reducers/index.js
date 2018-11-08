
//redux-form จะทำกํารเก็บ state และมี reducer ในตัวของมันเอง
//ดังนั้นเวลําเรําจะใช้งําน redux-form เรําต้องท�ําเหมือนว่ํามันคือ reducer ตัวหนึ่งด้วยครับ
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

//reducers
import example from './example';

const rootReducers = combineReducers({
    form: formReducer, //ก�ําหนดชื่อ reducer ไว้ว่ําชื่อ form นะครับตํามค�ําแนะน�ําของ redux-form
    example
});
export default rootReducers;
