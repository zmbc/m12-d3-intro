// Main JavaScript File

// First Exam
var exam1 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:90},
  {id:3, student:'Rose', grade:80},
];

// Second Exam
var exam2 = [
  {id:1, student:'Jade', grade:75},
  {id:2, student:'Billy', grade:85},
  {id:3, student:'Rose', grade:90},
  {id:4, student:'Avery', grade:90},
];

// Third Exam
var exam3 = [
  {id:1, student:'Jade', grade:95},
  {id:2, student:'Billy', grade:80},
  {id:3, student:'Rose', grade:80},
  {id:4, student:'Avery', grade:70},
];

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // Select SVG
  var svg = d3.select('#my-svg').attr('height', 200);
  // Reusable draw function
  function draw(data) {
    // Bind data to selection of rects in your svg
    var rects = svg.selectAll('rect').data(data, function(x) {return x.id;});

    // Enter rect elements
    rects.enter()
      .append('rect')
      .attr('x', 20)
      .attr('width', 0)
      .attr('y', function(x) {return 40 * x.id})
      .attr('height', 30)
      .attr('fill', 'black')
      .merge(rects)
      .transition(500)
      .attr('width', function(x) {return x.grade});
      
    rects.exit()
      .transition(500)
      .attr('width', 0)
      .remove();
    
    var text = svg.selectAll('text').data(data, function(x) {return x.id;});
    
    text.enter()
      .append('text')
      .style('fill', 'white')
      .attr('x', 23)
      .merge(text)
      .attr('y', function(x) {return 40 * x.id + 19})
      .text(function(x) {return x.student});
    
    text.exit()
      .transition(500)
      .remove();

    // Entering and updating elements rects
    

    // Transition a remove for exiting element
    // Perform the same data-binding for text
  }

    // enter elements


    // Entering and updating elements rects


    // Transition a remove for exiting elements
    $('button').on('click', function() {
      var btn = $(this).attr("id");
      switch(btn){
        case 'exam-1':
          draw(exam1);
          break;
        case 'exam-2':
          draw(exam2);
          break;
        case 'exam-3':
          draw(exam3);
          break;
        default:
          break;
      };
    })



});
