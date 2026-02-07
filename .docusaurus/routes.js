import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd52'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4ce'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '5e6'),
            routes: [
              {
                path: '/docs/capstone/',
                component: ComponentCreator('/docs/capstone/', '173'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/capstone/project',
                component: ComponentCreator('/docs/capstone/project', 'ec5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/capstone-integration--application',
                component: ComponentCreator('/docs/category/capstone-integration--application', '58b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/introduction',
                component: ComponentCreator('/docs/category/introduction', 'f51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/module-1-the-robotic-nervous-system-ros-2',
                component: ComponentCreator('/docs/category/module-1-the-robotic-nervous-system-ros-2', '69a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/module-2-the-digital-twin-gazebo--unity',
                component: ComponentCreator('/docs/category/module-2-the-digital-twin-gazebo--unity', '93c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/module-3-the-ai-robot-brain-nvidia-isaac',
                component: ComponentCreator('/docs/category/module-3-the-ai-robot-brain-nvidia-isaac', '44d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', '135'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/overview',
                component: ComponentCreator('/docs/intro/overview', '002'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros/',
                component: ComponentCreator('/docs/module-1-ros/', 'df5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros/architecture',
                component: ComponentCreator('/docs/module-1-ros/architecture', '8d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros/concepts-diagrams',
                component: ComponentCreator('/docs/module-1-ros/concepts-diagrams', 'd0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros/exercises',
                component: ComponentCreator('/docs/module-1-ros/exercises', 'ae1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros/nodes-topics',
                component: ComponentCreator('/docs/module-1-ros/nodes-topics', '187'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros/python-agents',
                component: ComponentCreator('/docs/module-1-ros/python-agents', 'ca8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-1-ros/urdf-basics',
                component: ComponentCreator('/docs/module-1-ros/urdf-basics', '0ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/',
                component: ComponentCreator('/docs/module-2-simulation/', 'e3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/beginner-explanations',
                component: ComponentCreator('/docs/module-2-simulation/beginner-explanations', '926'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/gazebo-unity',
                component: ComponentCreator('/docs/module-2-simulation/gazebo-unity', '8ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/physics-properties',
                component: ComponentCreator('/docs/module-2-simulation/physics-properties', '4c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/physics-sim',
                component: ComponentCreator('/docs/module-2-simulation/physics-sim', 'adc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/sensor-sim',
                component: ComponentCreator('/docs/module-2-simulation/sensor-sim', '6db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/sim-to-real-challenges',
                component: ComponentCreator('/docs/module-2-simulation/sim-to-real-challenges', '5a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-2-simulation/workflow-diagrams',
                component: ComponentCreator('/docs/module-2-simulation/workflow-diagrams', '41c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/',
                component: ComponentCreator('/docs/module-3-ai-brain/', '27f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/conceptual-diagrams',
                component: ComponentCreator('/docs/module-3-ai-brain/conceptual-diagrams', '055'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/isaac-sim',
                component: ComponentCreator('/docs/module-3-ai-brain/isaac-sim', '1be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/navigation',
                component: ComponentCreator('/docs/module-3-ai-brain/navigation', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/obstacle-avoidance',
                component: ComponentCreator('/docs/module-3-ai-brain/obstacle-avoidance', '74f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/perception',
                component: ComponentCreator('/docs/module-3-ai-brain/perception', 'e78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module-3-ai-brain/sim-to-real',
                component: ComponentCreator('/docs/module-3-ai-brain/sim-to-real', 'e93'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
