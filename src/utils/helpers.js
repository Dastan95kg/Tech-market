import { omit } from 'lodash';

export const removeObjectProperty = (obj) => {
    const removedKeys = Object.keys(obj).filter(key => obj[key].length === 0);
    const newObj = omit(obj, removedKeys);
    return newObj;
};