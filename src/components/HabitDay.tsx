import { TouchableOpacity, Dimensions, TouchableOpacityProps } from 'react-native';
import { generateProgressPercentage } from '../utils/generate-progress-percentage';

import clsx from 'clsx';
import dayjs from 'dayjs';

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5);

interface HabitDayProps extends TouchableOpacityProps {
  date: Date;
  completed?: number;
  amount?: number;
};

export function HabitDay({ date, completed = 0, amount = 0, ...rest }: HabitDayProps) {
  const amountAccomplishedPercentage = generateProgressPercentage(amount, completed);
  const today = dayjs().startOf('day').toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  return (
    <TouchableOpacity
        {...rest}
        className={clsx("rounded-lg border-2 m-1", {
          ["bg-zinc-900 border-zinc-800"]: amountAccomplishedPercentage === 0,
          ["bg-violet-900 border-violet-700"]: amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,
          ["bg-violet-800 border-violet-600"]: amountAccomplishedPercentage >= 20 && amountAccomplishedPercentage < 40,
          ["bg-violet-700 border-violet-500"]: amountAccomplishedPercentage >= 40 && amountAccomplishedPercentage < 60,
          ["bg-violet-600 border-violet-500"]: amountAccomplishedPercentage >= 60 && amountAccomplishedPercentage < 80,
          ["bg-violet-500 border-violet-400"]: amountAccomplishedPercentage >= 80,
          ["border-white border-3"]: isCurrentDay,
        })}
        style={{ width: DAY_SIZE, height: DAY_SIZE }}
        activeOpacity={0.7}
    />
  );
}