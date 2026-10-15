# larvance.com

Official systems and autonomous robotics portfolio of **larvance** ([larvance.com](https://larvance.com/)).

## Technology Stack

- **Framework**: React 18 / 19 with strict TypeScript (TSX).
- **Styling**: Tailwind CSS with custom Linear-inspired dark-mode surface hierarchy (`#08090a`), hairline borders (`rgba(255,255,255,0.07)`), and GPU-accelerated cursor-following radial spotlight glow.
- **Build & Bundler**: Vite for sub-second HMR and tree-shaken static production bundles.
- **Code Quality**: ESLint with `@typescript-eslint` and strict type checks.
- **Iconography**: Lucide React vector icons.
- **CI/CD**: Automated GitHub Actions Pages deployment pipeline (`.github/workflows/deploy.yml`).

## Flagship Systems Showcase

- **Chronos**: Parallel Multi-World Simulation Kernel (8.65M ticks/sec, 116ns step latency, 128 parallel lockstep worlds, POSIX SHM Seqlock).
- **Kestrel**: Hard Real-Time Autonomous Flight Firmware (`#![no_std]` Rust, 24-state EKF at 8 kHz on STM32H7, zero heap allocations).
- **Vexel**: Statically-Typed Systems Programming Language (LLVM 18 backend, non-lexical lifetimes borrow checker, zero-GC memory safety).
- **Axiom**: High-Performance In-RAM HDL Simulator (Cranelift JIT, cycle-accurate 4-state logic, 2.81ms JIT compile).
- **Kortex**: Multi-Purpose Deep Learning Engine (Dust zeroth-order activation-space virtual populations, bounded $O(1)$ attention sink streaming).
- **Atoma**: 3D Quantum, Atomistic & Molecular CAD Studio (14 Bravais crystal lattices, Dirac cones, pure safe Rust and WebAssembly).
- **Phonon**: Universal Electro-Thermal Circuit & SPICE EDA (Newton-Raphson Modified Nodal Analysis, Chronos coupled thermal co-simulation).
- **Sonon**: Edge Acoustic DSP & Speech Synthesis (hard real-time streaming VAD, rotor noise notch filtering, sub-millisecond keyword spotting).

## Verified Open Source Packages

- **jsautogui**: Cross-platform desktop automation and input synthesis native C++ Node.js addon.
- **fancy-printer**: High-performance terminal diagnostics and logging engine.
- **ts-operator-overload**: TypeScript compiler AST transformer synthesizing compile-time operator overloading.
- **unit.hpp**: Zero-overhead compile-time dimensional analysis and physical unit safety library in modern C++20.

## Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Run type checker
npm run typecheck

# Run linter
npm run lint

# Build production bundle
npm run build
```

## License

MIT License.