const dto: {
  param: {
    number_gen_sub_info: {
      symbol1: '1',
    }
  }
}
console.log('{0}[1]'.format('기호{0}', 1), dto.param.number_gen_sub_info.symbol1);
