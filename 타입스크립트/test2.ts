interface keyindex2 {
  [key: string]: any;
}

interface bd_enum_grp_c_without_index {
  tenant_sid?: string;
  grp_cd_sid?: string;
  disp_nm?: string;
  status_type?: string;
  remark_ctt?: string;
  refer_type?: string;
  conn_type?: string;
  conn_sid?: string;
  write_sid?: string;
  write_dtm?: Date;
  update_sid?: string;
  update_dtm?: Date;
}

interface bd_enum_grp_c_inter extends bd_enum_grp_c_without_index, keyindex2 {}

type b = {
  list: (keyof bd_enum_grp_c_without_index)[];
};

const bobj: b = {
  list: ['conn_sid', 'conn_type'],
};
