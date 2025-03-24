import React, { useEffect, useState } from 'react';
import { LogEntry, generateDummyData } from '../data/dummyData';
import '../styles/Stream.css';

const generateLogEntry = (id: number): LogEntry => {
  const newLog = generateDummyData()[0]; // Generate a single dummy log entry
  return { ...newLog, id, timestamp: new Date().toISOString() };
};

const LogStream: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    let id = 1;
    const interval = setInterval(() => {
      setLogs(prevLogs => {
        const newLog = generateLogEntry(id++);
        return [newLog, ...prevLogs].slice(0, 100); // Keep only the latest 100 logs
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='stream'>
      {logs.map(log => (
        <div key={log.id}>
          [{log.timestamp}] [{log.logLevel}] [{log.serviceName}] [{log.statusCode}] [{log.responseTime}ms] {log.message}
        </div>
      ))}
    </div>
  );
};

export default LogStream;
