import type { ReactNode } from "react";
import SkillIconGroup from "../components/SkillIconGroup";
import InnerProjectDescription from "../components/sections/InnerProjectDescription";
import { OptimizedImage } from "../components/OptimizedImage";
import Gallery from "../components/Gallery";
import {
  SiReact, SiTailwindcss, SiPython, SiC, SiArduino, SiNumpy, SiGit,
  SiPytorch, SiDocker, SiScikitlearn, SiCplusplus, SiQt, SiZig,
  SiNordicsemiconductor, SiBluetooth, SiStmicroelectronics, SiScipy, SiAmd, SiTypescript,
  SiTauri,
} from "react-icons/si";
import { Ear, Hand } from "lucide-react";

/** MuJoCo has no icon in react-icons: a small text badge sized like the other skill icons. */
function MujocoIcon() {
  return (
    <span
      title="MuJoCo"
      className="inline-flex h-[1em] w-[1em] items-center justify-center text-[7px] font-bold leading-none tracking-tighter text-neutral-800"
    >
      MJ
    </span>
  );
}

export const themes = ["Neuromorphic", "Prosthetics & EMG", "Wearables & Medical"] as const;
export type Theme = (typeof themes)[number];

export interface Project {
  slug: string;
  title: string;
  theme: Theme;
  /** Shown big in the bento grid at the top of the Projects section (in this order). */
  featured?: boolean;
  description: string;
  image?: string;
  /** Shown instead of the image until the project has a photo. */
  placeholderIcon?: ReactNode;
  link?: string;
  websiteLink?: string;
  skills: ReactNode;
  detailedDescription?: ReactNode;
}

