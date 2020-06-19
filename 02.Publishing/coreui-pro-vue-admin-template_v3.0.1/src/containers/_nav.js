export default [{
  _name: 'CSidebarNav',
  _children: [
    {
      _name: 'CSidebarNavTitle',
      _children: ['System Configuration']
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/dashboard',
      fontIcon: 'icon-bg-dashboard',
      badge: {
        color: 'danger',
        text: '99+'
      }
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Clusters',
      to: '/sc_clusters/sc_clusters',
      fontIcon: 'icon-bg-clusters'
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Projects',
      route: '/sc_projects',
      fontIcon: 'icon-bg-applications',
      items: [{
          name: 'Projects Dashborad',
          to: '/sc_projects/sc_projects',
          badge: {
            color: 'danger',
            text: '1'
          }
      }]
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Integrations',
      to: '/sc_integrations/sc_integrations',
      icon: 'cil-object-group'
    },
    /*{
      _name: 'CSidebarNavDropdown',
      name: 'Integrations',
      to: '/sc_integrations/sc_integrations',
      icon: 'cil-object-group',
      _children: [
        {
            _name: 'CSidebarNavDropdown',
            name: '2Depth',
            route: '',
            icon: 'cil-spreadsheet',
            items: [
                {
                    name: '3Depth',
                    to: '',
                    badge: {
                        color: 'danger',
                        text: 'PRO'
                    }
                }
            ]
        }
      ]
    },*/
    {
      _name: 'CSidebarNavItem',
      name: 'Users',
      to: '/sc_users/sc_users',
      icon: 'cil-user'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Groups',
      to: '/sc_groups/sc_groups',
      icon: 'cil-library'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Roles',
      to: '/sc_roles/sc_roles',
      icon: 'cil-notes'
    },
    {
      _name: 'CSidebarNavTitle',
      _children: ['Applications']
    },
    {
      _name: 'CSidebarNavItem',
      name: 'CI/CD',
      to: '/ap_cicd/ap_cicd',
      fontIcon: 'icon-bg-storage'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Logging',
      to: '/ap_logging/ap_logging',
      fontIcon: 'icon-bg-logging'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Monitoring',
      to: '/ap_monitoring/ap_monitoring',
      fontIcon: 'icon-bg-monitoring'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Apps',
      to: '/ap_apps/ap_apps',
      icon: 'cil-lan'
    },
    {
      _name: 'CSidebarNavTitle',
      _children: ['Project Configuration']
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Settings',
      to: '/pc_settings/pc_settings',
      icon: 'cil-settings'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Authority',
      to: '/pc_authority/pc_authority',
      icon: 'cil-list-numbered'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Roles',
      to: '/pc_roles/pc_roles',
      icon: 'cil-notes'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Groups',
      to: '/pc_groups/pc_groups',
      icon: 'cil-library'
    },
    {
      _name: 'CSidebarNavTitle',
      _children: ['Realm Configuration']
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Clusters',
      to: '/rc_clusters/rc_clusters',
      fontIcon: 'icon-bg-clusters'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Projects',
      to: '/rc_projects/rc_projects',
      fontIcon: 'icon-bg-applications'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Integrations',
      to: '/rc_integrations/rc_integrations',
      icon: 'cil-object-group'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Users',
      to: '/rc_users/rc_users',
      icon: 'cil-user'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Roles',
      to: '/rc_roles/rc_roles',
      icon: 'cil-notes'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Groups',
      to: '/rc_groups/rc_groups',
      icon: 'cil-library'
    },
    {
      _name: 'CSidebarNavTitle',
      _children: ['Platform Configuration']
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Realms',
      to: '/pl_realms/pl_realms',
      icon: 'cil-center-focus'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Menus',
      to: '/pl_menus/pl_menus',
      icon: 'cil-justify-left'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Preferences',
      to: '/pl_preferences/pl_preferences',
      icon: 'cil-settings'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Namespaces',
      to: '/pl_namespaces/pl_namespaces',
      fontIcon: 'icon-bg-namespaces'
    },
  ]
}]