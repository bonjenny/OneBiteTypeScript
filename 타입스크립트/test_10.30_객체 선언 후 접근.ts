const key = 'sample';

const tab_list_mapping = {
  receivable_payment_increase: '채권증가',
  receivable_payment_decrease: '채권감소',
};

console.log(tab_list_mapping[key as keyof typeof tab_list_mapping]);


// interface tabData {
//   label: string;
//   value: any;
// }
// const tab_data: tabData[] = [];
// tab_data.push({
//   label: tab_list_mapping[key],
//   value: {},
// });

// console.log(tab_data[0].label);


