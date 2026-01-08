<template><div></div></template>
<script>
export default {
    name: 'AndonProcess',
    props: {
        processProp: { type: Object, required: true },
    },
    methods: {
        /**
         * draws the process using canvas. calls the drawn shapes and number
         * @param {object} canvasContext - 2d rendered canvas context
         */
        drawAndonProcess(canvasContext) {
            const canvasStyle = {
                boxWidth: 90,
                boxHeight: 60,
                circleRadius: 22,
                lineWidth: 2,
                statusColors: {
                    InOperation: '#006e00',
                    InPreparation: '#fff000',
                    AbnormalStop: '#ff1800',
                },
            }

            const { x_coordinate, y_coordinate, process_id, status } = this.processProp
            const strokeStyle = status === 'InPreparation' ? '#000000' : '#ffffff'

            this.drawProcessBox(canvasContext, x_coordinate, y_coordinate, status, canvasStyle)
            this.drawProcessCircle(
                canvasContext,
                x_coordinate,
                y_coordinate,
                strokeStyle,
                canvasStyle,
            )
            this.drawProcessId(canvasContext, x_coordinate, y_coordinate, process_id, strokeStyle)
        },
        /**
         * draws a rectangle shape using rect()
         * @param {object} canvasContext - 2d rendered canvas context
         * @param {number} x_coordinate -  x-coordinate of the upper-left corner of the rectangle
         * @param {number} y_coordinate - y-coordinate of the upper-left corner of the rectangle
         * @param {string} status - current status of the shape to change the color
         * @param {object} canvasStyle - dimension and style configurations
         */
        drawProcessBox(canvasContext, x_coordinate, y_coordinate, status, canvasStyle) {
            const drawX = x_coordinate - canvasStyle.boxWidth / 2
            const drawY = y_coordinate - canvasStyle.boxHeight / 2
            canvasContext.fillStyle = canvasStyle.statusColors[status]
            canvasContext.strokeStyle = '#ffffff'
            canvasContext.lineWidth = canvasStyle.lineWidth
            canvasContext.fillRect(drawX, drawY, canvasStyle.boxWidth, canvasStyle.boxHeight)
            canvasContext.strokeRect(drawX, drawY, canvasStyle.boxWidth, canvasStyle.boxHeight)
        },
        /**
         * draws a circle using arc()
         * @param {object} canvasContext - 2d rendered canvas context
         * @param {number} x_coordinate -  x-coordinate of the arc's center
         * @param {number} y_coordinate - y-coordinate of the arc's center
         * @param {string} strokeStyle - changes the color of the border based on process status
         * @param {object} canvasStyle - dimension and style configurations
         */
        drawProcessCircle(canvasContext, x_coordinate, y_coordinate, strokeStyle, canvasStyle) {
            canvasContext.beginPath()
            canvasContext.arc(x_coordinate, y_coordinate, canvasStyle.circleRadius, 0, Math.PI * 2)
            canvasContext.strokeStyle = strokeStyle
            canvasContext.lineWidth = canvasStyle.lineWidth
            canvasContext.stroke()
            canvasContext.closePath()
        },
        /**
         * draws the text using fillText()
         * @param {object} canvasContext - 2d rendered canvas context
         * @param {number} x_coordinate -  x-coordinate of the arc's center
         * @param {number} y_coordinate - y-coordinate of the arc's center
         * @param {number} process_id - dimension and style configurations
         * @param {string} strokeStyle - changes the color of the border based on process status
         */
        drawProcessId(canvasContext, x_coordinate, y_coordinate, process_id, strokeStyle) {
            let verticalOffset = 2
            let horizontalOffset = process_id >= 10 ? -1 : 0

            if (process_id === 1) {
                horizontalOffset = -1
                verticalOffset = 3
            } else if (process_id === 3) {
                verticalOffset = 3
            } else if (process_id === 7) {
                horizontalOffset = 0.5
                verticalOffset = 3.5
            } else if (process_id === 9) {
                verticalOffset = 3
            }

            canvasContext.fillStyle = strokeStyle
            canvasContext.font = '30px Arial'
            canvasContext.textAlign = 'center'
            canvasContext.textBaseline = 'middle'

            canvasContext.fillText(
                process_id,
                x_coordinate + horizontalOffset,
                y_coordinate + verticalOffset,
            )
        },

    },
}
</script>
