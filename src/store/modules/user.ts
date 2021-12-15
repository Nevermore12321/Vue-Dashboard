// 处理用户登录、登出、用户权限、对应的路由表
export type UserState = {
  name: string; // 用户名
  token: string; // 用户登录 token
  roles: string[]; // 角色，鉴权
  avatar: string; // 头像
  company: string; // 公司
  department: string; // 部门
  // todo RouteTable
  routes?: string[]; // 路由表
};

// 初始化 UserState 状态
const state: UserState = {
  name: "",
  token: "",
  roles: [],
  avatar: "",
  company: "",
  department: "",
  routes: [],
};

const user = {
  namespaced: true,
  state,
  mutations: {},
  actions: {},
};

export default user;
