import * as Actions from '../actions/tabs';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import produce from 'immer';

export type State = { tabs: number };
const INITIAL_STATE: State = { tabs: 1 };
export default reducerWithInitialState(INITIAL_STATE)
  .case(
    Actions.addTab,
    produce(draft => {
      draft.tabs += 1;
    })
  )
  .case(
    Actions.removeTab,
    produce(draft => {
      draft.tabs -= 1;
    })
  );
