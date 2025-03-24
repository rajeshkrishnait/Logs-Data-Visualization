export interface LogEntry {
  id: number;
  timestamp: string;
  logLevel: 'INFO' | 'WARN' | 'ERROR';
  message: string;
  serviceName: string;
  traceId: string;
  spanId: string;
  host: string;
  ipAddress: string;
  userId?: number;
  requestPath?: string;
  responseTime?: number;
  statusCode?: number;
  environment: 'production' | 'staging' | 'development';
  errorDetails?: string;
  cpuUsage?: number;
  memoryUsage?: number;
  threadId: number;
  processId: number;
}

const getRandomIP = () => `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
const getRandomTraceId = () => Math.random().toString(36).substring(2, 15);
const getRandomStatusCode = () => [200, 201, 400, 401, 403, 404, 500][Math.floor(Math.random() * 7)];
const getRandomResponseTime = () => Math.floor(Math.random() * 500); // Random response time between 0-500ms
const getRandomErrorDetails = () => "Stack trace: Error at function XYZ";

export const generateDummyData = (): LogEntry[] => {
  const logLevels: LogEntry['logLevel'][] = ['INFO', 'WARN', 'ERROR'];
  const services = ['AuthService', 'PaymentService', 'UserService'];
  const environments: LogEntry['environment'][] = ['production', 'staging', 'development'];

  return Array.from({ length: 100 }, (_, index) => {
    const logLevel = logLevels[Math.floor(Math.random() * logLevels.length)];
    return {
      id: index + 1,
      timestamp: new Date(Date.now() - Math.random() * 1e10).toISOString(),
      logLevel,
      message: `Sample log message ${index + 1}`,
      serviceName: services[Math.floor(Math.random() * services.length)],
      traceId: getRandomTraceId(),
      spanId: getRandomTraceId(),
      host: `server-${Math.floor(Math.random() * 10)}`,
      ipAddress: getRandomIP(),
      userId: Math.random() > 0.5 ? Math.floor(Math.random() * 10000) : undefined,
      requestPath: `/api/${services[Math.floor(Math.random() * services.length)].toLowerCase()}`,
      responseTime: getRandomResponseTime(),
      statusCode: getRandomStatusCode(),
      environment: environments[Math.floor(Math.random() * environments.length)],
      errorDetails: logLevel === 'ERROR' ? getRandomErrorDetails() : undefined,
      cpuUsage: Math.random() * 100,
      memoryUsage: Math.random() * 1000,
      threadId: Math.floor(Math.random() * 5000),
      processId: Math.floor(Math.random() * 1000),
    };
  });
};
