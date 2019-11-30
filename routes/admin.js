const AdminBro = require('admin-bro')
const mongoose = require('mongoose')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: '/admin',
  branding:{
    companyName: "JS",
    logo:""
  },
  dashboard: {

    handler: async () => {},
    component: AdminBro.bundle("./DashBoard.jsx")
  }
})

const router = AdminBroExpress.buildRouter(adminBro)





module.exports = router
