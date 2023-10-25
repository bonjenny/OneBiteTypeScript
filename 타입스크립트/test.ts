interface keyindex {
  // [key: string]: any;
  a?: string;
  b?: string;
}

interface bd_enum_grp_c extends keyindex {
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

const bd_enum_grp_c_obj: bd_enum_grp_c = {};

type bd_enum_grp_c_subset = Omit<bd_enum_grp_c, keyof keyindex>;

const subset: bd_enum_grp_c_subset = {};

type a = {
  list: (keyof bd_enum_grp_c_subset)[];
};

const aobj: a = {
  list: [],
};
