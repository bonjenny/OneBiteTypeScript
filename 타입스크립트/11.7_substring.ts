export const enum EN_CODE_DISPLAY_OTHERS_TYPE {
	/**
	 * 입력한대로
	 * 0212345678
	 */
	Entered = '0',
	/**
	 * 분리기호적용
	 * 02-1234-5678
	 */
	Separator = '1',
	/**
	 * 국가번호+입력한대로
	 * + 82 0212345678
	 */
	CountryEntered = '2', //
	/**
	 * 국가번호+분리기호적용
	 * + 82 212345678
	 */
	CountrySeparator = '3',
}

export interface ITelNoFormatDataByNation {
	delimiter: string;
	national_number: string;
	display_type: EN_CODE_DISPLAY_OTHERS_TYPE;
}

/** 기호로 분리 */
function getSeperateFormatValue(value: string, format_data: ITelNoFormatDataByNation) {
	switch (value.length) {
		case 6:
			return `${value.substring(0, 3)}${format_data.delimiter}${value.substring(3)}`;
		case 7:
			return `${value.substring(0, 3)}${format_data.delimiter}${value.substring(3)}`;
		case 8:
			return `${value.substring(0, 4)}${format_data.delimiter}${value.substring(4)}`;
		case 9:
			if (value.substring(0, 4) == '0836')
				return `${value.substring(0, 4)}${format_data.delimiter}${value.substring(4)}`;
			return ['037', '049', '089', '082'].includes(value.substring(0, 3))
				? `${value.substring(0, 3)}${format_data.delimiter}${value.substring(3, 6)}${format_data.delimiter}${value.substring(6)}`
				: `${value.substring(0, 2)}${format_data.delimiter}${value.substring(2, 5)}${format_data.delimiter}${value.substring(5)}`;
		case 10:
			return ['037', '049', '089', '082'].includes(value.substring(0, 3))
				? `${value.substring(0, 3)}${format_data.delimiter}${value.substring(3, 6)}${format_data.delimiter}${value.substring(6)}`
				: `${value.substring(0, 2)}${format_data.delimiter}${value.substring(2, 6)}${format_data.delimiter}${value.substring(6)}`;
	}
}

const value = '0811234567';
const format_data = {
  delimiter: '-',
  display_type: EN_CODE_DISPLAY_OTHERS_TYPE.Entered,
  national_number: '886'
} as ITelNoFormatDataByNation;

console.log(getSeperateFormatValue(value, format_data));