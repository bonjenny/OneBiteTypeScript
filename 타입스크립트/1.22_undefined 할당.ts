const result = {
  data: {
    add_codes: {
      payload: {
        http_payload: undefined,
        page_load_options: undefined,
      }
    }
  }
}
const {http_payload, page_load_options} = result.data.add_codes.payload ?? {undefined};

console.log(http_payload);
console.log(page_load_options);
