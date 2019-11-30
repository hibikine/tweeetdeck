import tabs, { State as Tabs } from './tabs';
import { combineReducers } from 'redux';
export default combineReducers({ tabs });
export type State = { tabs: Tabs };
