const endpoints = {
  user: {
    create: '/user',
    modify: '/user',
    login: '/user/login',
    forgotPassword: '/forgotPassword',
    refreshToken: '/user/token',
    compareCode: '/compareCode',
    newPassword: '/newPassword'
  },
  collections: {
    get: '/collection/list',
    post: '/collection',
    delete: '/collection',
    patch: '/collection'
  },
  todo: {
    get: '/todo',
    post: '/todo',
    delete: '/todo',
    patch: '/todo',
    patchCheck: '/todo/check'
  }
}

export default endpoints
