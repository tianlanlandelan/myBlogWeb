/**
 * 配置文件，该文件描述后台接口地址等配置
 */
/**
 * 主配置
 */
var myConfig = {
        "hostUrl":"http://127.0.0.1:8080"
    };
/**
 * 请求接口
 */
var myRequestUrl ={
        "articleInfo":{
            "getAll":myConfig.hostUrl + "/articleInfo/getAll",
            "insert":myConfig.hostUrl + "/articleInfo/insert",
            "getById":myConfig.hostUrl + "/articleInfo/getById",
        }
    };






var leftMenuValue = [
    {"name":"内容管理","value":"0","index":0,"children":[
        {"name":"文章管理","value":"1","url":"/a"
        },
        {"name":"评论管理","value":"2","url":"/b"
        },
        {"name":"分类管理","value":"3","url":"/b"
        },
        {"name":"标签管理","value":"4","url":"/b"
        }
    ]},
    {"name":"用户管理","value":"10","index":0,"children":[
        {"name":"用户列表","value":"11","url":"/b"
        }
    ]},
    {"name":"数据统计","value":"20","index":0,"children":[
        {"name":"访问量","value":"21","url":"/b"
        }
    ]},
    {"name":"设置","value":"30","index":0,"children":[
        {"name":"博客设置","value":"31","url":"/a"
        }
    ]}
    ];