/** Each project is shown as a card on the home page and has its own page at /<slug>. */
export const projects: Project[] = [
  {
    slug: "neocoral-studio",
    theme: "Neuromorphic",
    featured: true,
    title: "NeoCoRAL Studio: Building Networks for a Neuromorphic Chip",
    description:
      "A studio for designing, tuning and running spiking neural networks on a custom neuromorphic chip, built on top of the neocoral library I developed at the Institute of Neuroinformatics (ETH Zürich & UZH).",
    image: "img/neocoral-studio.webp",
    skills: (
      <SkillIconGroup>
        <SiPython title="Python" className="text-yellow-400" />
        <SiPytorch title="PyTorch" className="text-orange-400" />
        <SiAmd title="Zynq FPGA" className="text-red-600" />
        <SiTypescript title="TypeScript" className="text-blue-600" />
        <SiTauri title="Tauri" className="text-amber-500" />
      </SkillIconGroup>
    ),
    detailedDescription: (
      <InnerProjectDescription>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Context</strong>
          <br />
          At the Institute of Neuroinformatics I built <strong>neocoral</strong>, a PyTorch-style
          library to train and run spiking neural networks on a custom neuromorphic chip, together
          with the Zynq UltraScale+ FPGA layer that handles communication between the host and the
          chip. NeoCoRAL Studio sits on top of it: a visual environment where a network can be
          built, tuned and run on the chip without leaving the editor. The interface is written
          in TypeScript and packaged with Tauri as a desktop Linux app.
        </p>
        <div className="flex justify-center mb-3">
          <video
            src="/img/neocoral-studio.mp4"
            aria-label="Building, tuning and running a network in NeoCoRAL Studio"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="rounded-xl border border-black/10 w-full h-auto"
          />
        </div>
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Video:</strong> building a network, tuning a neuron, running it on the chip and
          composing networks as blocks (sped up).
        </p>

        <p className="text-base text-neutral-700 leading-relaxed mb-3">
          <strong className="text-blue-600">Features</strong>
        </p>
        <ul className="text-base text-neutral-700 leading-relaxed mb-5 list-disc list-inside flex flex-col gap-1.5">
          <li>
            <strong>Canvas and code in sync:</strong> inputs, populations of AdExp neurons and
            synapses (AMPA, NMDA, GABA, plastic) are drawn on a canvas, and the same network is
            written as a neocoral Python module next to it.
          </li>
          <li>
            <strong>Chip-aware:</strong>{" "}shows how neurons are placed on the chip&apos;s cores and
            the parameters each core shares, and flags networks that do not fit.
          </li>
          <li>
            <strong>Lab view:</strong> tune a neuron and immediately see its response curve and
            membrane trace.
          </li>
          <li>
            <strong>Run anywhere:</strong> on a simulated chip or on the real chip through the
            FPGA board, with live streaming and a spike raster of every population.
          </li>
          <li>
            <strong>Composable:</strong> networks can be reused as blocks, for example an encoder
            and a decoder wired together into a larger network.
          </li>
        </ul>
      </InnerProjectDescription>
    ),
  },
  {
    slug: "semg-prosthetic-hand",
    theme: "Prosthetics & EMG",
    featured: true,
    title: "sEMG-Controlled Prosthetic Hand",
    description:
      "A prosthetic hand built from scratch by a 17-person team at ETHRC, controlled by a low-cost 64-electrode sEMG array and closing the loop with a haptic feedback armband.",
    image: "img/move_finger.mp4",
    placeholderIcon: <Hand size={72} strokeWidth={1.25} />,
    skills: (
      <SkillIconGroup>
        <SiPython title="Python" className="text-yellow-400" />
        <SiPytorch title="PyTorch" className="text-orange-400" />
        <SiC title="C" className="text-blue-700" />
        <SiStmicroelectronics title="STM32" className="text-blue-800" />
        <SiBluetooth title="BLE" className="text-blue-600" />
      </SkillIconGroup>
    ),
    detailedDescription: (
      <InnerProjectDescription>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Context</strong>
          <br />
          As Robotics Team Lead at ETHRC (Sep 2026 – Feb 2027), I work in a 17-person team building
          a prosthetic hand from scratch. The hand is driven by surface EMG (sEMG): the electrical
          activity of the forearm muscles is recorded by an electrode array, decoded by a neural
          network running on a microcontroller, and turned into motor commands for each finger. A
          feedback armband closes the loop, letting the user feel what the hand is doing.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-3">
          <strong className="text-blue-600">My Role</strong>
        </p>
        <ul className="text-base text-neutral-700 leading-relaxed mb-5 list-disc list-inside flex flex-col gap-1.5">
          <li>Led software and model training for the hand.</li>
          <li>Co-designed a low-cost 64-electrode sEMG array (custom amplifiers, compact PCB).</li>
          <li>Chose the smallest MCU able to run the model while sampling 64 channels at 2 kHz.</li>
          <li>
            Managed a silicone feedback armband (vibrotactile, skin-stretch, pressure) fed by the
            hand over BLE.
          </li>
        </ul>

        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">System</strong>
          <br />
          An 8×8 electrode grid (64 channels) goes through ESD protection into an RHD2164
          front-end, which amplifies, band-pass filters, multiplexes and digitises the signals. The
          samples reach an STM32H7 over SPI, where the model runs and drives the finger motors
          through PWM motor drivers.
        </p>
        <OptimizedImage
          src="img/hand_model_architecture.webp"
          alt="Hardware chain and model architecture of the prosthetic hand"
          width={1600}
          height={960}
          quality={80}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Figure 1:</strong> (a) Signal chain from the 8×8 electrode grid to the motors.
          (b) 50 ms windows of 64-channel EMG at 2 kHz are encoded by convolutional layers
          (8×8×8 → 4×4×16), modulated (γ, β) and passed through four state-space model (SSM)
          layers, which output a value with uncertainty for the thumb, index, middle, ring and
          wrist. (c) The SSM runs step by step, carrying its hidden state h forward every 5 ms.
        </p>

        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Model</strong>
          <br />
          The decoder is built from S4 state-space layers. They are trained like a convolution
          over the whole sequence, but at inference time they run as a recurrence, one sample at a
          time with the same output. That makes them a natural fit for streaming EMG on a
          microcontroller: each new sample only updates a small hidden state instead of
          re-processing a window.
        </p>
        <OptimizedImage
          src="img/hand_model_processing_steps.webp"
          alt="Processing steps of the S4-based EMG decoder"
          width={1925}
          height={990}
          quality={80}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Figure 2:</strong> (a) A causal spatial encoder (128 spatial filters × 5 taps,
          stride 2) followed by rectification turns raw EMG into amplitude-like features. (b) Three
          S4 blocks (LayerNorm → S4D → GELU → Linear·GLU, with a residual connection) model the
          features over time. (c) Each S4D feature is a learned, decaying convolution kernel with
          a memory of about 0.2–4 s, which can also be computed one step at a time. (d) A
          LayerNorm + Linear head predicts the joint values, from open (0) to closed (1).
        </p>

        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">First Prototype</strong>
          <br />
          The first actuated finger, flexing and extending.
        </p>
        <div className="flex justify-center mb-5">
          <video
            src="/img/move_finger.mp4"
            aria-label="First actuated finger prototype flexing"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="rounded-xl border border-black/10 w-full max-w-sm h-auto"
          />
        </div>

        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Feedback Armband</strong>
          <br />
          A silicone armband gives the user sensory feedback from the hand through vibrotactile,
          skin-stretch and pressure actuators. The hand streams its state to the armband over BLE.
        </p>
        <OptimizedImage
          src="img/feedback_armband.webp"
          alt="CAD render of the feedback armband"
          width={1210}
          height={700}
          quality={80}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500">
          <strong>Figure 3:</strong> CAD model of the feedback armband.
        </p>
      </InnerProjectDescription>
    ),
  },
  {
    slug: "mov2semg",
    theme: "Prosthetics & EMG",
    featured: true,
    title: "mov2semg: Synthetic Forearm sEMG from Hand Motion",
    description:
      "A simulator that generates synthetic forearm surface EMG from hand and wrist joint angles, on a MuJoCo musculoskeletal model of the forearm.",
    image: "img/mov2semg.webp",
    link: "https://github.com/ETHRoboticsClub/mov2semg",
    skills: (
      <SkillIconGroup>
        <SiPython title="Python" className="text-yellow-400" />
        <SiNumpy title="NumPy" className="text-blue-900" />
        <SiScipy title="SciPy" className="text-blue-600" />
        <MujocoIcon />
      </SkillIconGroup>
    ),
    detailedDescription: (
      <InnerProjectDescription>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Motivation</strong>
          <br />
          Prosthetic hands for amputees can be controlled from the electrical activity of the
          remaining forearm muscles (sEMG), but the models that decode it need large amounts of
          training data: EMG recordings paired with the hand movement that produced them.
          Collecting that data is slow and hard, especially from amputees, who cannot show the
          movement they are trying to make.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Goal</strong>
          <br />
          mov2semg generates that data synthetically. It takes a recording of hand and wrist
          movement and simulates the forearm surface EMG that a set of electrodes would record
          during it, on a MuJoCo musculoskeletal model of the forearm, so every channel comes from
          the muscles that actually drive each joint. The result is labelled sEMG for training
          prosthetic hand control models.
        </p>
        <OptimizedImage
          src="img/mov2semg.webp"
          alt="mov2semg 3D viewer replaying a simulated recording"
          width={960}
          height={642}
          className="__FIG__"
        />
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Figure 1:</strong> The 3D web viewer replaying a simulated recording: muscles and
          electrodes are coloured by activity, with the 8 EMG channels on the right.
        </p>

        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Motion from a Camera</strong>
          <br />
          The input is just hand and wrist joint angles, so it does not need a motion-capture lab.
          With camera-based hand tracking, any video of someone moving their hand can be turned
          into joint angles and then into synthetic EMG, making it cheap to generate large and
          varied training datasets.
        </p>
        <div className="flex justify-center mb-3">
          <OptimizedImage
            src="img/track_hand.webp"
            alt="Hand landmarks tracked from a webcam image"
            width={833}
            height={732}
            quality={80}
            className="rounded-xl border border-black/10 w-full max-w-md h-auto"
          />
        </div>
        <p className="text-sm text-neutral-500 mb-5 text-center">
          <strong>Figure 2:</strong> Hand landmarks tracked from a webcam image.
        </p>

        <p className="text-base text-neutral-700 leading-relaxed mb-3">
          <strong className="text-blue-600">Pipeline</strong>
        </p>
        <ul className="text-base text-neutral-700 leading-relaxed mb-5 list-disc list-inside flex flex-col gap-1.5">
          <li><strong>Kinematics:</strong> hand motion → joint trajectories on the forearm model.</li>
          <li><strong>Muscle solver:</strong> joint trajectories → muscle activity, by least squares on the musculoskeletal model.</li>
          <li><strong>Effort:</strong> adds co-activation, grip and resting tone.</li>
          <li>
            <strong>EMG:</strong>{" "}muscle activity → motor-unit spike trains, placed in the
            subject&apos;s forearm anatomy; each unit&apos;s action potential is seen by the
            electrodes through a volume-conductor model, then mapped to channels.
          </li>
          <li><strong>Acquisition:</strong> clean EMG → what a real recording device would output.</li>
        </ul>

        <p className="text-base text-neutral-700 leading-relaxed mb-3">
          <strong className="text-blue-600">Usage</strong>
        </p>
        <pre className="text-sm bg-white/80 border border-black/[0.08] rounded-xl p-4 mb-5 overflow-x-auto font-mono text-neutral-800">
{`import mov2semg as mg

motion = mg.example_motion(duration=4.0)
recording = mg.Simulator(mg.Electrodes.myo()).run(motion)
recording.save("emg.h5")`}
        </pre>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          It also includes calibration tools, a command-line interface and the 3D web viewer
          (<code className="font-mono text-sm">mov2semg replay</code>).
        </p>

        <p className="text-sm text-neutral-500">
          The forearm model is derived from MyoSim (Apache-2.0) and the muscle anatomy from
          BodyParts3D (CC BY-SA 2.1 Japan).
        </p>
      </InnerProjectDescription>
    ),
  },
  {
    slug: "in-ear-sleep-wearable",
    theme: "Wearables & Medical",
    featured: true,
    title: "In-Ear Wearable for Sleep Fragmentation",
    description:
      "An in-ear wearable that detects sleep stages and fragmentation on-device, with a Zig inference runtime fitting in under 14 KB of RAM.",
    image: "img/ear-wearable.webp",
    link: "https://github.com/MNR-MarcosOriolPagonabarraga-projects/mHealth-project-code",
    placeholderIcon: <Ear size={72} strokeWidth={1.25} />,
    skills: (
      <SkillIconGroup>
        <SiPython title="Python" className="text-yellow-400" />
        <SiZig title="Zig" className="text-orange-500" />
        <SiNordicsemiconductor title="nRF" className="text-sky-600" />
      </SkillIconGroup>
    ),
    detailedDescription: (
      <InnerProjectDescription>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Context</strong>
          <br />
          Neuroengineering project at UPC: a wearable that tracks sleep fragmentation directly
          from the ear, running the whole detection pipeline on the device itself.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-3">
          <strong className="text-blue-600">Development</strong>
        </p>
        <ul className="text-base text-neutral-700 leading-relaxed mb-5 list-disc list-inside flex flex-col gap-1.5">
          <li>Designed the in-ear wearable around a low-power nRF MCU with haptics and battery.</li>
          <li>Trained sleep-stage and fragmentation detection models.</li>
          <li>
            Wrote a Zig inference runtime fitting in under <strong>14 KB</strong> of RAM and{" "}
            <strong>100 KB</strong> of flash.
          </li>
        </ul>
        <OptimizedImage
          src="img/ear-wearable.webp"
          alt="3D render of the in-ear wearable"
          width={1100}
          height={619}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Figure 1:</strong> 3D render of the wearable.
        </p>

        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Sleep-Stage Model</strong>
          <br />
          The model learns a compact representation of each sleep epoch. Projecting it to 2D shows
          how well the stages separate: Wake, REM and deep sleep (N3) form distinct clusters, while
          light sleep sits in between and overlaps with its neighbours.
        </p>
        <OptimizedImage
          src="img/ear-wearable-pca.webp"
          alt="PCA and t-SNE projections of the sleep-stage latent space"
          width={1321}
          height={574}
          quality={80}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500">
          <strong>Figure 2:</strong> Latent space of the sleep-stage model, projected with PCA
          (left) and t-SNE (right) and coloured by stage: Wake, REM, light sleep and N3.
        </p>

        <p className="text-base text-neutral-700 leading-relaxed mt-5 mb-5">
          <strong className="text-blue-600">Porting to Embedded</strong>
          <br />
          To run on the earpiece, the model was quantized to INT8 and re-implemented outside
          Python. Both steps were checked against the original model, and the embedded version was
          confirmed to work properly: the quantized model produces almost the same scores for
          every sleep stage and keeps the same prediction, and the Zig implementation follows the
          Python reference with an average error of <strong>0.88%</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <OptimizedImage
            src="img/ear-wearable-logits.webp"
            alt="Logit comparison between the PyTorch model and the INT8 quantized C model"
            width={1500}
            height={1050}
            quality={80}
            className="rounded-xl border border-black/10 mb-3 w-full h-auto"
          />
          <OptimizedImage
            src="img/ear-wearable-zig-vs-python.webp"
            alt="Zig implementation output against the Python reference"
            width={1500}
            height={1050}
            quality={80}
            className="rounded-xl border border-black/10 mb-3 w-full h-auto"
          />
        </div>
        <p className="text-sm text-neutral-500">
          <strong>Figure 3:</strong> Left: output scores (logits) of the PyTorch model and the INT8
          quantized C model for each sleep stage; the largest difference is 0.25. Right: the Zig
          implementation (dashed) against the Python reference (solid), with an average error of
          0.88%.
        </p>
      </InnerProjectDescription>
    ),
  },
  {
    slug: "spikeverse",
    theme: "Neuromorphic",
    title: "SpikeVerse: Open-Source Visual Playground for Spiking Neural Networks",
    description: "A visual, interactive playground for building, simulating, and understanding Spiking Neural Networks with GPU-accelerated computation through GeNN.",
    image: "img/snnverse.webp",
    link: "https://github.com/MarcosOriolPago/SNNverse",
    websiteLink: "https://spike-verse.oriol-tech.com",
    skills: (
      <SkillIconGroup>
        <SiReact title="React" className="text-blue-600" />
        <SiPython title="Python" className="text-yellow-400" />
        <SiTailwindcss title="Tailwindcss" className="text-blue-700" />
        <SiDocker title="Docker" className="text-blue-600" />
      </SkillIconGroup>
    ),
    detailedDescription: (
      <InnerProjectDescription>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Purpose</strong>
          <br />
          SNNverse is an open-source visual playground for quickly prototyping
          Spiking Neural Networks. It bridges a modern React-based frontend with
          GPU-accelerated backend simulation through GeNN, making SNN research
          accessible and intuitive.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-3">
          <strong className="text-blue-600">Key Features</strong>
        </p>
        <ul className="text-base text-neutral-700 leading-relaxed mb-5 list-disc list-inside flex flex-col gap-1.5">
          <li>Drag-and-drop flow-based network construction</li>
          <li>Real-time simulation feedback with live membrane voltage and spike raster streams</li>
          <li>GPU-accelerated computation with automatic C++ code generation</li>
          <li>WebSocket-based streaming interface for live data</li>
          <li>Dynamic parameter editing and topology manipulation</li>
        </ul>
        <OptimizedImage
          src="img/snnverse.webp"
          alt="SNNverse builder interface"
          width={800}
          height={450}
          quality={70}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Figure:</strong> The visual network builder showing a multi-layer
          spiking neural network with PyInput nodes and interconnected neuron populations.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed">
          <strong className="text-blue-600">Tech Stack</strong>
          <br />
          React + React Flow for the frontend, Python + GeNN for the GPU-accelerated backend,
          WebSockets for real-time data streaming, and Docker for containerized deployment.
        </p>
      </InnerProjectDescription>
    ),
  },
  {
    slug: "snn-ripples",
    theme: "Neuromorphic",
    title: "Final Degree Thesis: SNNs for Closed-Loop Signal Detection",
    description: "Neuromorphic computation on low-power microcontrollers for closed-loop signal detection applications.",
    image: "img/loihi2.webp",
    link: "https://github.com/MarcosOriolPago/LAVA_SNN_ripples",
    skills: (
      <SkillIconGroup>
        <SiPython title="Python" className="text-yellow-400" />
        <SiPytorch title="Pytorch" className="text-orange-400" />
        <SiNumpy title="Numpy" className="text-blue-900" />
        <SiGit title="Git" className="text-orange-600" />
      </SkillIconGroup>
    ),
    detailedDescription: (
      <InnerProjectDescription>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Context</strong>
          <br />
          Spiking Neural Networks (SNNs) work similar to other classical
          neural networks. However, they involve time in the equation. By
          mimicking the membrane potential of biological neurons, each
          node will get charged when receiving an input, and discharged
          through each time step.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Goal</strong>
          <br />
          This project consisted in applying a SNN for detecting Sharp
          Wave Ripples, a characteristical brain signal pattern present
          in epilepsy.
        </p>
        <OptimizedImage
          src="img/overview_workflow.webp"
          alt="SNN workflow overview"
          width={800}
          height={450}
          quality={70}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Figure 1:</strong> Each timestep, a value of the signal
          arrives to a specific neuron from the input layer of the
          network.
        </p>
        <strong className="text-blue-600 text-base">Result</strong>
        <div className="grid grid-cols-1 gap-4 mt-3">
          <div>
            <p className="text-sm text-neutral-500 mb-1 text-center">
              Input
            </p>
            <OptimizedImage
          src="img/input.gif"
          alt="Input signal"
          width={800}
          height={450}
          className="rounded-lg border border-black/10"
        />
          </div>
          <div>
            <p className="text-sm text-neutral-500 mb-1 text-center">
              Output
            </p>
            <OptimizedImage
          src="img/output.gif"
          alt="Output signal"
          width={800}
          height={450}
          className="rounded-lg border border-black/10"
        />
          </div>
        </div>
      </InnerProjectDescription>
    ),
  },
  {
    slug: "neurogait",
    theme: "Prosthetics & EMG",
    title: "NeuroGait C++",
    description: "Microcontroller optimized closed-loop AI control system for gait rehabilitation using FES, proving that EMG from stimulation electrodes alone can replace external sensors.",
    image: "img/neurogait-results.webp",
    link: "https://github.com/MNR-MarcosOriolPagonabarraga-projects/NeuroGait",
    skills: (
      <SkillIconGroup>
        <SiPython title="Python" className="text-yellow-400" />
        <SiScikitlearn title="Scikit-learn" className="text-orange-400" />
        <SiNumpy title="Numpy" className="text-blue-900" />
        <SiCplusplus title="C++" className="text-blue-600" />
      </SkillIconGroup>
    ),
    detailedDescription: (
      <InnerProjectDescription>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Goal</strong>
          <br />
          The objective was to prove that no external sensors such as IMUs
          or torque sensors are needed for FES devices in Foot Drop
          condition. By reusing the built-in stimulation electrodes to
          record EMG signals, the hardware of rehabilitation devices can
          be greatly simplified.
        </p>
        <OptimizedImage
          src="img/neurogait-pipeline.webp"
          alt="NeuroGait system pipeline"
          width={800}
          height={450}
          quality={70}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Figure 1:</strong> System pipeline -- EMG signals from
          TA and MG muscles are processed through a feature extractor,
          then classified by a context gate (walking mode + gait phase)
          and motion intention module to drive the stimulator.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Implementation</strong>
          <br />
          Two lightweight ML classifiers were trained over extracted EMG
          features from the Tibialis Anterior and Medial Gastrocnemius
          muscles: a walking mode classifier and a gait phase classifier.
          The feature extraction pipeline enabled simple, resource-efficient
          models suitable for microcontroller deployment.
        </p>
        <OptimizedImage
          src="img/neurogait-results.webp"
          alt="NeuroGait classification results"
          width={800}
          height={450}
          quality={70}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Figure 2:</strong> PCA feature visualization and
          confusion matrices for both classifiers -- 97% accuracy for
          walking mode, 83% for gait phase detection.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Optimization</strong>
          <br />
          The trained models and control logic were converted into
          memory-optimized C++ code, designed to fit within the
          constraints of a microcontroller for real-time, on-device
          inference in a production FES environment. The optimized 
          system ran with <strong>4KB</strong> of RAM and <strong>14KB</strong> of flash memory.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed">
          <strong className="text-blue-600">Conclusion</strong>
          <br />
          Results demonstrate that reusing EMG signals from FES
          stimulation electrodes provides sufficient information for
          walking mode and gait phase classification, potentially
          eliminating the need for additional external sensors in foot
          drop rehabilitation devices.
        </p>
      </InnerProjectDescription>
    ),
  },
  {
    slug: "fuspine",
    theme: "Wearables & Medical",
    title: "FuSpine: Focused Ultrasound for Spinal Cord Stimulation",
    description: "Software for a focused ultrasound (FUS) stimulation device targeting spinal cord injury recovery. AI-powered medical planning application developed at PRBB - Hospital del Mar.",
    image: "img/fuspine.webp",
    link: "",
    skills: (
      <SkillIconGroup>
        <SiPython title="Python" className="text-yellow-400" />
        <SiPytorch title="PyTorch" className="text-orange-400" />
        <SiNumpy title="NumPy" className="text-blue-900" />
        <SiQt title="PyQt" className="text-green-500" />
      </SkillIconGroup>
    ),
    detailedDescription: (
      <InnerProjectDescription>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Context</strong>
          <br />
          FuSpine is a medical product development project focused on using
          Focused Ultrasound (FUS) for spinal cord neuronal stimulation. The
          goal is to aid recovery from spinal cord injuries through
          non-invasive stimulation techniques.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Role</strong>
          <br />
          As part of a multidisciplinary team at PRBB - Hospital del Mar
          (Barcelona), my role consisted of developing the software for a
          medical planning application that helps doctors planify the
          stimulation procedure.
        </p>
        <OptimizedImage
          src="img/fuspine.webp"
          alt="Focused ultrasound stimulating a neuron"
          width={800}
          height={450}
          quality={70}
          className="rounded-xl border border-black/10 mb-3 w-full h-auto"
        />
        <p className="text-sm text-neutral-500 mb-5">
          <strong>Figure:</strong> Focused ultrasound transducer stimulating
          neuronal tissue for spinal cord injury recovery.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-3">
          <strong className="text-blue-600">AI Tools Developed</strong>
        </p>
        <ul className="text-base text-neutral-700 leading-relaxed mb-5 list-disc list-inside flex flex-col gap-1.5">
          <li>Tissue segmentation of MRI images</li>
          <li>MRI to CT conversion using deep learning</li>
          <li>Optimal FUS trajectory suggestion to effectively reach the spinal cord</li>
        </ul>
        <p className="text-base text-neutral-700 leading-relaxed">
          <strong className="text-blue-600">Tech Stack</strong>
          <br />
          Python with PyTorch for deep learning models, NumPy for numerical
          computation, and PyQt for the desktop GUI application used by
          medical professionals.
        </p>
      </InnerProjectDescription>
    ),
  },
  {
    slug: "rehab-rc-car",
    theme: "Wearables & Medical",
    title: "Rehabilitation RF Car",
    description: "Development of a fully 3D printed radiocontrolled car for arm rehabilitation. Controlled two arduinos and a custom Bluetooth communication protocol.",
    image: "img/cars.webp",
    link: "",
    skills: (
      <SkillIconGroup>
        <SiArduino title="Arduino" className="text-blue-500" />
        <SiC title="C" className="text-blue-700" />
      </SkillIconGroup>
    ),
    detailedDescription: (
      <InnerProjectDescription>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Context</strong>
          <br />
          This project consisted in developing a radiocontrolled car for
          rehabilitation purposes. The car was designed to be used by
          patients with arm disabilities, allowing them to control the
          car with their arm movements.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-5">
          <strong className="text-blue-600">Goal</strong>
          <br />
          The goal was to develop a fully 3D printed car that could be
          controlled by two Arduinos with a custom Bluetooth
          communication protocol.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mb-3">
          <strong className="text-blue-600">Development</strong>
        </p>
        <Gallery
          imgs_folder={[
            "img/bluetooth.webp",
            "img/cars1.webp",
            "img/car_stage1.webp",
            "img/car_run.gif",
            "img/cars_wires.webp",
          ]}
        />
        <p className="text-base text-neutral-700 leading-relaxed mt-5 mb-3">
          <strong className="text-blue-600">Result</strong>
        </p>
        <OptimizedImage
          src="img/cachiao.gif"
          alt="Car demonstration"
          width={800}
          height={450}
          className="rounded-lg border border-black/10"
        />
      </InnerProjectDescription>
    ),
  },
];

/** Card title: the project title up to the colon ("mov2semg: Synthetic…" → "mov2semg"). */
export function cardTitle(p: Pick<Project, "title">) {
  return p.title.split(":")[0];
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
