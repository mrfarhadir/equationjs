type Point = { x: number, y: number }
export class Line {
  m: number;
  b: number;
  y(x: number) {
    return this.m * x + this.b
  }
  create(m: number, b: number) {
    this.m = m
    this.b = b
    return (x: number) => this.y(x)
  }
  crossTwoPoint(A: Point, B: Point): Function {
    this.m = (B.y - A.y) / (B.x - A.x)
    this.b = A.y - (this.m * A.x)
    return (x: number) => this.y(x)
  }
  distanceFromPoint(A: Point, m: number = null, b: number = null): number {
    m = typeof m !== 'number' && !m ? this.m : m
    b = typeof b !== 'number' && !b ? this.b : b
    return (A.x * m + -1 * A.y + b) / (Math.sqrt((m ^ 2) + 1))
  }
  neighboors(points: Array<Point>, decimal: number = 0): object {
    let options = {}
    let distances = {
      list: [] as number[],
      sum: 0,
      average: 0
    }
    points.forEach(point => {
      let d: number = this.distanceFromPoint(point, this.m, this.b)
      distances.sum += d
      if (decimal > 0)
        d = parseFloat(d.toFixed(decimal))
      distances.list.push(d)
    })
    distances.average = distances.sum / distances.list.length
    return distances
  }
  static distanceFromPoint(A: Point, m: number, b: number): number {
    return (A.x * m + -1 * A.y + b) / (Math.sqrt((m ^ 2) + 1))
  }
  static angle(line1: Line, line2: Line): number {
    let teta = Math.atan(Math.abs((line2.m - line1.m) / (1 + line1.m * line2.m)))
    return (teta * 180) / Math.PI
  }
  static twoLineDistance(line1: Line, line2: Line): number {
    let d: number = (Math.abs(line2.b - line1.b))/ (Math.sqrt((line1.m ^ 2) + 1))
    return d
  }
}
