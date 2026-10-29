import { Component } from '@angular/core';
import { Workout, ExerciseSet } from '../../models/workout.interface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  // Sample data for the dashboard statistics

  weeklyWorkoutGoal: number = 5;

  goalsCompleted: number = 3;
  totalGoals: number = 4;

  // Calculate the weekly workout completion percentage
  get workoutPercentage(): number {
    return (this.workoutsCompleted / this.weeklyWorkoutGoal) * 100;
  }

  workouts: Workout[] = [
    {
      id: 1,
      name: 'Chest & Triceps',
      durationMinutes: 55,
      category: 'Strength',
      completed: true,
    },
    {
      id: 2,
      name: 'Back & Biceps',
      durationMinutes: 60,
      category: 'Strength',
      completed: true,
    },
    {
      id: 3,
      name: 'Leg Day',
      durationMinutes: 50,
      category: 'Strength',
      completed: true,
    },
    {
      id: 4,
      name: 'Shoulders & Abs',
      durationMinutes: 45,
      category: 'Strength',
      completed: false,
    },
  ];

  exerciseSets: ExerciseSet[] = [
    {
      exerciseName: 'Bench Press',
      weightKg: 40,
      reps: 10,
    },
    {
      exerciseName: 'Incline Dumbbell Press',
      weightKg: 20,
      reps: 12,
    },
    {
      exerciseName: 'Barbell Squat',
      weightKg: 60,
      reps: 10,
    },
    {
      exerciseName: 'Lat Pulldown',
      weightKg: 45,
      reps: 12,
    },
  ];

  get trainingVolume(): number {
    return this.exerciseSets.reduce(
      (total, exercise) => total + exercise.weightKg * exercise.reps,
      0,
    );
  }

  // Select only workouts that have been completed.
  get completedWorkouts(): Workout[] {
    return this.workouts.filter((workout) => workout.completed);
  }

  // Count the completed workout objects.
  get workoutsCompleted(): number {
    return this.completedWorkouts.length;
  }

  // Add the duration of completed workouts.
  get trainingMinutes(): number {
    return this.completedWorkouts.reduce(
      (total, workout) => total + workout.durationMinutes,
      0,
    );
  }

  // Convert minutes into hours.
  get trainingHours(): number {
    return this.trainingMinutes / 60;
  }

  toggleWorkoutStatus(workout: Workout): void {
    workout.completed = !workout.completed;
  }
}
