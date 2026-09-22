import { useEffect, useRef } from 'react'

interface Node {
  id: string
  label: string
  x: number
  y: number
  targetX: number
  targetY: number
}

interface Edge {
  from: string
  to: string
}

const GRAPH_NODES: Node[] = [
  { id: 'data', label: 'DATA', x: 200, y: 40, targetX: 200, targetY: 40 },
  { id: 'features', label: 'FEATURES', x: 200, y: 110, targetX: 200, targetY: 110 },
  { id: 'ml', label: 'ML MODEL', x: 120, y: 190, targetX: 120, targetY: 190 },
  { id: 'dl', label: 'DL MODEL', x: 280, y: 190, targetX: 280, targetY: 190 },
  { id: 'opt', label: 'OPTIMIZATION', x: 200, y: 270, targetX: 200, targetY: 270 },
  { id: 'decision', label: 'DECISION', x: 200, y: 340, targetX: 200, targetY: 340 },
]

const GRAPH_EDGES: Edge[] = [
  { from: 'data', to: 'features' },
  { from: 'features', to: 'ml' },
  { from: 'features', to: 'dl' },
  { from: 'ml', to: 'opt' },
  { from: 'dl', to: 'opt' },
  { from: 'opt', to: 'decision' },
]

export default function NodeGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>(
    GRAPH_NODES.map((n) => ({
      ...n,
      x: n.targetX + (Math.random() - 0.5) * 4,
      y: n.targetY + (Math.random() - 0.5) * 4,
    })),
  )
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    function resize() {
      const dpr = window.devicePixelRatio
      canvas!.width = 400 * dpr
      canvas!.height = 400 * dpr
      ctx!.scale(dpr, dpr)
    }

    resize()

    function getNode(id: string) {
      return nodesRef.current.find((n) => n.id === id)!
    }

    function animate() {
      timeRef.current += 0.01
      const t = timeRef.current

      ctx!.clearRect(0, 0, 400, 400)

      for (const node of nodesRef.current) {
        node.x = node.targetX + Math.sin(t * 0.8 + node.targetX * 0.01) * 3
        node.y = node.targetY + Math.cos(t * 0.6 + node.targetY * 0.01) * 2
      }

      for (const edge of GRAPH_EDGES) {
        const from = getNode(edge.from)
        const to = getNode(edge.to)

        ctx!.beginPath()
        ctx!.moveTo(from.x, from.y)
        ctx!.lineTo(to.x, to.y)
        ctx!.strokeStyle = 'rgba(147, 51, 234, 0.22)'
        ctx!.lineWidth = 1
        ctx!.stroke()

        const pulse = (Math.sin(t * 2 + from.targetX * 0.02) + 1) / 2
        const px = from.x + (to.x - from.x) * pulse
        const py = from.y + (to.y - from.y) * pulse

        ctx!.beginPath()
        ctx!.arc(px, py, 2.5, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(219, 39, 119, ${0.4 + pulse * 0.5})`
        ctx!.fill()
      }

      for (const node of nodesRef.current) {
        ctx!.beginPath()
        ctx!.arc(node.x, node.y, 5, 0, Math.PI * 2)
        ctx!.fillStyle = '#9333ea'
        ctx!.fill()

        ctx!.beginPath()
        ctx!.arc(node.x, node.y, 10, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(147, 51, 234, 0.1)'
        ctx!.fill()

        ctx!.font = '10px "JetBrains Mono", monospace'
        ctx!.fillStyle = 'rgba(61, 52, 85, 0.85)'
        ctx!.textAlign = 'center'
        ctx!.fillText(node.label, node.x, node.y - 16)
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[400px] aspect-square"
      style={{ width: 400, height: 400 }}
    />
  )
}
