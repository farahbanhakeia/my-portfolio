import { motion } from 'framer-motion'

interface SchemaNode {
  x: number
  y: number
  w: number
  label: string
  highlight?: boolean
}

interface SchemaConfig {
  vw: number
  vh: number
  nodes: SchemaNode[]
  edges: [number, number][]
}

const H = 28

const SCHEMAS: Record<string, SchemaConfig> = {
  'yolo-benchmark': {
    vw: 560, vh: 66,
    nodes: [
      { x: 0, y: 19, w: 56, label: 'IMAGE' },
      { x: 72, y: 19, w: 82, label: 'MODEL SEL.' },
      { x: 170, y: 19, w: 66, label: 'ADAPTER' },
      { x: 252, y: 19, w: 76, label: 'INFERENCE', highlight: true },
      { x: 344, y: 19, w: 80, label: 'POST-PROC' },
      { x: 440, y: 19, w: 64, label: 'METRICS' },
      { x: 520, y: 19, w: 40, label: 'CMP' },
    ],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]],
  },
  'ai-crisis-manager': {
    vw: 380, vh: 250,
    nodes: [
      { x: 130, y: 5, w: 120, label: 'CRISIS EVENT', highlight: true },
      { x: 115, y: 58, w: 150, label: 'DECISION AGENT' },
      { x: 10, y: 115, w: 100, label: 'FIRE AGENT' },
      { x: 140, y: 115, w: 100, label: 'MEDICAL' },
      { x: 270, y: 115, w: 100, label: 'RESOURCE' },
      { x: 115, y: 172, w: 150, label: 'OPTIMIZATION', highlight: true },
      { x: 130, y: 225, w: 120, label: 'ACTION PLAN' },
    ],
    edges: [[0,1],[1,2],[1,3],[1,4],[2,5],[3,5],[4,5],[5,6]],
  },
  'cmc-planning': {
    vw: 420, vh: 230,
    nodes: [
      { x: 10, y: 5, w: 78, label: 'GROUPS' },
      { x: 108, y: 5, w: 78, label: 'TRAINERS' },
      { x: 236, y: 5, w: 68, label: 'ROOMS' },
      { x: 324, y: 5, w: 86, label: 'MODULES' },
      { x: 110, y: 65, w: 200, label: 'CONSTRAINT ENGINE', highlight: true },
      { x: 140, y: 130, w: 140, label: 'CSP SOLVER' },
      { x: 100, y: 195, w: 220, label: 'OPTIMIZED SCHEDULE', highlight: true },
    ],
    edges: [[0,4],[1,4],[2,4],[3,4],[4,5],[5,6]],
  },
  'secure-face-auth': {
    vw: 560, vh: 66,
    nodes: [
      { x: 0, y: 19, w: 50, label: 'FACE' },
      { x: 66, y: 19, w: 80, label: 'DETECTION' },
      { x: 162, y: 19, w: 70, label: 'ARCFACE' },
      { x: 248, y: 19, w: 84, label: 'EMBEDDING' },
      { x: 348, y: 19, w: 72, label: 'AES / RSA', highlight: true },
      { x: 436, y: 19, w: 72, label: 'STORAGE' },
      { x: 524, y: 19, w: 36, label: 'AUTH' },
    ],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]],
  },
}

function edgePath(from: SchemaNode, to: SchemaNode): string {
  const x1 = from.x + from.w / 2
  const y1 = from.y + H / 2
  const x2 = to.x + to.w / 2
  const y2 = to.y + H / 2

  if (Math.abs(y1 - y2) < 4) {
    return `M${from.x + from.w} ${y1} L${to.x} ${y2}`
  }

  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  return `M${x1} ${y1 + H / 2} Q${x1} ${my} ${mx} ${my} Q${x2} ${my} ${x2} ${y2 - H / 2}`
}

export default function AnimatedSchema({ projectId, compact }: { projectId: string; compact?: boolean }) {
  const schema = SCHEMAS[projectId]
  if (!schema) return null

  const { vw, vh, nodes, edges } = schema

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={compact ? 'w-full max-w-[280px]' : 'w-full max-w-[580px]'}
    >
      <svg
        viewBox={`-4 -4 ${vw + 8} ${vh + 8}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {edges.map(([fi, ti], ei) => {
          const pathId = `edge-${projectId}-${ei}`
          const d = edgePath(nodes[fi], nodes[ti])
          return (
            <g key={pathId}>
              <path
                id={pathId}
                d={d}
                fill="none"
                stroke="rgba(238,192,200,0.35)"
                strokeWidth={1.2}
                strokeDasharray="4 3"
              />
              <circle r={2.5} fill="#eec0c8" opacity={0}>
                <animateMotion
                  dur={`${1.8 + ei * 0.15}s`}
                  repeatCount="indefinite"
                  begin={`${ei * 0.25}s`}
                >
                  <mpath xlinkHref={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;0.9;0.9;0"
                  dur={`${1.8 + ei * 0.15}s`}
                  repeatCount="indefinite"
                  begin={`${ei * 0.25}s`}
                />
              </circle>
            </g>
          )
        })}

        {nodes.map((node, ni) => (
          <motion.g
            key={ni}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + ni * 0.06 }}
          >
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={H}
              rx={6}
              fill={node.highlight ? 'rgba(238,192,200,0.18)' : 'rgba(255,255,255,0.6)'}
              stroke={node.highlight ? 'rgba(238,192,200,0.5)' : 'rgba(238,192,200,0.25)'}
              strokeWidth={1}
            />
            {node.highlight && (
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={H}
                rx={6}
                fill="none"
                stroke="rgba(238,192,200,0.3)"
                strokeWidth={1}
              >
                <animate
                  attributeName="stroke-opacity"
                  values="0.3;0.7;0.3"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </rect>
            )}
            <text
              x={node.x + node.w / 2}
              y={node.y + H / 2 + 3.5}
              textAnchor="middle"
              fill="#1e293b"
              fontSize={compact ? 7 : 8}
              fontFamily="'JetBrains Mono', monospace"
              letterSpacing="0.04em"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </motion.div>
  )
}
