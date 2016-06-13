function add(language, rating) {
  if (config.data.datasets.length > 0) {
    if (config.data.labels.indexOf('Initialise by choosing a skill') != -1){
      config.data.labels.push(language);
      $.each(config.data.datasets, function(i, dataset) {
        dataset.data.push(rating);
      });
      $.each(config.data.datasets, function(i, dataset) {
        dataset.data.splice(config.data.labels.indexOf('Initialise by choosing a skill'), 1);
      });
      config.data.labels.splice(config.data.labels.indexOf('Initialise by choosing a skill'), 1);
    } else if (config.data.labels.indexOf(language) != -1){
      if(config.data.labels.length == 1){
        config.data.labels.push('Initialise by choosing a skill');
        $.each(config.data.datasets, function(i, dataset) {
          dataset.data.push(100);
        });
        $.each(config.data.datasets, function(i, dataset) {
          dataset.data.splice(config.data.labels.indexOf(language), 1);
        });
        config.data.labels.splice(config.data.labels.indexOf(language), 1);
      } else{
        $.each(config.data.datasets, function(i, dataset) {
          dataset.data.splice(config.data.labels.indexOf(language), 1);
        });
        config.data.labels.splice(config.data.labels.indexOf(language), 1);
      }
    } else {
      config.data.labels.push(language);
      $.each(config.data.datasets, function(i, dataset) {
        dataset.data.push(rating);
      });
    }
    window.myRadar.update();
  }
}


var randomColorFactor = function() {
  return Math.round(Math.random() * 255);
};
var randomColor = function(opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
};
var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};
var config = {
  type: 'radar',
  data: {
    labels: ["Initialise by choosing a skill"],
    datasets: [{
      label: "Select your required skill set",
      backgroundColor: "rgba(64,64,64,0.3)",
      pointBackgroundColor: "rgba(64,64,64,1)",
      data: [100]
    }]
  },
  options: {
    legend: {
      labels: {
        fontSize: 30
      },
      position: 'top',
      display: 'false'
    },
    title: {
      fontSize: 40,
      display: true,
      text: 'Employer Skills Radar'
    },
    scale: {
      reverse: false,
      pointLabels: {
        fontSize: 20
      },
      gridLines: {
        color: ['#808080', '#FF007F', '#7F00FF', '#0000FF', '#0080FF', '#00FF80', '#00FF00', '#80FF00', '#FFFF00', '#FF8000', '#FF0000']
      },
      ticks: {
        beginAtZero: true
      }
    }
  }
};

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1800, 'swing', function () {
      window.location.hash = target;
    });
  });




  window.onload = function() {
    var ctx = document.getElementById("chart-area");
    window.myRadar = new Chart(document.getElementById("canvas"), config);
  };



});
