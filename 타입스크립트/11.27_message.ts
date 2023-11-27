export interface BoardRefDataDto {
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

export interface BoardRefMessageDto {
	data?: BoardRefDataDto[];
	type?: '05';
	isv5?: boolean;
	is_from_v5?: boolean;
	is_from_ref?: boolean;
	callback?: Function;
}

export interface IPostRef {
	type?: '05';
	Data: {
		BOARD_NM?: string;
		BOARD_CD?: number;
		BOARD_NUM?: number;
		BOARD_SEQ?: number;
		HID?: number;
		TITLE?: string;
	}[];
}

const receiveMessage: BoardRefMessageDto = {
  type: '05',
  data: [
    {
      board_cd: 1234,
      board_num: 789,
      board_seq: 1,
    },
    {
      board_cd: 1235,
      board_num: 790,
      board_seq: 2,
    }
  ]
}

const message: BoardRefMessageDto = {
  type: '05',
  data: [
    {
      board_cd: 1234,
      board_nm: '게시판',
      board_num: 789,
      board_seq: 1,
      hid: 7789899,
      title: '5.0 신규'
    },
    {
      board_cd: 1235,
      board_nm: '게시판',
      board_num: 790,
      board_seq: 2,
      hid: 7789900,
      title: '5.0 신규2'
    }
  ]
}

let result = {} as BoardRefMessageDto;
result = receiveMessage;
result = {
  ...receiveMessage,
  ...message
}

console.log(result);