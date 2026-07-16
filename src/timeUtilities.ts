import { Temporal } from "@js-temporal/polyfill";
import answerIds from "./datasets/answerIds.json";

export const getAnswerIndexToday = (): number => {
  return Math.floor(Math.random() * answerIds.length);
};

export const getAnswerIdToday = (): number => {
  const dayIndex = getAnswerIndexToday();
  return answerIds[dayIndex];
};

export const getTimeUntilNextQuestion = (answerIndex: number): string => {
  return "NOW";
};
