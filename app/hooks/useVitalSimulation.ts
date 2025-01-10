import { useEffect, useState } from "react";

interface Vitals {
  hr: number;
  bp: string;
  temp: number;
  pain: number;
}

export function useVitalSimulation(initialVitals: Vitals) {
  const [vitals, setVitals] = useState(initialVitals);

  useEffect(() => {
    const interval = setInterval(() => {
      setVitals((current) => {
        // Random fluctuation between -2 and +2 for heart rate
        const hrChange = Math.random() * 4 - 2;
        const newHr = Math.round(current.hr + hrChange);

        // Random fluctuation of ±0.1 for temperature
        const tempChange = Math.random() * 0.2 - 0.1;
        const newTemp = Number((current.temp + tempChange).toFixed(1));

        // Random fluctuation for blood pressure
        const systolic = parseInt(current.bp.split("/")[0]);
        const diastolic = parseInt(current.bp.split("/")[1]);
        const systolicChange = Math.round(Math.random() * 4 - 2);
        const diastolicChange = Math.round(Math.random() * 2 - 1);
        const newBp = `${systolic + systolicChange}/${
          diastolic + diastolicChange
        }`;

        return {
          ...current,
          hr: newHr,
          bp: newBp,
          temp: newTemp,
        };
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return vitals;
}
