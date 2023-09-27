import { CHANGE_THEME } from './Types';
export const changeTheme = theme => {
  return {
    type: CHANGE_THEME,
    payload: theme
  }
}