interface BoardRefDataDto {
	com_code?: string;
	board_cd?: number;
	board_nm?: string;
	board_num?: number;
	board_seq?: number;
	class_seq?: number;
	ref_post_menu_type?: string;
	hid?: number;
	title?: string;
	isv5?: boolean;
}

interface BoardRefMessageDto {
	data?: BoardRefDataDto[];
	type?: '05';
	isv5?: boolean;
	is_from_v5?: boolean;
	is_from_ref?: boolean;
	callback?: Function;
}

interface IPostRef {
	type: '05';
	Data: {
		BOARD_NM: string;
		BOARD_CD: number;
		BOARD_NUM: number;
		BOARD_SEQ: number;
		HID: number;
		TITLE: string;
	}[];
}

const message: IPostRef = {
  type: '05',
  Data: [
    {
      BOARD_CD: 1234,
      BOARD_NM: '게시판',
      BOARD_NUM: 789,
      BOARD_SEQ: 1,
      HID: 7789899,
      TITLE: '5.0 신규'
    },
    {
      BOARD_CD: 1235,
      BOARD_NM: '게시판',
      BOARD_NUM: 790,
      BOARD_SEQ: 2,
      HID: 7789900,
      TITLE: '5.0 신규2'
    }
  ]
}

let result = {} as BoardRefMessageDto;

result = {
  type: message.type,
  data: message.Data.map((obj) => {
    return {
      board_cd: obj.BOARD_CD,
      board_nm: obj.BOARD_NM,
      board_num: obj.BOARD_NUM,
      board_seq: obj.BOARD_SEQ,
      hid: obj.HID,
      title: obj.TITLE,
    };
  })
}

console.log(result);