import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')


// System Configuration
// Dashboard
const SC_Dashboard = () => import('@/views/Dashboard')
// Clusters
const SC_Clusters = () => import('@/views/sc_clusters/Clusters')
// Projects
const SC_Projects = () => import('@/views/sc_projects/Projects')
// Integrations
const SC_Integrations = () => import('@/views/sc_integrations/Integrations')
// Users
const SC_Users = () => import('@/views/sc_users/Users')
// Groups
const SC_Groups = () => import('@/views/sc_groups/Groups')
// Roles
const SC_Roles = () => import('@/views/sc_roles/Roles')


// Applications
// CI/CD
const AP_CICD = () => import('@/views/ap_cicd/CICD')
// Logging
const AP_Logging = () => import('@/views/ap_logging/Logging')
// Monitoring
const AP_Monitoring = () => import('@/views/ap_monitoring/Monitoring')
// Apps
const AP_Apps = () => import('@/views/ap_apps/App')


// Project Configuration
// Settings
const PC_Settings = () => import('@/views/pc_settings/Settings')
// Authority
const PC_Authority = () => import('@/views/pc_authority/Authority')
// Roles
const PC_Roles = () => import('@/views/pc_roles/Roles')
// Groups
const PC_Groups = () => import('@/views/pc_groups/Groups')


// Realm Configuration
// Clusters
const RC_Clusters = () => import('@/views/rc_clusters/Clusters')
// Projects
const RC_Projects = () => import('@/views/rc_projects/Projects')
// Integrations
const RC_Integrations = () => import('@/views/rc_integrations/Integrations')
// Users
const RC_Users = () => import('@/views/rc_users/Users')
// Roles
const RC_Roles = () => import('@/views/rc_roles/Roles')
// Groups
const RC_Groups = () => import('@/views/rc_groups/Groups')


// Platform Configuration
// Realms
const PL_Realms = () => import('@/views/pl_realms/Realms')
const PL_RealmsDetails = () => import('@/views/pl_realms/RealmsDetails')
// Menus
const PL_Menus = () => import('@/views/pl_menus/Menus')
// Preferences
const PL_Preferences = () => import('@/views/pl_preferences/Preferences')
// Namespaces
const PL_Namespaces = () => import('@/views/pl_namespaces/Namespaces')


// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')


