<script>
export default {
  name: "AndonProcess",
  props: {
    process: {
      type: Object,
      required: true
    }
  },
  methods: {
    draw(ctx) {
        const boxWidth = 70;    
        const boxHeight = 40;   
        const circleRadius = 15;

        const { x, y, id, status } = this.process;

        const drawX = x - boxWidth / 2;
        const drawY = y - boxHeight / 2;

        // Status-color mapping for rectangle fill
        const statusColors = {
        ok: "#4caf50",       // green
        warning: "#ff9800",  // orange
        error: "#f44336",    // red
        default: "#ffffff"   // fallback (white)
        };

        const fillColor = statusColors[status] || statusColors.default;

        // Rectangle
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = "#000"; // rectangle border stays black
        ctx.lineWidth = 2;
        ctx.fillRect(drawX, drawY, boxWidth, boxHeight);
        ctx.strokeRect(drawX, drawY, boxWidth, boxHeight);

        // Circle
        ctx.beginPath();
        ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = "#ffffff"; // white outline
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // Number inside circle
        ctx.fillStyle = "#ffffff";  // white number
        ctx.font = "16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(id, x, y);
    }
   },

  render() {
    return null; // canvas-only logic
  }
};
</script>
