// Quantumult X WiFi 名称切换节点脚本
const wifiNameToNode = {
    "706wifi_5G": "HK",   // WiFi 名称 -> 节点名称
    "OfficeWiFi": "美国节点",
    "CafeWiFi": "日本节点"
};

const currentSSID = $network.wifi.ssid; // 获取当前连接的 WiFi 名称

if (wifiNameToNode[currentSSID]) {
    $configuration.sendMessage({
        action: "set_policy_state",
        content: { "策略组名称": wifiNameToNode[currentSSID] }  // 根据 WiFi 名称切换节点
    }).then((resp) => {
        $done({ title: "节点切换成功", message: `当前 WiFi：${currentSSID}, 已切换到：${wifiNameToNode[currentSSID]}` });
    }).catch((err) => {
        $done({ title: "节点切换失败", message: `错误信息：${err}` });
    });
} else {
    $done({ title: "WiFi 名称不匹配", message: "未定义的 WiFi，保持原节点" });
}
