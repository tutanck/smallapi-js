import { decode } from '../encryption/decode';
import { safe } from '../utils/index';

export default function setup(promise, config: any = {}) {
  return promise
    .then((res) => {
      const { _meta } = safe(res.data, {});

      if (_meta?.encripted === true) {
        const { token } = res.data;

        const { encryption } = config;

        const decoded = decode(token, encryption?.decodeKey);

        return decoded ? decoded.data : res.data;
      } else {
        // data is not encrypted
        return res.data;
      }
    })
    .catch((err) => {
      throw err;
    });
}
