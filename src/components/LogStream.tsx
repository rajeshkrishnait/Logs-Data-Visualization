import React, { useEffect, useState } from 'react';
import { LogEntry, generateDummyData } from '../data/dummyData';
import '../styles/Stream.css';

const generateLogEntry = (id: number): LogEntry => {
  const newLog = generateDummyData()[0]; // Generate a single dummy log entry
  return { ...newLog, id, timestamp: new Date().toISOString() };
};

const LogStream: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isStreaming, setIsStreaming] = useState(true);

  useEffect(() => {
    let id = 1;
    const interval = setInterval(() => {
      if (isStreaming) {
        setLogs(prevLogs => {
          const newLog = generateLogEntry(id++);
          return [newLog, ...prevLogs].slice(0, 100); // Keep only the latest 100 logs
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const handleClearLogs = () => {
    setLogs([]);
  };

  const toggleStreaming = () => {
    setIsStreaming(prev => !prev);
  };

  return (
    <div>
    <div className='stream'>
      {logs.map(log => (
        <div key={log.id}>
          [{log.timestamp}] [{log.logLevel}] [{log.serviceName}] [{log.statusCode}] [{log.responseTime}ms] {log.message}
        </div>
      ))}
    </div>
    <div className="stream-controls">
        <button onClick={handleClearLogs}>Clear Stream</button>
        <button onClick={toggleStreaming}>{isStreaming ? 'Pause' : 'Resume'} Stream</button>
      </div>
    </div>
  );
};

export default LogStream;
