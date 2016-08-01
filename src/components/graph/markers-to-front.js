export default function markersToFront() {
  this.renderer.g('markers-container').attr({
    zIndex: 4,
  }).add();

  this.container.querySelectorAll('.highcharts-markers').forEach(marker => {
    this.container.querySelector('.highcharts-markers-container').appendChild(marker);
  });
}
