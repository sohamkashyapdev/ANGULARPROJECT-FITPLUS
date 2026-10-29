export interface Workout {
  id: number;
  name: string;
  durationMinutes: number;
  category: string;
  completed: boolean;
}

export interface ExerciseSet {
  exerciseName: string;
  weightKg: number;
  reps: number;
}
