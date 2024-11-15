const wifiNameToNode = {
    "706wifi_5G": "HK",
    "OfficeWiFi": "美国节点",
    "CafeWiFi": "日本节点"
};

// 手动指定 WiFi 名称来测试
const currentWifi = "706wifi_5G";  // 替换为想测试的 WiFi 名称
const targetNode = wifiNameToNode[currentWifi];

if (targetNode) {
    $configuration.sendMessage({
        action: "set_policy_state",
        content: {
            "JD": targetNode
        }
    }).then(response => {
        if (response.ret) {
            console.log(`已切换 JD 策略组到节点：${targetNode}`);
        } else {
            console.log("切换节点失败，可能是策略组名称或节点名称不正确");
        }
    }).catch(error => {
        console.error("发送切换策略组消息时出错：", error);
    });
} else {
    console.log(`当前 WiFi (${currentWifi}) 无对应节点设置`);
}
