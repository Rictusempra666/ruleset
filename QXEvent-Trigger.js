// Quantumult X WiFi 名称切换节点脚本
// WiFi 名称与节点名称映射
const wifiNameToNode = {
    "706wifi_5G": "HK",   // WiFi 名称 -> 节点名称
    "OfficeWiFi": "美国节点",
    "CafeWiFi": "日本节点"
};

// 策略组名称
const strategyGroupName = "JD";

// 运行脚本主函数
const currentWifiName = $network.wifi.ssid;  // 获取当前 WiFi 名称
const targetNode = wifiNameToNode[currentWifiName];  // 获取目标节点名称

if (targetNode) {
    (async () => {
        const groups = $configuration.getPolicyGroups(); // 获取所有策略组
        const jdGroup = groups.find(group => group.name === strategyGroupName); // 找到指定的策略组

        if (jdGroup) {
            const availableNodes = jdGroup.items; // 策略组内的所有节点
            const targetNodeInfo = availableNodes.find(node => node.name === targetNode); // 找到目标节点

            if (targetNodeInfo) {
                // 切换节点
                await $configuration.setSelectPolicy(strategyGroupName, targetNodeInfo.name);
                $notify("WiFi 切换节点", `已切换至 ${currentWifiName} 的节点：${targetNode}`, "策略组已更新");
            } else {
                $notify("WiFi 切换节点失败", `未找到节点 ${targetNode} 在策略组 ${strategyGroupName} 中`, "请检查配置");
            }
        } else {
            $notify("WiFi 切换节点失败", `未找到策略组 ${strategyGroupName}`, "请检查配置");
        }
    })();
} else {
    $notify("WiFi 切换节点", `当前 WiFi：${currentWifiName} 无匹配节点配置`, "保持当前节点");
}

// 脚本结束
$done();
