import {
  computed
} from 'vue';
import {
  useStore
} from 'vuex';

const storeHook = () => {
  const store = useStore();

  return {
    hideMenu: computed(() => store.state.hideMenu),
  };
};

export default storeHook;
