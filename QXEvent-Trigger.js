// Quantumult X WiFi 名称切换节点脚本
const wifiNameToNode = {
    "706wifi_5G": "HK",   // WiFi 名称 -> 节点集合名称
};

const groupName = "JD"; // 策略组名称

// 获取当前 Wi-Fi 名称
const currentWiFiName = $network.wifi.ssid;

// 匹配 Wi-Fi 名称并切换节点
if (wifiNameToNode[currentWiFiName]) {
    const nodeName = wifiNameToNode[currentWiFiName];
    $surge.setSelectGroupPolicy(groupName, nodeName);
    console.log(`已切换 ${groupName} 策略组到节点集合 ${nodeName}`);
} else {
    console.log(`当前Wi-Fi没有匹配的节点切换规则`);
}
