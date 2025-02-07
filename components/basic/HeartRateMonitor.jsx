import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Heart } from "lucide-react";

const HeartRateMonitor = () => {
  const [heartRate, setHeartRate] = useState(75);
  const [heartRateHistory, setHeartRateHistory] = useState([]);

  useEffect(() => {
    const updateHeartRate = () => {
      const newRate = Math.round(75 + Math.random() * 10 - 5); // Simulate fluctuation
      const now = new Date().toLocaleTimeString();
      
      setHeartRate(newRate);
      setHeartRateHistory(prevHistory => 
        [...prevHistory, { time: now, value: newRate }].slice(-20) // Keep last 20 entries
      );
    };

    const interval = setInterval(updateHeartRate, 100);
    return () => clearInterval(interval);
  }, []);

  const getHeartRateColor = (rate) => {
    if (rate < 60) return "text-blue-500"; // Low heart rate
    if (rate > 100) return "text-red-500"; // High heart rate
    return "text-green-500"; // Normal range
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className={`${getHeartRateColor(heartRate)} animate-pulse`} />
          Heart Rate Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <div className={`text-4xl font-bold ${getHeartRateColor(heartRate)}`}>
            {heartRate} BPM
          </div>
          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={heartRateHistory}>
                <XAxis dataKey="time" tick={{ fontSize: 12 }} interval="preserveStartEnd" />
                <YAxis 
                  domain={['auto', 'auto']} 
                  tick={{ fontSize: 12 }} 
                />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 text-sm">
            <span className="text-blue-500">Low (&lt;60)</span>
            <span className="text-green-500">Normal (60-100)</span>
            <span className="text-red-500">High (&gt;100)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeartRateMonitor;
