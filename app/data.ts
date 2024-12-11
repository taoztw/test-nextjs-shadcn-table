import { Payment } from "./payments/columns";
function generateRandomData(count = 10) {
  const domains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "example.com",
    "company.com",
  ];

  return Array.from({ length: count }, () => {
    // 生成随机 ID（8位十六进制）
    const id = Math.random().toString(16).slice(2, 10).toString();

    // 生成随机金额（1-1000）
    const amount = Math.floor(Math.random() * 1000) + 1;

    // 随机选择状态
    const statuses: Payment["status"][] = [
      "pending",
      "processing",
      "success",
      "failed",
    ];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    // 生成随机邮箱
    const randomString = Math.random().toString(36).substring(7);
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const email = `${randomString}@${domain}`;

    return {
      id,
      amount,
      status,
      email,
    };
  });
}

// 使用示例：生成10条随机数据
export const data: Payment[] = generateRandomData(30);
