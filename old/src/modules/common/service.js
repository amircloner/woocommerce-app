import request from 'src/utils/request';

export const fetchSetting = () => request.get('/generace-app-control/v1/settings');
export const fetchConfig = () => request.get('/generace-app-control/v1/configs');
export const fetchTemplate = () => request.get('/generace-app-control/v1/template-mobile');
export const fetchCountries = () => request.get('/wc/v3/data/countries');
export const fetchPaymentGateways = () => request.get('/wc/v3/payment_gateways');
