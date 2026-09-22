import type { ProjectEdge, ProjectNode } from '../data/projects'

interface PipelineFlowProps {
  nodes: ProjectNode[]
  edges: ProjectEdge[]
  layout?: 'vertical' | 'tree'
}

export default function PipelineFlow({
  nodes,
  edges,
  layout = 'vertical',
}: PipelineFlowProps) {
  if (layout === 'vertical') {
    return (
      <div className="flex flex-col items-center gap-0">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex flex-col items-center">
            <div className="px-4 py-2 border border-accent/12 bg-white rounded-lg font-mono text-xs text-text-secondary tracking-wider hover:border-accent/30 hover:text-accent transition-colors duration-300 shadow-sm">
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <div className="w-px h-6 bg-accent/15 relative overflow-hidden">
                <div
                  className="absolute inset-0 w-full bg-accent/50"
                  style={{
                    animation: `flow-down 2s linear infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  const nodeMap = new Map(nodes.map((n) => [n.id, n]))
  const roots = nodes.filter(
    (n) => !edges.some((e) => e.to === n.id),
  )
  const children = (id: string) =>
    edges.filter((e) => e.from === id).map((e) => nodeMap.get(e.to)!)
  const parents = (id: string) =>
    edges.filter((e) => e.to === id).map((e) => nodeMap.get(e.from)!)

  const levels: ProjectNode[][] = []
  const visited = new Set<string>()

  function buildLevels(current: ProjectNode[], depth: number) {
    if (current.length === 0) return
    levels[depth] = current
    const next: ProjectNode[] = []
    for (const node of current) {
      if (visited.has(node.id)) continue
      visited.add(node.id)
      for (const child of children(node.id)) {
        const allParentsVisited = parents(child.id).every((p) =>
          visited.has(p.id),
        )
        if (allParentsVisited && !next.includes(child)) {
          next.push(child)
        }
      }
    }
    buildLevels(next, depth + 1)
  }

  buildLevels(roots, 0)

  return (
    <div className="flex flex-col items-center gap-0">
      {levels.map((level, li) => (
        <div key={li} className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-6">
            {level.map((node) => (
              <div
                key={node.id}
                className="px-4 py-2 border border-accent/12 bg-white rounded-lg font-mono text-xs text-text-secondary tracking-wider hover:border-accent/30 hover:text-accent transition-colors duration-300 shadow-sm"
              >
                {node.label}
              </div>
            ))}
          </div>
          {li < levels.length - 1 && (
            <div className="flex items-center justify-center py-1">
              <div className="w-px h-6 bg-accent/15 relative overflow-hidden">
                <div
                  className="absolute inset-0 w-full bg-accent/50"
                  style={{
                    animation: `flow-down 2s linear infinite`,
                    animationDelay: `${li * 0.3}s`,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
