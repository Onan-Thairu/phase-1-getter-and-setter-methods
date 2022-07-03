class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        let diameter = circumference / Math.PI
        this.radius = diameter / 2
    }

    set area(area) {
        let rSquared = area / Math.PI
        this.radius = Math.sqrt(rSquared)
    }
}