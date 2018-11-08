import axios from 'axios';
import config from '../../config/config';  //import config ต่างๆ เช่น url 
const URL = config.MOCK_URL;

//ตัวอย่าง การ fetch ข้อมูลแบบ get
export const fetchUser = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_EXAMPLE_LOADING' });
        return axios
            .get(`${URL}`, {})
            .then(res => {
                //console.log(res.data);
                dispatch({ type: 'FETCH_EXAMPLE_SUCCESS', payload: res.data });
            })
            .catch(err => {
                dispatch({ type: 'FETCH_EXAMPLE_ERROR', payload: res.message });
            });
    }
}

//ตัวอย่าง login  post
export const signin = ({ username, password }) => {
    //console.log (username + ':' + password);
    return dispatch => {
        let headers = {
            Authorization: 'Basic ' + btoa(username + ':' + password),
            platform: 'desktop',
            application: 'tdc',
            device_id: '0010001',
            version: '0.1',
        };
        let url = '';//ใส่ url ที่จะ ลอกอืนที่นี่

        return axios.post(`${url}/user`, {}, { headers: headers })
            .then(response => {
                // localStorage.setItem('token', response.data.access_token);
                // localStorage.setItem('dataUser', JSON.stringify(response.data));
                // const token = localStorage.getItem('token');
                // dispatch({ type: 'AUTH_USER', payload: token });
            }).catch(error => {
                // dispatch({ type: 'AUTH_USER_EROR', payload: 'Bad Signin Info' });
            });
    };
};
//logout
export const signout = () => {
    return dispatch => {
        localStorage.removeItem('token');
        localStorage.removeItem('dataUser');
        dispatch({ type: 'UNAUTH_USER' });
    };
};

//ตัวอย่างการ fetch แบบ post
export const submitPatientProfileData = (jsonstring) => {
    //jsonstring ควรจะเป็น  JSON.stringify(data) ก่อน 
   
    let url = '';//ใส่ url ที่จะ ลอกอืนที่นี่
    let token = ''; // จะเป็น token เมื่อ login สำเร็จ

    /** append data */
    let form = new FormData();
    // form.append("ezf_id", "1437377239070462301");
    form.append("data", jsonstring); //ใส่ data ที่จะส่งไป
    form.append("data2", 'xxx');  //ใส่ data ท/ี่จะส่งไป
    let headers = {
        Authorization: `Bearer ${token}`,
        platform: 'desktop',
        application: 'tdc',
        device_id: '0010001',
        version: '0.1',
    };
    return new Promise((resolve, reject) => {
        return axios.post(`${mockUrl}`, form, {headers:headers})
            .then (response => { 
                //เมื่อ fetch สำเร็จ จะทำอะไรต่อไป
                //resolve(response['data']);
            }).catch (error => {
                //เมื่อ fetch ไม่สำเร็จ จะทำอะไรต่อไป
                //reject(error);
        });
    }); 
}






