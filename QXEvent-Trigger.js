const wifiNameToNode = {
    "706wifi_5G": "HK",   // WiFi 名称 -> 节点名称
    "OfficeWiFi": "美国节点",
    "CafeWiFi": "日本节点"
};

// 获取当前的 WiFi 名称
const currentWifiName = $network.wifi.ssid;

// 日志输出当前的 WiFi 名称
console.log(`当前 WiFi 名称: ${currentWifiName}`);
$notify("WiFi 调试信息", "当前 WiFi 名称", currentWifiName);

// 检查是否有匹配的节点
if (wifiNameToNode[currentWifiName]) {
    const nodeName = wifiNameToNode[currentWifiName];
    console.log(`匹配到的节点名称: ${nodeName}`);
    $notify("WiFi 切换节点", `已匹配 WiFi 名称：${currentWifiName}`, `将切换到节点：${nodeName}`);

    // 切换到指定节点
    $surge.setSelectGroupPolicy("JD", nodeName);
} else {
    console.log("当前 WiFi 名称没有匹配到节点。");
    $notify("WiFi 切换节点", `当前 WiFi 名称：${currentWifiName}`, "没有找到匹配的节点");
}
