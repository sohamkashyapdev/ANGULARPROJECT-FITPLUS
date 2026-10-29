import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomesComponent } from './pages/homes/homes.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { WorkoutPlansComponent } from './pages/workout-plans/workout-plans.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { AiCoachComponent } from './pages/ai-coach/ai-coach.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WorkoutsComponent } from './pages/workouts/workouts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ExercisesComponent,
    WorkoutPlansComponent,
    ProgressComponent,
    GoalsComponent,
    AiCoachComponent,
    NavbarComponent,
    SidebarComponent,
    WorkoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
