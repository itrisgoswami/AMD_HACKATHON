import { useState, useEffect } from 'react';
import { formatTime } from '../utils/formatTime';

export const NIGHT_HOUR = 20;

/**
 * Custom hook to track current time, formatted string, and night mode status.
 * @returns {Object} { currentHour, timeString, isNightMode, currentDate }
 */
export const useTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const currentHour = currentDate.getHours();
  const timeString = formatTime(currentDate);
  const isNightMode = currentHour >= NIGHT_HOUR;

  return { currentHour, timeString, isNightMode, currentDate };
};
