const Line = require('../src/equation').Line
describe("line methods", function() {
  it('line created from this two points: [0, 0], [2, 4] should be y=3x-2', function() {
    let line = new Line()
    let A = {x: 1, y: 1}
    let B = {x: 2, y: 4}
    line.crossTwoPoint(A, B)
    let line2 = new Line()
    line2.create(3, -2)
    expect(line).toEqual(line2)
  })
  it(`point [16 4] distance from line y=x should be 6`, function() {
    let line = new Line()
    expect(line.distanceFromPoint({x: 16, y: 4}, 1, 0)).toBe(6);
  })
  it('angle between y=x and y=-x shoud be 90 degree', () => {
    let line1 = new Line()
    line1.create(1, 0)
    let line2 = new Line()
    line2.create(-1, 0)
    expect(Line.angle(line1, line2)).toBe(90)
  })
})