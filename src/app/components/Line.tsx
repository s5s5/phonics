import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const WIDTH = 375;
const HEIGHT = 448;
const X_GAP = WIDTH / 4;
const Y_GAP = HEIGHT / 8;
const GRAY = "#9CA3AF";
const BLUE = "#FACC15";

const Line = ({
  from,
  to,
  completedCount,
}: {
  from?: number;
  to?: number;
  completedCount: number;
}) => {
  const [fromNumber, setFromNumber] = useState(0);
  const [toNumber, setToNumber] = useState(1);
  const [previousCompletedCount, setPreviousCompletedCount] = useState(0);

  const stroke =
    completedCount > previousCompletedCount
      ? [BLUE, GRAY, BLUE]
      : [GRAY, BLUE, GRAY];
  const strokeWidth =
    completedCount > previousCompletedCount ? [8, 3, 10] : [3, 8, 3];

  useEffect(() => {
    if (from !== undefined) {
      setFromNumber(from);
    }
    if (to !== undefined) {
      setToNumber(to);
    }
  }, [from, to]);

  useEffect(() => {
    if (completedCount === previousCompletedCount) {
      return;
    }
    setPreviousCompletedCount(completedCount);
  }, [completedCount, previousCompletedCount]);

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <motion.svg className="w-full h-full" viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
        <motion.line
          initial={{
            x1: X_GAP,
            y1: Y_GAP,
            x2: X_GAP * 3,
            y2: Y_GAP * 2 + Y_GAP,
            stroke: GRAY,
            strokeWidth: 3,
          }}
          animate={{
            x1: X_GAP,
            y1: Y_GAP * 2 * fromNumber + Y_GAP,
            x2: X_GAP * 3,
            y2: Y_GAP * 2 * toNumber + Y_GAP,
            stroke,
            strokeWidth,
          }}
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
};

export { Line };
