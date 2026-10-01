import { motion, useReducedMotion } from "motion/react";
import type { ArtifactKind } from "../content";

function TrainingPreview() {
  return (
    <div className="training-preview" aria-hidden="true">
      {["Training plan", "Topic task bank", "Verified anchors", "Audit reports", "Workbook"].map(
        (label, index) => (
          <div className="training-step" key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{label}</b>
          </div>
        ),
      )}
    </div>
  );
}

function VoxelPreview() {
  return (
    <svg className="artifact-svg voxel-preview" viewBox="0 0 320 180" role="img" aria-label="Abstract voxel structure">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M74 111 160 62l86 49-86 50Z" />
        <path d="M74 111v28l86 49 86-49v-28" />
        <path d="m117 86 86 50m-129 0 86-50 86 50m-129-25 86 50" opacity=".35" />
        <path d="M160 62v99m43-74v99m-86-99v99" opacity=".4" />
      </g>
      <g fill="currentColor">
        <rect x="145" y="46" width="30" height="30" opacity=".95" />
        <rect x="189" y="73" width="28" height="28" opacity=".45" />
        <rect x="102" y="98" width="28" height="28" opacity=".25" />
      </g>
    </svg>
  );
}

function FftPreview() {
  const reduce = useReducedMotion();
  const paths = [
    "M34 36 C104 36 108 144 178 144 S252 36 286 36",
    "M34 72 C104 72 108 108 178 108 S252 72 286 72",
    "M34 108 C104 108 108 72 178 72 S252 108 286 108",
    "M34 144 C104 144 108 36 178 36 S252 144 286 144",
  ];

  return (
    <svg className="artifact-svg fft-preview" viewBox="0 0 320 180" role="img" aria-label="FFT butterfly structure">
      {paths.map((path, index) => (
        <motion.path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          initial={reduce ? false : { pathLength: 0, opacity: 0.2 }}
          whileInView={reduce ? undefined : { pathLength: 1, opacity: 0.72 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, delay: index * 0.05 }}
          key={path}
        />
      ))}
      {[36, 72, 108, 144].flatMap((y) => [34, 178, 286].map((x) => (
        <circle cx={x} cy={y} r="4" fill="currentColor" key={`${x}-${y}`} />
      )))}
    </svg>
  );
}

function RetrievalPreview() {
  const reduce = useReducedMotion();
  return (
    <svg className="artifact-svg retrieval-preview" viewBox="0 0 320 180" role="img" aria-label="Multimodal video retrieval and temporal alignment visualization">
      {/* Search query vector bar */}
      <rect x="28" y="24" width="180" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".7" />
      <circle cx="36" cy="31" r="3" fill="currentColor" opacity=".8" />
      <line x1="45" y1="31" x2="110" y2="31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="220" y="24" width="72" height="14" rx="3" fill="currentColor" opacity=".18" />
      <text x="232" y="34" fill="currentColor" fontSize="7.5" fontFamily="var(--mono)" letterSpacing="0.05em">GEMTRA DP</text>

      {/* Video keyframe timeline track */}
      <line x1="28" y1="76" x2="292" y2="76" stroke="currentColor" strokeWidth="1.5" opacity=".4" />
      {[45, 95, 145, 205, 255].map((x, i) => (
        <g key={x}>
          <rect x={x - 14} y="58" width="28" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" opacity={i === 2 || i === 3 ? ".9" : ".35"} />
          <line x1={x - 14} y1="68" x2={x + 14} y2="68" stroke="currentColor" strokeWidth="0.8" opacity=".3" />
          <circle cx={x} cy="78" r="2.5" fill="currentColor" opacity={i === 2 || i === 3 ? "1" : ".3"} />
        </g>
      ))}

      {/* Interval alignment bracket [tL, tR] */}
      <motion.path
        d="M 125 102 L 131 112 L 225 112 L 231 102"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />
      <text x="146" y="126" fill="currentColor" fontSize="8" fontFamily="var(--mono)" letterSpacing="0.06em">[tL, tR] 6.6ms</text>

      {/* Temporal relations */}
      <circle cx="68" cy="148" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".6" />
      <line x1="72" y1="148" x2="118" y2="148" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity=".6" />
      <circle cx="122" cy="148" r="4" fill="currentColor" opacity=".85" />
      <line x1="126" y1="148" x2="182" y2="148" stroke="currentColor" strokeWidth="1.4" opacity=".8" />
      <circle cx="186" cy="148" r="4" fill="currentColor" />
      <line x1="190" y1="148" x2="248" y2="148" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity=".6" />
      <circle cx="252" cy="148" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".6" />
    </svg>
  );
}

