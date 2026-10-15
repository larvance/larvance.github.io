import { OpenSourceProject } from '../types';

export const OPEN_SOURCE_PROJECTS: OpenSourceProject[] = [
  {
    id: 'jsautogui',
    name: 'jsautogui',
    description:
      'Cross-platform native desktop automation and input synthesis addon for Node.js. Delivers sub-millisecond mouse/keyboard event synthesis and frame pixel inspection across X11, Win32, and macOS Quartz.',
    githubUrl: 'https://github.com/larvance/jsautogui',
    stars: '50+ stars',
    badge: 'Native Addon',
    tags: ['C++ / Node.js Addon', 'Native Win32 / X11 / Quartz'],
  },
  {
    id: 'fancy-printer',
    name: 'fancy-printer',
    description:
      'High-performance terminal diagnostics and logging engine engineered for modern developer toolchains. Features ANSI truecolor formatting, structured log spans, and zero external dependencies.',
    githubUrl: 'https://github.com/larvance/fancy-printer',
    stars: '31 stars',
    badge: 'Developer CLI',
    tags: ['TypeScript / CLI', 'Zero Dependencies'],
  },
  {
    id: 'ts-operator-overload',
    name: 'ts-operator-overload',
    description:
      'TypeScript compiler AST transformer synthesizing compile-time operator overloading (+, -, *, /, ==) into idiomatic method invocations for mathematical vectors, tensors, and complex arithmetic.',
    githubUrl: 'https://github.com/larvance/ts-operator-overload',
    badge: 'Compiler Plugin',
    tags: ['TypeScript Compiler API', 'AST Lowering'],
  },
  {
    id: 'unit-hpp',
    name: 'unit.hpp',
    description:
      'Zero-overhead compile-time dimensional analysis and physical unit safety library in modern C++20. Leverages template metaprogramming to eliminate runtime conversion bugs across SI physical dimensions.',
    githubUrl: 'https://github.com/larvance/unit.hpp',
    badge: 'Header-Only',
    tags: ['Modern C++20', 'Zero-Overhead Templates'],
  },
];
