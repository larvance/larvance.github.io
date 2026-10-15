import { CapabilityCategory } from '../types';

export const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    num: '01',
    title: 'Low-Level Systems & Concurrency',
    items: [
      {
        label: 'Pure Safe & Embedded Rust',
        detail: 'Strict #![deny(unsafe_code)] and #![no_std] bare-metal flight codebases with zero dynamic heap allocations.',
      },
      {
        label: 'Shared Memory IPC',
        detail: 'POSIX SHM ring buffers, custom Seqlock implementations, DLPack GPU bridges exceeding 500,000 steps/sec.',
      },
      {
        label: 'Work-Stealing Concurrency',
        detail: 'Parallel job graph dispatch, CPU cache-line alignment (64-byte padding), SIMD vector operations.',
      },
      {
        label: 'Hardware Targets',
        detail: 'STM32H7 (Cortex-M7 @ 480 MHz), ESP32-S3, RP2040, NVIDIA Jetson Orin edge computing modules.',
      },
    ],
  },
  {
    num: '02',
    title: 'Robotics, Avionics & Control',
    items: [
      {
        label: 'High-Rate Sensor Fusion',
        detail: '24-state Extended Kalman Filter (EKF) updating at 8 kHz without heap allocation.',
      },
      {
        label: 'Multivariable Control',
        detail: 'Continuous LQR, receding-horizon MPC, and adaptive elastic PID AutoTune.',
      },
      {
        label: 'Vibration Isolation',
        detail: 'Dynamic harmonic notch filter banks tracking motor eRPM (DShot) and gyro FFT.',
      },
      {
        label: 'Wire Protocols',
        detail: 'MAVLink v2 & FTP micro-service, DroneCAN DNA server, dual CAN-FD, ASTM F3411 Remote ID.',
      },
    ],
  },
  {
    num: '03',
    title: 'Compilers & Language Engineering',
    items: [
      {
        label: 'Lowering Pipeline',
        detail: 'Pratt parsing, AST construction, High-Level IR (HIR), and Mid-Level IR (MIR) transformations.',
      },
      {
        label: 'Borrow Checking',
        detail: 'Non-Lexical Lifetimes (NLL) borrow checker with point-based liveness analysis and zero GC.',
      },
      {
        label: 'Dual Codegen Backends',
        detail: 'LLVM 18 optimization passes (-O3 vectorization) paired with Cranelift sub-10ms JIT compilation.',
      },
      {
        label: 'Developer Tooling',
        detail: 'Full Language Server Protocol (LSP 3.17) daemon, VS Code syntax grammars, and diagnostics.',
      },
    ],
  },
  {
    num: '04',
    title: 'Simulation & Silicon EDA',
    items: [
      {
        label: 'Symplectic Integrators',
        detail: 'Symplectic Verlet, Yoshida 4th order, RK4, and Baumgarte constraint stabilization.',
      },
      {
        label: 'Aerodynamic Theory',
        detail: 'Blade Element Momentum Theory (BEMT), Vortex Ring State (VRS), Dryden turbulence models.',
      },
      {
        label: 'In-RAM HDL Simulation',
        detail: 'Verilog-2005/SystemVerilog netlist compilation directly into native machine code in RAM in 2.81 ms.',
      },
      {
        label: 'SPICE & TCAD Solvers',
        detail: 'Modified Nodal Analysis (MNA), Newton-Raphson non-linear DC, electro-thermal TCAD solvers.',
      },
    ],
  },
  {
    num: '05',
    title: 'Applied ML, Perception & Edge DSP',
    fullWidth: true,
    items: [
      {
        label: 'Dust Non-Backprop Training',
        detail: 'Zeroth-order activation-space virtual populations eliminating backward gradient VRAM cliffs.',
      },
      {
        label: 'Attention Sink Streaming',
        detail: 'Bounded O(1) attention sink anchors enabling infinite token dialogues on 4GB VRAM devices.',
      },
      {
        label: 'Audio DSP & Beamforming',
        detail: 'Cooley-Tukey Radix-2 FFT, GCC-PHAT spatial beamforming, Sakoe-Chiba banded DTW phrase spotting.',
      },
      {
        label: 'Compute Backends',
        detail: 'Vulkan compute shaders, WebAssembly (wasm32), C-ABI FFI, and WebGL Three.js renderers.',
      },
    ],
  },
];