Vue.use(Router)

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'Home',
            component: TheContainer,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: SC_Dashboard
                },
                {
                    path: 'sc_clusters',
                    redirect: '/sc_clusters/sc_clusters',
                    name: 'Clusters',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/sc_clusters/sc_clusters',
                            name: 'Clusters',
                            component: SC_Clusters
                        }
                    ]
                },
                {
                    path: 'sc_projects',
                    redirect: '/sc_projects/sc_projects',
                    name: 'Projects',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/sc_projects/sc_projects',
                            name: 'Projects',
                            component: SC_Projects
                        }
                    ]
                },
                {
                    path: 'sc_integrations',
                    redirect: '/sc_integrations/sc_integrations',
                    name: 'Integrations',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/sc_integrations/sc_integrations',
                            name: 'Integrations',
                            component: SC_Integrations
                        }
                    ]
                },
                {
                    path: 'sc_users',
                    redirect: '/sc_users/sc_users',
                    name: 'Users',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/sc_users/sc_users',
                            name: 'Users',
                            component: SC_Users
                        }
                    ]
                },
                {
                    path: 'sc_groups',
                    redirect: '/sc_groups/sc_groups',
                    name: 'Groups',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/sc_groups/sc_groups',
                            name: 'Groups',
                            component: SC_Groups
                        }
                    ]
                },
                {
                    path: 'sc_roles',
                    redirect: '/sc_roles/sc_roles',
                    name: 'Roles',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/sc_roles/sc_roles',
                            name: 'Roles',
                            component: SC_Roles
                        }
                    ]
                },
                {
                    path: 'ap_cicd',
                    redirect: '/ap_cicd/ap_cicd',
                    name: 'CICD',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/ap_cicd/ap_cicd',
                            name: 'CICD',
                            component: AP_CICD
                        }
                    ]
                },
                {
                    path: 'ap_logging',
                    redirect: '/ap_logging/ap_logging',
                    name: 'Logging',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/ap_logging/ap_logging',
                            name: 'Logging',
                            component: AP_Logging
                        }
                    ]
                },
                {
                    path: 'ap_monitoring',
                    redirect: '/ap_monitoring/ap_monitoring',
                    name: 'Monitoring',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/ap_monitoring/ap_monitoring',
                            name: 'Monitoring',
                            component: AP_Monitoring
                        }
                    ]
                },
                {
                    path: 'ap_apps',
                    redirect: '/ap_apps/ap_apps',
                    name: 'Apps',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/ap_apps/ap_apps',
                            name: 'Apps',
                            component: AP_Apps
                        }
                    ]
                },
                {
                    path: 'pc_settings',
                    redirect: '/pc_settings/pc_settings',
                    name: 'Settings',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/pc_settings/pc_settings',
                            name: 'Settings',
                            component: PC_Settings
                        }
                    ]
                },
                {
                    path: 'pc_authority',
                    redirect: '/pc_authority/pc_authority',
                    name: 'Authority',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/pc_authority/pc_authority',
                            name: 'Authority',
                            component: PC_Authority
                        }
                    ]
                },
                {
                    path: 'pc_roles',
                    redirect: '/pc_roles/pc_roles',
                    name: 'Roles',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/pc_roles/pc_roles',
                            name: 'Roles',
                            component: PC_Roles
                        }
                    ]
                },
                {
                    path: 'pc_groups',
                    redirect: '/pc_groups/pc_groups',
                    name: 'Groups',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/pc_groups/pc_groups',
                            name: 'Groups',
                            component: PC_Groups
                        }
                    ]
                },
                {
                    path: 'rc_clusters',
                    redirect: '/rc_clusters/rc_clusters',
                    name: 'Clusters',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/rc_clusters/rc_clusters',
                            name: 'Clusters',
                            component: RC_Clusters
                        }
                    ]
                },
                {
                    path: 'rc_projects',
                    redirect: '/rc_projects/rc_projects',
                    name: 'Projects',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/rc_projects/rc_projects',
                            name: 'Projects',
                            component: RC_Projects
                        }
                    ]
                },
                {
                    path: 'rc_integrations',
                    redirect: '/rc_integrations/rc_integrations',
                    name: 'Integrations',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/rc_integrations/rc_integrations',
                            name: 'Integrations',
                            component: RC_Integrations
                        }
                    ]
                },
                {
                    path: 'rc_users',
                    redirect: '/rc_users/rc_users',
                    name: 'Users',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/rc_users/rc_users',
                            name: 'Users',
                            component: RC_Users
                        }
                    ]
                },
                {
                    path: 'rc_roles',
                    redirect: '/rc_roles/rc_roles',
                    name: 'Roles',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/rc_roles/rc_roles',
                            name: 'Roles',
                            component: RC_Roles
                        }
                    ]
                },
                {
                    path: 'rc_groups',
                    redirect: '/rc_groups/rc_groups',
                    name: 'Groups',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/rc_groups/rc_groups',
                            name: 'Groups',
                            component: RC_Groups
                        }
                    ]
                },
                {
                    path: 'pl_realms',
                    redirect: '/pl_realms/pl_realms',
                    name: 'Realms',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/pl_realms/pl_realms',
                            name: 'Realms',
                            component: PL_Realms
                        },
                        {
                            path: '/pl_realms/pl_realms_details',
                            name: 'Realms Details',
                            component: PL_RealmsDetails
                        }
                    ]
                },
                {
                    path: 'pl_menus',
                    redirect: '/pl_menus/pl_menus',
                    name: 'Menus',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/pl_menus/pl_menus',
                            name: 'Menus',
                            component: PL_Menus
                        }
                    ]
                },
                {
                    path: 'pl_preferences',
                    redirect: '/pl_preferences/pl_preferences',
                    name: 'Preferences',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/pl_preferences/pl_preferences',
                            name: 'Preferences',
                            component: PL_Preferences
                        }
                    ]
                },
                {
                    path: 'pl_namespaces',
                    redirect: '/pl_namespaces/pl_namespaces',
                    name: 'Namespaces',
                    component: {
                        render (c) { return c('router-view') }
                    },
                    children: [
                        {
                            path: '/pl_namespaces/pl_namespaces',
                            name: 'Namespaces',
                            component: PL_Namespaces
                        }
                    ]
                }
            ],
        },
        {
            path: '*',
            name: 'Page404',
            component: Page404
        },
        {
            path: '',
            name: 'Page500',
            component: Page500
        },
        {
            path: 'login',
            name: 'Login',
            component: Login
        },
        {
            path: 'register',
            name: 'Register',
            component: Register
        }
    ]
})
