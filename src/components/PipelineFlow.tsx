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
            <div className="px-4 py-2 glass rounded-lg font-mono text-xs text-text-secondary tracking-wider hover:text-accent transition-colors">
              {node.label}
            </div>
            {i < nodes.length - 1 && (
              <div className="w-px h-6 bg-accent/20" />
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
                className="px-4 py-2 glass rounded-lg font-mono text-xs text-text-secondary tracking-wider hover:text-accent transition-colors"
              >
                {node.label}
              </div>
            ))}
          </div>
          {li < levels.length - 1 && (
            <div className="flex items-center justify-center py-1">
              <div className="w-px h-6 bg-accent/20" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
