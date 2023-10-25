interface DataModel {
  [key: string]: any;
}
const data_model = {
  a: {},
  b: {},
  c: {},
} as DataModel;

console.log('start');
console.log(data_model.hasOwnProperty('a'));
// https://velog.io/@jay/be-carefule-use-hasownproperty
// if (Object.keys(data_model)) {
// }
// if ('inv_s_list$origin_trx_type_code' in prop && 'inv_s_list$trx_type_cd' in prop) {

// }