function WorkbenchPreview() {
  return (
    <svg className="artifact-svg workbench-preview" viewBox="0 0 320 180" role="img" aria-label="Collaborative trip planning board">
      {/* 3 Workspace columns */}
      {[28, 120, 212].map((x, i) => (
        <g key={x}>
          <rect x={x} y="22" width="80" height="136" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".4" />
          <rect x={x + 8} y="32" width="40" height="6" rx="2" fill="currentColor" opacity=".45" />
          {/* Card items */}
          <rect x={x + 6} y="48" width="68" height="34" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity={i === 1 ? ".9" : ".5"} />
          <line x1={x + 12} y1="58" x2={x + 56} y2="58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".8" />
          <line x1={x + 12} y1="67" x2={x + 42} y2="67" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".5" />
          <circle cx={x + 64} cy="72" r="3" fill="currentColor" opacity=".7" />

          <rect x={x + 6} y="90" width="68" height="32" rx="3" fill="none" stroke="currentColor" strokeWidth="1" opacity=".4" />
          <line x1={x + 12} y1="100" x2={x + 50} y2="100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
          <line x1={x + 12} y1="109" x2={x + 36} y2="109" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".4" />
        </g>
      ))}
      {/* Realtime sync dot */}
      <circle cx="282" cy="14" r="3" fill="currentColor" />
      <text x="228" y="16" fill="currentColor" fontSize="7" fontFamily="var(--mono)">REALTIME SYNC</text>
    </svg>
  );
}

function SwitcherPreview() {
  return (
    <svg className="artifact-svg switcher-preview" viewBox="0 0 320 180" role="img" aria-label="Tauri AI account switcher and gateway router">
      {/* Gateway header */}
      <rect x="28" y="24" width="264" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".6" />
      <circle cx="42" cy="38" r="4" fill="currentColor" opacity=".9" />
      <text x="54" y="42" fill="currentColor" fontSize="8" fontFamily="var(--mono)" letterSpacing="0.05em">GATEWAY 127.0.0.1:8783</text>
      <rect x="220" y="31" width="60" height="14" rx="2" fill="currentColor" opacity=".18" />
      <text x="228" y="41" fill="currentColor" fontSize="7" fontFamily="var(--mono)">TAURI CORE</text>

      {/* Account cards */}
      {[64, 102, 140].map((y, idx) => (
        <g key={y}>
          <rect x="28" y={y} width="264" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth={idx === 0 ? "1.5" : "1"} opacity={idx === 0 ? "1" : ".4"} />
          <circle cx="44" cy={y + 15} r="5" fill={idx === 0 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2" />
          <line x1="58" y1={y + 12} x2="140" y2={y + 12} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity={idx === 0 ? ".9" : ".5"} />
          <line x1="58" y1={y + 20} x2="110" y2={y + 20} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity=".4" />
          {/* Quota bar */}
          <rect x="180" y={y + 11} width="68" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="0.8" opacity=".5" />
          <rect x="182" y={y + 13} width={idx === 0 ? "52" : idx === 1 ? "24" : "40"} height="4" rx="1" fill="currentColor" opacity=".7" />
          <text x="256" y={y + 18} fill="currentColor" fontSize="7" fontFamily="var(--mono)">{idx === 0 ? "82%" : idx === 1 ? "35%" : "60%"}</text>
        </g>
      ))}
    </svg>
  );
}

export function ArtifactPreview({ kind }: { kind: ArtifactKind }) {
  if (kind === "retrieval") return <RetrievalPreview />;
  if (kind === "workbench") return <WorkbenchPreview />;
  if (kind === "switcher") return <SwitcherPreview />;
  if (kind === "training") return <TrainingPreview />;
  if (kind === "voxel") return <VoxelPreview />;
  return <FftPreview />;
}
