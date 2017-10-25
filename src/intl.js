import intl from 'react-intl-universal';
import en_US from "./locales/en-US.json";
import zh_CN from "./locales/zh-CN.json";

export const locales = {
  "en-US": en_US,
  "zh-CN": zh_CN,
}

export default {
  getViewIndexTitle() {
    return intl.get('VIEW_INDEX_TITLE');
  }
};

