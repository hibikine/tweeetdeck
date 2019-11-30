import actionCreatorFactory from 'typescript-fsa';
import ActionType from './actionType';
const actionCreator = actionCreatorFactory();
export const addTab = actionCreator(ActionType.AddTab);
export const removeTab = actionCreator(ActionType.RemoveTab);
