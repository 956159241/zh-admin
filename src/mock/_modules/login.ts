export default [
    // 登录接口
    {
        url: '/apiMock/login/index',
        type: 'get',
        response: (conditions: any) => {
            const result = {
                success: true,
                errorCode: '',
                errorMessage: '',
                exceptionMessage: '',
                data: {
                    token: '12313',
                    orgstaFullName: 'zzh',
                    realName: '张中华',
                    userCalList: [
                        { calCode: '001', calName: '机构一', },
                        { calCode: '002', calName: '机构二', }
                    ],
                },
            };

            return result;
        },
    },
    // 切换用户环境/机构
    {
        url: '/apiMock/login/changeCal',
        type: 'post',
        response: (conditions: any) => {
            const result = {
                success: true,
                errorCode: '',
                errorMessage: '',
                exceptionMessage: '',
                data: {
                    token: '12313',
                    orgstaFullName: 'zzh',
                    userCalList: [
                        { calCode: '001', calName: '机构一', },
                        { calCode: '002', calName: '机构二', }
                    ],
                },
            };

            return result;
        },
    },
    // 获取通用/全局信息
    {
        url: '/apiMock/permission/findCalRootPermission',
        type: 'post',
        response: (conditions: any) => {
            const result = {
                success: true,
                errorCode: '',
                errorMessage: '',
                exceptionMessage: '',
                data: {
                    id: '001',
                },
            };

            return result;
        },
    },
    {
        url: '/apiMock/login/getMenus',
        type: 'get',
        response: (conditions: any) => {
            // 首页
            const index = [
                {
                    'id': '0011',
                    'systemId': '001',
                    'parentId': '001',
                    'permsionName': '首页',
                    'url': '/dashboard',
                    'filePath': 'views/dashboard/index',
                    'menuType': 1,
                    'permsionCode': 'dashboard',
                    'sourceBy': null,
                    'sortNo': 1,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
            ];

            // 权限管理
            const auth = [
                {
                    'id': '002',
                    'systemId': '002',
                    'parentId': '001',
                    'permsionName': '权限管理',
                    'url': '/authorityManagement',
                    'menuType': 1,
                    'permsionCode': 'NJHS:/publicSystems/authorityManagement',
                    'sourceBy': null,
                    'sortNo': 2,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                // {
                //     'id': '0021',
                //     'systemId': '0021',
                //     'parentId': '002',
                //     'permsionName': '用户管理',
                //     'url': '/userManagement1',
                //     'routeName': 'userManagement',
                //     'filePath': 'views/authorityManagement/userManagement',
                //     'menuType': 2,
                //     'permsionCode': 'NJHS:/authorityManagement/userManagement',
                //     'sourceBy': null,
                //     'sortNo': 1,
                //     'icon': 'menu',
                //     'description': null,
                //     'isEbl': 1,
                //     'isDel': 0,
                // },
                {
                    'id': '0022',
                    'systemId': '0022',
                    'parentId': '002',
                    'permsionName': '角色管理',
                    'url': '/roleManagement',
                    'filePath': 'views/authorityManagement/roleManagement',
                    'routeName': 'roleManagement',
                    'menuType': 2,
                    'permsionCode': 'NJHS:/publicSystems/authorityManagement/roleManagement',
                    'sourceBy': null,
                    'sortNo': 2,
                    'icon': 'iconfont icondingdan',
                    'description': '经理销售代表等',
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '0023',
                    'systemId': '0023',
                    'parentId': '002',
                    'permsionName': '菜单管理',
                    'routeName': 'userManagement2',
                    'url': '/menuManagement',
                    'filePath': 'views/authorityManagement/menuManagement',
                    'menuType': 2,
                    'permsionCode': 'NJHS:/publicSystems/authorityManagement/menuManagement',
                    'sourceBy': null,
                    'sortNo': 2,
                    'icon': 'iconfont icondingdan',
                    'description': '经理销售代表等',
                    'isEbl': 1,
                    'isDel': 0,
                },
            ];

            // 多级菜单
            const menuList = [
                {
                    'id': '0012',
                    'parentId': '001',
                    'permsionName': '多级菜单',
                    'url': '/menuList',
                    'menuType': 1,
                    'permsionCode': 'menuList',
                    'sourceBy': null,
                    'sortNo': 3,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '00121',
                    'parentId': '0012',
                    'permsionName': '菜单1.1',
                    'routeName': 'menuListPage1',
                    'menuType': 2,
                    'permsionCode': 'menuList',
                    'url': '/menuList',
                    'filePath': 'views/menuList/menu1',
                    'sourceBy': null,
                    'sortNo': 1,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '00122',
                    'parentId': '0012',
                    'permsionName': '目录',
                    'menuType': 1,
                    'permsionCode': 'menuList1',
                    'sourceBy': null,
                    'sortNo': 2,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '001221',
                    'parentId': '00122',
                    'permsionName': '菜单1.1.1',
                    'routeName': 'menuListPage2',
                    'menuType': 2,
                    'url': '/menuList1',
                    'filePath': 'views/menuList/menu2',
                    'permsionCode': 'menuList2',
                    'sourceBy': null,
                    'sortNo': 2,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
            ];

            // 外部界面
            const outerPage = [
                {
                    'id': '0013',
                    'parentId': '001',
                    'permsionName': '外部界面',
                    'url': '/outerPage',
                    'menuType': 1,
                    'permsionCode': 'outerPage',
                    'sourceBy': null,
                    'sortNo': 4,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '00131',
                    'parentId': '0013',
                    'permsionName': '页面一',
                    'routeName': 'outerPage1',
                    'menuType': 2,
                    'permsionCode': 'menuList',
                    'url': '/page1',
                    'filePath': 'views/outerPage/page1',
                    'sourceBy': null,
                    'sortNo': 1,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
            ];

            // 功能界面
            const functionPage = [
                {
                    'id': '0014',
                    'parentId': '001',
                    'permsionName': '功能',
                    'url': '/funcPage',
                    'menuType': 1,
                    'permsionCode': 'funcPage',
                    'sourceBy': null,
                    'sortNo': 5,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '00141',
                    'parentId': '0014',
                    'permsionName': '打字机',
                    'routeName': 'textPrinter',
                    'menuType': 2,
                    'permsionCode': 'funcPage',
                    'url': '/textPrinter',
                    'filePath': 'views/funcPage/textPrinter',
                    'sourceBy': null,
                    'sortNo': 1,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
            ];

            // 图表
            const graph = [
                {
                    'id': '0015',
                    'parentId': '001',
                    'permsionName': '图表',
                    'url': '/graph',
                    'menuType': 1,
                    'permsionCode': 'graph',
                    'sourceBy': null,
                    'sortNo': 5,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '00151',
                    'parentId': '0015',
                    'permsionName': 'echarts',
                    'menuType': 1,
                    'permsionCode': '0015',
                    'sourceBy': null,
                    'sortNo': 1,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '001510',
                    'parentId': '00151',
                    'permsionName': '折线图',
                    'routeName': 'lineChart',
                    'menuType': 2,
                    'url': '/lineChart',
                    'filePath': 'views/graph/echarts/lineChart',
                    'permsionCode': 'lineChart',
                    'sourceBy': null,
                    'sortNo': 1,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
            ];

            // 图形编辑器
            // const graphicalEditor = [
            //     {
            //         'id': '0014',
            //         'parentId': '001',
            //         'permsionName': '功能',
            //         'url': '/funcPage',
            //         'menuType': 1,
            //         'permsionCode': 'funcPage',
            //         'sourceBy': null,
            //         'sortNo': 5,
            //         'icon': 'icon-menu',
            //         'description': null,
            //         'isEbl': 1,
            //         'isDel': 0,
            //     },
            //     {
            //         'id': '00141',
            //         'parentId': '0014',
            //         'permsionName': '打字机',
            //         'routeName': 'textPrinter',
            //         'menuType': 2,
            //         'permsionCode': 'funcPage',
            //         'url': '/textPrinter',
            //         'filePath': 'views/funcPage/textPrinter',
            //         'sourceBy': null,
            //         'sortNo': 1,
            //         'icon': 'icon-menu',
            //         'description': null,
            //         'isEbl': 1,
            //         'isDel': 0,
            //     },
            // ];

            // web渐进式应用
            const pwa = [
                {
                    'id': '0016',
                    'parentId': '001',
                    'permsionName': 'PWA',
                    'url': '/pwa',
                    'menuType': 1,
                    'permsionCode': 'pwa',
                    'sourceBy': null,
                    'sortNo': 6,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '00161',
                    'parentId': '0016',
                    'permsionName': '桌面提示',
                    'routeName': 'notification',
                    'menuType': 2,
                    'permsionCode': 'notification',
                    'url': '/notification',
                    'filePath': 'views/pwa/notification',
                    'sourceBy': null,
                    'sortNo': 1,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
            ];

            // 动画
            const animation = [
                {
                    'id': '0017',
                    'parentId': '001',
                    'permsionName': '动画',
                    'url': '/animation',
                    'menuType': 1,
                    'permsionCode': 'animation',
                    'sourceBy': null,
                    'sortNo': 7,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
                {
                    'id': '00171',
                    'parentId': '0017',
                    'permsionName': 'AOS',
                    'routeName': 'aos',
                    'menuType': 2,
                    'permsionCode': 'aos',
                    'url': '/aos',
                    'filePath': 'views/animation/aos',
                    'sourceBy': null,
                    'sortNo': 1,
                    'icon': 'icon-menu',
                    'description': null,
                    'isEbl': 1,
                    'isDel': 0,
                },
            ];

            const result = {
                success: true,
                errorCode: '',
                errorMessage: '',
                exceptionMessage: '',
                data: [
                    ...index,
                    ...auth,
                    ...menuList,
                    ...outerPage,
                    ...functionPage,
                    ...graph,
                    // ...graphicalEditor,
                    ...pwa,
                    ...animation,
                ],
            };

            return result;
        },
    },
];
