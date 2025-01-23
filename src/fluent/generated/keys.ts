import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '0602c49a931e4cfea90b5da36423cf26'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'd570f16314c94e96bc91f8dbcc23c2d2'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'cbc1a835591d4e97b7cddc2292de85c8'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '0037d8d23bd245fda9ef99e35d5d395f'
                    }
                }
            }
        }
    }
}
