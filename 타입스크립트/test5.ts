const prop = {} as any;
//2-3)prop[slip_link_cnt]이 있고, file_des가 null이 아니라면, cnt에 file 갯수를 더한다.
// if (
//   Object.hasOwnProperty(prop, 'inv_s_list$slip_link_cnt') &&
//   !_.vIsNull(prop['z_file_attach$z_file_attach$file_des'])
// ) {
//   const file_cnt = _.vSplit(prop['z_file_attach$z_file_attach$file_des'], '∬')?.length;
//   prop['inv_s_list$slip_link_cnt'] = prop['inv_s_list$slip_link_cnt'] + file_cnt;
// }

/**
 * [JavaScript] 문자열에서 특정 문자 개수 구하는 2가지 방법
 * https://gent.tistory.com/467
 */