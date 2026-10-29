import { Component } from '@angular/core';
import { Workout } from '../../models/workout.interface';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
})
export class WorkoutsComponent {
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

  get totalWorkouts(): number {
    return this.workouts.length;
  }

  get completedWorkouts(): number {
    return this.workouts.filter((workout) => workout.completed).length;
  }

  get plannedWorkouts(): number {
    return this.workouts.filter((workout) => !workout.completed).length;
  }
}
