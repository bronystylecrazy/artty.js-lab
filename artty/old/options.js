import { observe } from './reactive';
import { setHookId } from './hooks';

const options = {
    _hooks: observe({}),
    setHookId
};

export default options;