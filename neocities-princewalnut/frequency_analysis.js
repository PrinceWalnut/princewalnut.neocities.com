// Load dependencies
google.charts.load('current', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(freq_histogram);

function freq_histogram(inp)
{ 
// Initialize variables
var a_count = 0;
var b_count = 0;
var c_count = 0;
var d_count = 0;
var e_count = 0;
var f_count = 0;
var g_count = 0;
var h_count = 0;
var i_count = 0;
var j_count = 0;
var k_count = 0;
var l_count = 0;
var m_count = 0;
var n_count = 0;
var o_count = 0;
var p_count = 0;
var q_count = 0;
var r_count = 0;
var s_count = 0;
var t_count = 0;
var u_count = 0;
var v_count = 0;
var w_count = 0;
var x_count = 0;
var y_count = 0;
var z_count = 0;

let arr_counts = [a_count, b_count, c_count, d_count, e_count, f_count, g_count, h_count, i_count, j_count, k_count, l_count, m_count, n_count, o_count, p_count, q_count, r_count, s_count, t_count, u_count, v_count, w_count, x_count, y_count, z_count];

// Format string using regex
var inp_formatted = inp.toLowerCase().replace(/[^a-zA-Z]+/g, "-"); // Could have fucked the regex but I think this is right
var char;

for(i = 0; i < inp_formatted.length; i++)
{
  char = inp_formatted.charAt(i); // Get char at index
  switch (char) // Increment count based on what char is
  {
  case 'a':
    a_count++;
    break;
  case 'b':
    b_count++;
    break;
  case 'c':
    c_count++;
    break;
  case 'd':
    d_count++;
    break;
  case 'e':
    e_count++;
    break;
  case 'f':
    f_count++;
    break;
  case 'g':
    g_count++;
    break;
  case 'h':
    h_count++;
    break;
  case 'i':
    i_count++;
    break;
  case 'j':
    j_count++;
    break;
  case 'k':
    k_count++;
    break;
  case 'l':
    l_count++;
    break;
  case 'm':
    m_count++;
    break;
  case 'n':
    n_count++;
    break;
  case 'o':
    o_count++;
    break;
  case 'p':
    p_count++;
    break;
  case 'q':
    q_count++;
    break;
  case 'r':
    r_count++;
    break;
  case 's':
    s_count++;
    break;
  case 't':
    t_count++;
    break;
  case 'u':
    u_count++;
    break;
  case 'v':
    v_count++;
    break;
  case 'w':
    w_count++;
    break;
  case 'x':
    x_count++;
    break;
  case 'y':
    y_count++;
    break;
  case 'z':
    z_count++;
    break;
  }
}

// Instantiate data table
var data = google.visualization.arrayToDataTable([
  ['Character', 'Frequency'],
  ['A', a_count],
  ['B', b_count],
  ['C', c_count],
  ['D', d_count],
  ['E', e_count],
  ['F', f_count],
  ['G', g_count],
  ['H', h_count],
  ['I', i_count],
  ['J', j_count],
  ['K', k_count],
  ['L', l_count],
  ['M', m_count],
  ['N', n_count],
  ['O', o_count],
  ['P', p_count],
  ['Q', q_count],
  ['R', r_count],
  ['S', s_count],
  ['T', t_count],
  ['U', u_count],
  ['V', v_count],
  ['W', w_count],
  ['X', x_count],
  ['Y', y_count],
  ['Z', z_count],
]);

// Customization options for chart
var options = {'title':'Frequency of Alphabetic Characters',
                       'width':1200,
                       'height':600,
                       'legend': { position: 'none' },
                       'vAxis': { baseline: 0 }};

// Instantiate the chart
var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));

// Draw the chart
chart.draw(data, options);
}

function rand_string()
{
  const str_len = 1000; // Length of random string
  char_arr = Array(str_len); // Initialize array
  
  // Populate array with random characters
  for(i = 0; i < str_len; i++)
  {
    
    char_arr[i] = String.fromCharCode(Math.floor(Math.random()*26 + 97));
  }
  console.log(char_arr);
  
  // Combine into a string
  rand_str = char_arr.join("");
  console.log(rand_str);
  
  // Put result into input for frequency analyzer
  document.getElementById("freq_input").value = rand_str;
}