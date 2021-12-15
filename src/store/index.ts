import { createStore } from "vuex";
import user, { UserState } from "@/store/modules/user";

interface AllState {
  user: UserState;
}

const store = createStore<AllState>({
  modules: {
    user,
  },
});

export default store;
