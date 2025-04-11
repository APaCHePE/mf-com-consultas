// dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { IntroduceWidget } from './components/introducewidget';
import { StatsWidget } from './components/statswidget';
import { ProjectProgressWidget } from './components/ProjectProgressWidget';
import { RecentActivityWidget } from './components/recentactivitywidget';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ChartModule,
    CardModule,
    ProgressBarModule,
    TagModule,
    IntroduceWidget,
    StatsWidget,
    ProjectProgressWidget,
    RecentActivityWidget
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  // Datos para gráficos
  salesChartData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ventas 2023',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: '#6366F1',
        tension: 0.4
      }
    ]
  };

  projectProgress = [
    { name: 'Diseño UI', progress: 75, color: 'bg-blue-500' },
    { name: 'Desarrollo Backend', progress: 45, color: 'bg-purple-500' },
    { name: 'Testing QA', progress: 30, color: 'bg-green-500' },
    { name: 'Documentación', progress: 60, color: 'bg-yellow-500' }
  ];

  recentActivities = [
    { user: 'Carlos Pérez', action: 'completó el diseño del dashboard', time: '2 min ago', status: 'completed' },
    { user: 'María Gómez', action: 'envió el reporte de ventas', time: '10 min ago', status: 'completed' },
    { user: 'Juan Rodríguez', action: 'inició sesión', time: '25 min ago', status: 'login' },
    { user: 'Ana López', action: 'actualizó los requerimientos', time: '1 hora ago', status: 'updated' }
  ];
}