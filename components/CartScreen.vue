<template>
  <div>
    <div id="cart-screen"/>
    <ClearItemsButton/>
  </div>
</template>

<script>
import Matter from 'matter-js'
import decomp from 'poly-decomp'
import ClearItemsButton from '~/components/ClearItemsButton'

export default {
  components: {
    ClearItemsButton
  },
  props: {
    items: {
      type: Array[Object],
      default() {}
    }
  },
  mounted() {
    window.decomp = decomp
    this.drawScreen()
  },
  methods: {
    drawScreen() {
      // --- setup // ----------

      // engine
      const engine = Matter.Engine.create()
      const world = engine.world

      // render
      const renderWidth = 800
      const renderHeight = 600
      const render = Matter.Render.create({
        element: document.getElementById('cart-screen'),
        engine: engine,
        options: {
          width: renderWidth,
          height: renderHeight,
          wireframes: false
        }
      })
      Matter.Render.run(render)

      // runner
      const runner = Matter.Runner.create()
      Matter.Runner.run(runner, engine)

      // mouse
      const mouse = Matter.Mouse.create(render.canvas)
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      })
      Matter.World.add(world, mouseConstraint)
      render.mouse = mouse

      // --- // setup ----------

      // --- contents // ----------
      const contents = []

      // terrain
      const wallWidth = 20
      const wallBottom = Matter.Bodies.rectangle(
        renderWidth / 2,
        renderHeight,
        renderWidth,
        wallWidth,
        { isStatic: true }
      )
      contents.push(wallBottom)
      const wallLeft = Matter.Bodies.rectangle(
        0,
        renderHeight / 2,
        wallWidth,
        renderHeight,
        { isStatic: true }
      )
      contents.push(wallLeft)
      const wallRight = Matter.Bodies.rectangle(
        renderWidth,
        renderHeight / 2,
        wallWidth,
        renderHeight,
        { isStatic: true }
      )
      contents.push(wallRight)
      const hillVertices = Matter.Vertices.fromPath(
        'M640 243.97L640 613.2L526.48 613.2L310.36 613.2L91.5 613.2L91.5 243.97L320 122.1L640 43.32L640 243.97Z'
      )
      const hill = Matter.Bodies.fromVertices(
        renderWidth - 110,
        renderHeight - 180,
        hillVertices,
        { isStatic: true },
        true
      )
      contents.push(hill)

      // --- cart // ----------
      const cart = Matter.Composite.create({ label: 'cart' })
      contents.push(cart)
      const cartX = renderWidth - 100
      const cartY = 100

      // bucket
      const bucketWidth = 120
      const bucketHeight = 60
      const bucketThickness = 10
      const bucketVertices = Matter.Vertices.create([
        { x: 0, y: 0 },
        { x: 0, y: bucketHeight },
        { x: bucketWidth, y: bucketHeight },
        { x: bucketWidth, y: 0 },
        // 取っ手
        { x: bucketWidth + bucketThickness, y: 0 },
        { x: bucketWidth + bucketThickness, y: -bucketThickness },
        { x: bucketWidth - bucketThickness, y: -bucketThickness },
        // /取っ手
        { x: bucketWidth - bucketThickness, y: 0 },
        { x: bucketWidth - bucketThickness, y: bucketHeight - bucketThickness },
        { x: 0 + bucketThickness, y: bucketHeight - bucketThickness },
        { x: 0 + bucketThickness, y: 0 }
      ])
      const bucket = Matter.Bodies.fromVertices(
        cartX,
        cartY,
        bucketVertices,
        {},
        true
      )
      Matter.Composite.addBody(cart, bucket)

      // wheels
      const wheelSize = 15
      const wheelOffsetX = bucketWidth / 2 - 10
      const wheelOffsetY = bucketHeight / 2 + wheelSize / 2 + 2
      const wheelStiffness = 0.5
      // wheelA
      const wheelAX = cartX - wheelOffsetX
      const wheelAY = cartY + wheelOffsetY
      const wheelA = Matter.Bodies.circle(wheelAX, wheelAY, wheelSize, {
        friction: 0
      })
      Matter.Composite.addBody(cart, wheelA)
      const wheelAConstraint = Matter.Constraint.create({
        bodyA: bucket,
        pointA: { x: -wheelOffsetX, y: wheelOffsetY },
        bodyB: wheelA,
        stiffness: wheelStiffness
      })
      Matter.Composite.addConstraint(cart, wheelAConstraint)
      // wheelB
      const wheelBX = cartX + wheelOffsetX
      const wheelBY = cartY + wheelOffsetY
      const wheelB = Matter.Bodies.circle(wheelBX, wheelBY, wheelSize, {
        friction: 0
      })
      Matter.Composite.addBody(cart, wheelB)
      const wheelBConstraint = Matter.Constraint.create({
        bodyA: bucket,
        pointA: { x: wheelOffsetX, y: wheelOffsetY },
        bodyB: wheelB,
        stiffness: wheelStiffness
      })
      Matter.Composite.addConstraint(cart, wheelBConstraint)
      // --- // cart ----------

      // --- items // ----------
      const items = this.items
      const itemStiffness = 25
      const itemTextureScale = 30 / 100
      let itemY = cartY
      const itemXOffsetCandidates = [-20, 0, 20]
      items.forEach(function(item) {
        let itemXOffset =
          itemXOffsetCandidates[
            Math.floor(Math.random() * itemXOffsetCandidates.length)
          ]
        let itemContent = Matter.Bodies.rectangle(
          cartX - itemXOffset,
          (itemY -= itemStiffness),
          itemStiffness,
          itemStiffness,
          {
            render: {
              sprite: {
                texture: item.imageUrl, // 100x100
                xScale: itemTextureScale,
                yScale: itemTextureScale
              }
            }
          }
        )
        contents.push(itemContent)
      })
      // --- // items ----------

      // add
      Matter.World.add(world, contents)

      // --- // contents ----------
    }
    // drawScreen()
  }
}
</script>

<style>
#cart-screen canvas {
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 300px;
}
</style>
