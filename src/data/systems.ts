import { SystemProject } from '../types';

export const FLAGSHIP_SYSTEMS: SystemProject[] = [
  {
    id: 'chronos',
    title: 'Chronos',
    domain: 'Physics Kernel',
    domainBadgeClass: 'cyan',
    tag: 'aerovexhq/chronos // v2026.4',
    subtitle: 'Parallel Multi-World Multi-Physics Simulation Kernel for Autonomous Robotics & Aerospace',
    category: 'physics',
    status: 'Active Simulation Daemon',
    description:
      'Massively parallel physics simulation kernel stepping 128 isolated physics instances concurrently with zero mutex contention. Powered by Rayon work-stealing, Baumgarte constraints, BEMT aerodynamics, and microsecond POSIX SHM Seqlock IPC.',
    pills: [
      { text: '8.65M ticks/s', highlight: true },
      { text: '116 ns Latency' },
      { text: '128 Worlds' },
      { text: 'POSIX SHM Seqlock' },
      { text: 'Safe Rust' },
    ],
    moduleTag: 'aerovexhq/chronos',
    colSpan: 'half',
    problem:
      'Robotics reinforcement learning, neuromorphic vision pipelines, and hardware-in-the-loop (HIL) avionics validation require stepping millions of state transitions per second. Legacy simulators suffer from severe multi-threading lock contention, garbage collection overhead, or lack aerospace-grade aerodynamic fidelity.',
    tradeoffs:
      'Pure Rust lockstep architecture over legacy C++ engines. POSIX shared memory (/dev/shm) ring buffer with custom AVSM Seqlock synchronization provides zero-copy telemetry (>500,000 steps/s) vs high-overhead gRPC/Protobuf serialization. Fixed-timestep symplectic integrators ensure bit-identical reinforcement learning rollouts.',
    diagram: `[Rayon Worker Threads (0..127)]
       |
       +--> [Baumgarte Articulated Constraints Solver]
       |
       +--> [BEMT Aerodynamics & Dryden Turbulence]
       |
       +--> [AVSM Seqlock POSIX SHM Ring Buffer] ---> [Zero-Copy DLPack Tensor]`,
    benchmarks: [
      { metric: 'Simulation Stepping Throughput', value: '8,650,000 ticks/sec', baseline: '128 worlds on 16 cores' },
      { metric: 'Per-Step Stepping Latency', value: '116 ns', baseline: 'Baumgarte constraint step' },
      { metric: 'Zero-Copy SHM Telemetry', value: '> 500,000 steps/sec', baseline: '/dev/shm ring buffer' },
      { metric: 'Hot Loop Allocations', value: '0 bytes', baseline: 'Zero heap churn' },
    ],
    specs: {
      'Implementation Language': 'Safe Rust 2021',
      'Execution Parallelism': 'Rayon Work-Stealing (128 Worlds)',
      'Aerodynamic Formulation': 'Blade Element Momentum Theory (BEMT)',
      'Telemetry Interface': 'POSIX Shared Memory Seqlock + DLPack',
    },
  },
  {
    id: 'kestrel',
    title: 'Kestrel',
    domain: 'Avionics Firmware',
    domainBadgeClass: 'emerald',
    tag: 'aerovex // flight-firmware',
    subtitle: 'Hard Real-Time Autonomous Flight Firmware in Pure #![no_std] Rust',
    category: 'physics',
    status: 'Flight-Certified no_std',
    description:
      'Deterministic, zero-allocation bare-metal flight stack written in #![no_std] Rust. Executes a continuous 24-state Extended Kalman Filter at 8 kHz on STM32H7, multivariable LQR optimal control, dynamic harmonic notch filtering, and native wire protocols.',
    pills: [
      { text: '8 kHz Control Loop', highlight: true },
      { text: '24-State EKF' },
      { text: '0 Allocations' },
      { text: 'ASTM F3411 Remote ID' },
      { text: 'STM32H7 / RP2040' },
    ],
    moduleTag: 'aerovexhq/kestrel',
    colSpan: 'half',
    problem:
      'Mission-critical unmanned aerial vehicles cannot tolerate operating system context switching jitter, dynamic memory fragmentation, or memory corruption vulnerabilities common to legacy C/C++ flight stacks (PX4, ArduPilot).',
    tradeoffs:
      'Strict #![no_std] compile-time zero-allocation guarantees over dynamic heap flexibility. Static array dispatch tables over virtual trait object dynamic dispatch. Continuous 24-state Extended Kalman Filter (EKF) updating attitude, position, velocity, and sensor biases at 8 kHz on STM32H7.',
    diagram: `[Sensors: IMU / Baro / Mag / RTK-GPS @ 8 kHz]
       |
       +--> [24-State Extended Kalman Filter (EKF)]
       |
       +--> [Multivariable Continuous LQR / MPC Guidance]
       |
       +--> [DShot eRPM Harmonic Notch Filter Bank]
       |
       +--> [ISO CAN-FD Dual Redundancy / ASTM F3411 Remote ID]`,
    benchmarks: [
      { metric: 'Main Inner Control Loop', value: '8,000 Hz (125 us period)', baseline: 'Deterministic loop rate' },
      { metric: '24-State EKF Step Latency', value: '42 us', baseline: 'STM32H743 Cortex-M7 @ 480 MHz' },
      { metric: 'Dynamic Memory Allocations', value: '0 bytes', baseline: 'Static memory model' },
      { metric: 'Remote ID Packet Generation', value: '3.4 us', baseline: 'ASTM F3411 wire engine' },
    ],
    specs: {
      'Language Level': 'Rust #![no_std] #![forbid(unsafe_code)]',
      'Target Silicon': 'STM32H743VI, ESP32-S3, RP2040',
      'Avionics Busses': 'Dual ISO CAN-FD, High-Speed SPI (80 MHz)',
      'Wire Protocols': 'MAVLink v2, DroneCAN v0/v1, Micro-XRCE-DDS',
    },
  },
  {
    id: 'vexel',
    title: 'Vexel',
    domain: 'Compiler Toolchain',
    domainBadgeClass: 'lavender',
    tag: 'vexel-lang/vexel // v1.2',
    subtitle: 'Statically-Typed Systems Language with Compile-Time Lifetime Analysis',
    category: 'compiler',
    status: 'LLVM 18 Production',
    description:
      'Systems language combining C-speed execution, compile-time borrow checking with non-lexical lifetimes, zero-GC deterministic memory management, and first-class WebAssembly DOM handle tables.',
    pills: [
      { text: 'LLVM 18 IR', highlight: true },
      { text: 'Borrow Checker' },
      { text: 'Cranelift JIT' },
      { text: 'LSP 3.17 Daemon' },
    ],
    moduleTag: 'vexel-lang/vexel',
    colSpan: 'half',
    problem:
      'Systems programming has long enforced a compromise between the steep compile times and complex borrow checker semantics of Rust, the spatial memory safety vulnerabilities of C/C++, and the runtime GC pauses of Go.',
    tradeoffs:
      'Dual codegen pipeline: LLVM 18 optimization passes (-O3 vectorization) for native release builds, paired with Cranelift for sub-10ms instantaneous JIT execution. Non-Lexical Lifetimes (NLL) borrow checker delivers memory safety without garbage collection pauses. First-class WebAssembly DOM handle tables.',
    diagram: `[Source Code .vx]
       |
       +--> [Pratt Parser & AST Lowering]
       |
       +--> [High-Level IR (HIR) & Type Inference]
       |
       +--> [Mid-Level IR (MIR) & NLL Borrow Checker]
       |
       +--> [LLVM 18 Native Codegen / Cranelift JIT / WASM DOM]`,
    benchmarks: [
      { metric: 'Incremental Netlist Compile', value: '< 150 ms', baseline: '50,000 LOC codebase' },
      { metric: 'JIT REPL Turnaround', value: '7.8 ms', baseline: 'Cranelift machine codegen' },
      { metric: 'WASM DOM Mutation Latency', value: '0.38 ms', baseline: 'Direct handle table bridge' },
      { metric: 'LSP Diagnostic Latency', value: '< 8 ms', baseline: 'vexel-lsp background daemon' },
    ],
    specs: {
      'Compiler Implementation': 'Rust 2021 + C++20 (LLVM 18 API)',
      'Compilation Targets': 'x86_64, AArch64, wasm32-unknown-unknown',
      'Memory Model': 'Deterministic RAII + Borrow Checker (Zero-GC)',
      'Tooling Architecture': 'vexel CLI, vexel-lsp (LSP 3.17), VS Code extension',
    },
  },
  {
    id: 'axiom',
    title: 'Axiom EDA',
    domain: 'Silicon Simulation',
    domainBadgeClass: 'amber',
    tag: 'aerovexhq/axiom // JIT Engine',
    subtitle: 'High-Performance In-RAM HDL Simulator & Cranelift Hardware Processor',
    category: 'compiler',
    status: '>10,000x Vivado',
    description:
      'Hardware description language simulation engine compiling Verilog/SystemVerilog netlists directly into native machine code in RAM in 2.81 ms. Exposes discrete zero-time delta cycles and silicon power modeling.',
    pills: [
      { text: '2.81 ms JIT', highlight: true },
      { text: '14.8M trans/s' },
      { text: 'Delta Stepping' },
      { text: 'IEEE 1364 SAIF' },
    ],
    moduleTag: 'aerovexhq/axiom',
    colSpan: 'half',
    problem:
      'Industry-standard FPGA verification suites (e.g. AMD Vivado) require 100+ GB installations, multi-minute file-based snapshot elaboration, and conceal critical combinational race hazards inside black-box zero-time delta cycles.',
    tradeoffs:
      'Eliminates intermediate disk snapshots and C++ translation entirely. Netlists are compiled directly into native machine code in RAM using Cranelift in under 3 ms. Exposes granular caller-controlled delta-cycle stepping (step_delta) and physics-informed silicon telemetry (switching power and PDN inductive droop).',
    diagram: `[Verilog / SystemVerilog Netlist]
       |
       +--> [In-RAM Elaboration & AST Parser]
       |
       +--> [Cranelift Machine Codegen (x86_64 / AArch64)]
       |
       +--> [Granular Delta-Cycle Step Engine]
       |
       +--> [Physics-Informed Silicon Telemetry & IEEE 1364 VCD / SAIF 2.0]`,
    benchmarks: [
      { metric: 'End-to-End Compile Turnaround', value: '2.81 ms', baseline: '> 10,000x faster than Vivado xelab' },
      { metric: 'Signal Evaluation Throughput', value: '14.8M trans/sec', baseline: 'Native Cranelift execution' },
      { metric: 'Application Distribution Size', value: '< 50 MB', baseline: 'Tauri v2 + WebAssembly' },
      { metric: 'Vivado Interoperability', value: '100% SAIF 2.0 / VCD', baseline: 'IEEE 1364 compliance' },
    ],
    specs: {
      'Language': 'Safe Rust 2021',
      'JIT Compiler': 'Cranelift (In-RAM native translation)',
      'Supported Standards': 'IEEE 1364 Verilog-2005, SystemVerilog subsets',
      'Telemetry Models': 'Dynamic Switching Power, PDN Inductive Droop',
    },
  },
  {
    id: 'kortex',
    title: 'Kortex',
    domain: 'Deep Learning Engine',
    domainBadgeClass: 'lavender',
    tag: 'aerovexhq/kortex // Non-Backprop',
    subtitle: 'Dust Zeroth-Order Virtual Population Training & Bounded Attention Sinks',
    category: 'deeptech',
    status: 'Non-Backprop // Vulkan Acceleration',
    description:
      'Multi-purpose deep learning engine in safe Rust. Implements Dust zeroth-order activation-space virtual populations to train forward-only without reverse-mode autograd tape VRAM cliffs. Integrates bounded O(1) attention sink streaming and 17 mathematical KV-cache compression paradigms.',
    pills: [
      { text: '<15 us Step', highlight: true },
      { text: '0 Tape Autograd' },
      { text: 'O(1) Attention Sink' },
      { text: '17 Compression Paradigms' },
      { text: 'Vulkan GPU Shaders' },
    ],
    moduleTag: 'aerovexhq/kortex',
    colSpan: 'full',
    problem:
      'Conventional deep learning relies on reverse-mode automatic differentiation, demanding extensive activation storage in VRAM (O(L * B)) that triggers out-of-memory crashes on edge hardware. Concurrently, standard LLM inference suffers from unbounded linear KV-cache growth.',
    tradeoffs:
      'Powered by Dust zeroth-order activation-space virtual populations: trains multi-layer networks forward-only without storing backward autograd graphs. In inference, bounded O(1) attention sink streaming anchors initial tokens (k=4) while maintaining a rolling token ring (W=256) with amortized block evictions (k_evict=16).',
    diagram: `[Forward Pass Activation Tensors]
       |
       +--> [Dust Zeroth-Order Virtual Population Sampling]
       |
       +--> [Forward-Only Weight Perturbation (0 Autograd Tape)]
       |
       +--> [Bounded O(1) Attention Sink Anchor & Eviction Ring]
       |
       +--> [Vulkan Compute Shaders / 17 KV Compression Paradigms]`,
    benchmarks: [
      { metric: 'Forward-Only Training Step', value: '< 15 us', baseline: 'Edge CPU activation step' },
      { metric: 'Autograd VRAM Overhead', value: '0 bytes', baseline: 'Zero backward tape' },
      { metric: 'Dialogue Context Streaming', value: 'Infinite tokens', baseline: 'Guaranteed 128 MB VRAM ceiling' },
      { metric: 'KV-Cache Compression Fidelity', value: '< 0.2% perplexity drift', baseline: '17 mathematical paradigms' },
    ],
    specs: {
      'Safety Guarantee': 'Pure Safe Rust #![deny(unsafe_code)]',
      'Hardware Acceleration': 'Low-Level Vulkan Compute Shaders & C-ABI FFI',
      'Target Architectures': 'NVIDIA Jetson, Edge devices with <= 4 GB VRAM',
      'Profile Validation': 'SHA-256 weight state verification',
    },
  },
  {
    id: 'sonon',
    title: 'Sonon',
    domain: 'Acoustic DSP',
    domainBadgeClass: 'cyan',
    tag: 'aerovexhq/sonon // Hard Real-Time',
    subtitle: 'Edge Acoustic DSP, Rotor Noise Notch Bank & Spatial Beamforming Stack',
    category: 'deeptech',
    status: '>86 dB Notch // Hard Real-Time',
    description:
      'Embedded acoustic signal processing engine coupling directly to flight controller ESC RPM telemetry to notch out blade pass tones under +15 dB rotor whine. Delivers GCC-PHAT spatial beamforming and banded DTW phrase spotting with zero allocations.',
    pills: [
      { text: '>86 dB Notch', highlight: true },
      { text: '+5.59 dB SNR Gain' },
      { text: 'GCC-PHAT DoA' },
      { text: 'Banded DTW' },
      { text: '0 Allocations' },
      { text: 'Cortex-M' },
    ],
    moduleTag: 'aerovexhq/sonon',
    colSpan: 'half',
    problem:
      'Autonomous drones and robotic edge platforms operate under deafening rotor noise (+15 dB motor whine), blinding acoustic localization and keyword spotting while operating on power-constrained microcontrollers.',
    tradeoffs:
      'Hard real-time audio DSP stack in pure safe Rust. Lock-free circular ring buffers with zero allocations in steady-state streaming. Dynamic rotor harmonic notch bank directly couples to flight controller ESC RPM telemetry (f_k = k * N_blades * RPM / 60) to suppress blade pass tones by >86 dB.',
    diagram: `[Microphone Array Raw Audio Streams]
       |
       +--> [ESC Motor RPM Telemetry Coupling]
       |
       +--> [Direct Form II Transposed Rotor Notch Bank (>86 dB)]
       |
       +--> [GCC-PHAT Spatial Beamformer & Direction of Arrival]
       |
       +--> [Sakoe-Chiba Banded DTW Low-Power Phrase Spotting]`,
    benchmarks: [
      { metric: 'Motor Whine Attenuation', value: '> 86 dB depth', baseline: 'Dynamic rotor harmonic bank' },
      { metric: 'Directional SNR Gain', value: '+5.59 dB', baseline: 'Delay-and-Sum spatial beamforming' },
      { metric: 'Steady-State Allocations', value: '0 bytes', baseline: 'Lock-free circular audio ring buffer' },
      { metric: 'Phrase Spotting Latency', value: '< 1.0 ms', baseline: 'ARM Cortex-M4 / Cortex-M7' },
    ],
    specs: {
      'Language Profile': 'Pure Safe Rust #![deny(unsafe_code)]',
      'Signal Processing Algorithms': 'Radix-2 Cooley-Tukey FFT, GCC-PHAT, Banded DTW, PCEN',
      'Target Silicon': 'STM32H7, ESP32-S3, Cortex-M microcontrollers',
      'Telemetry Integration': 'Direct DShot / ESC RPM wire coupling',
    },
  },
  {
    id: 'atoma',
    title: 'Atoma',
    domain: 'Quantum & Molecular CAD',
    domainBadgeClass: 'cyan',
    tag: 'aerovex // atomistic-studio',
    subtitle: '3D Interactive Quantum, Atomistic & Molecular CAD Studio in Pure Safe Rust',
    category: 'deeptech',
    status: 'WASM // 60 FPS',
    description:
      'Atomistic CAD and crystal lattice studio in pure safe Rust and WebAssembly. Computes analytical hydrogenic wavefunctions, Kohn-Sham electron densities, and tight-binding Dirac cone band structures in real-time 3D.',
    pills: [
      { text: '<2.0 ms Cold Boot', highlight: true },
      { text: '14 Bravais Lattices' },
      { text: 'Marching Cubes' },
      { text: 'Dirac Cones' },
      { text: 'Safe Rust' },
    ],
    moduleTag: 'aerovexhq/atoma',
    colSpan: 'half',
    problem:
      'Solid-state physics and computational chemistry applications (VASP, Quantum ESPRESSO, PyMOL) are cumbersome, desktop-locked, and lack real-time interactive analytical orbital visualization and crystal supercell manipulation directly in the browser.',
    tradeoffs:
      '100% pure safe Rust (#![deny(unsafe_code)]) compiling directly to WebAssembly (wasm32-unknown-unknown). Closed-form analytical evaluation of hydrogenic spherical harmonics and radial wavefunctions for instant 60 FPS orbital rendering over slow pre-computed voxel grids.',
    diagram: `[Crystal & Molecular Netlist (CIF / PDB / XYZ)]
       |
       +--> [14 Bravais Lattice Unit Cell Generator & Replicator]
       |
       +--> [Analytical Hydrogenic Spherical Harmonics (s, p, d, f)]
       |
       +--> [Marching Cubes Isosurface Kohn-Sham Density]
       |
       +--> [WebGL 60 FPS Render Pipeline / Wigner-Seitz Cell]`,
    benchmarks: [
      { metric: 'WebAssembly Cold Boot Time', value: '< 2.0 ms', baseline: 'Browser instantiation' },
      { metric: 'Continuous 3D Frame Rate', value: '60 FPS', baseline: 'Standard integrated GPU' },
      { metric: 'Crystal System Coverage', value: '14 Bravais Lattices', baseline: 'Periodic boundary conditions' },
      { metric: 'Element Chemical Dictionary', value: '118 IUPAC Elements', baseline: 'CODATA physical constants' },
    ],
    specs: {
      'Safety Profile': 'Line 1 #![deny(unsafe_code)]',
      'Deployment Format': 'WebAssembly (wasm32) + Desktop Native Binary',
      'Graphic Renderer': 'WebGL, Three.js shaders, custom math kernel',
      'Physics Verification': '10/10 PASS on band structure and coordinate audits',
    },
  },
  {
    id: 'phonon',
    title: 'Phonon',
    domain: 'Circuit & TCAD EDA',
    domainBadgeClass: 'amber',
    tag: 'aerovexhq/phonon // SPICE Multi-Scale',
    subtitle: 'Universal Electro-Thermal SPICE Circuit Simulator & Semiconductor TCAD',
    category: 'compiler',
    status: '6 Realism Tiers',
    description:
      'Physical electro-thermal circuit and semiconductor TCAD simulator in 100% safe Rust. Spans 6 realism tiers from 1D/2D Poisson-drift-diffusion TCAD to BSIM4 transistors and 4.2K Cryo-CMOS with Chronos thermal co-simulation.',
    pills: [
      { text: 'Newton-Raphson MNA', highlight: true },
      { text: 'Coupled Thermal' },
      { text: '4.2K Cryo-CMOS' },
      { text: 'Adaptive Timestep' },
      { text: 'Safe Rust' },
    ],
    moduleTag: 'aerovexhq/phonon',
    colSpan: 'full',
    problem:
      'Legacy SPICE simulators frequently diverge during stiff high-frequency switching, lack coupled electro-thermal co-simulation with physical robotic airframes, and cannot model sub-micron semiconductor quantum acoustic or Cryo-CMOS phenomena.',
    tradeoffs:
      'Unified non-linear Newton-Raphson Modified Nodal Analysis (MNA) with adaptive time-stepping. Integrates coupled electro-thermal Jacobians directly co-simulating component junction temperatures with Chronos aerodynamic airflow. Spans 6 realism tiers from 1D/2D Poisson-drift-diffusion to 4.2K Cryo-CMOS.',
    diagram: `[Schematic Netlist]
       |
       +--> [Modified Nodal Analysis (MNA) Formulation]
       |
       +--> [Non-Linear Newton-Raphson Solver & Adaptive Timestep]
       |
       +--> [Coupled Electro-Thermal Jacobian Matrix]
       |
       +--> [Chronos Multi-Physics Thermal Co-Simulation Bridge]`,
    benchmarks: [
      { metric: 'Transient Step Latency', value: '< 1.2 us / node', baseline: 'Non-linear switching circuit' },
      { metric: 'Non-Linear Convergence Rate', value: '99.98%', baseline: 'Stiff inductive switching topologies' },
      { metric: 'Realism Scope', value: '6 Tiers', baseline: 'From TCAD meshes to VLSI slices' },
      { metric: 'Cryogenic Range', value: 'Down to 4.2 Kelvin', baseline: 'Cryo-CMOS solid state models' },
    ],
    specs: {
      'Language': 'Pure Safe Rust 1.80+',
      'Numerical Solvers': 'Modified Nodal Analysis, Sparse LU, Newton-Raphson',
      'Co-Simulation': 'Coupled thermal state link to Chronos physics daemon',
      'Platforms': 'Zero-dependency WebAssembly studio + Rayon desktop CLI',
    },
  },
];
