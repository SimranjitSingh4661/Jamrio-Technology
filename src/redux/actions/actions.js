import {SAMPLE} from '../constants';

export function sample(data) {
  return {
    type: SAMPLE,
    payload: data,
  };
}
