function jumpMenu(obj){
  eval("window.location='"+obj.options[obj.selectedIndex].value+"'");
}

var s = ''
s += '<option>Choose a 3D object</option>'
s += '<option value="cylinder.html">Overview</option>'
s += '<option value="arrow.html">arrow</option>'
s += '<option value="box.html">box</option>'
s += '<option value="cone.html">cone</option>'
s += '<option value="curve.html">curve</option>'
s += '<option value="cylinder.html">cylinder</option>'
s += '<option value="helix.html">helix</option>'
s += '<option value="label.html">label</option>'
s += '<option value="lights.html">lights</option>'
s += '<option value="points.html">points</option>'
s += '<option value="pyramid.html">pyramid</option>'
s += '<option value="ring.html">ring</option>'
s += '<option value="sphere.html">sphere</option>'
s += '<option value="triangle.html">triangle/quad</option>'
document.getElementById("menu1").innerHTML = s

s = ''
s += '<option>Work with 3D objects</option>'
s += '<option value="color.html">Color</option>'
s += '<option value="textures.html">Textures</option>'
s += '<option value="compound.html">Compound Objects</option>'
s += '<option value="clone.html">Clone</option>'
s += '<option value="rate.html">Animation Speed</option>'
s += '<option value="rotation.html">Rotations</option>'
s += '<option value="trail.html">Attach a trail or arrow</option>'
s += '<option value="controls.html">Buttons/Sliders/Menus</option>'
s += '<option value="delete.html">Delete an Object</option>'
s += '<option value="lights.html">Lighting</option>'
s += '<option value="text_output.html">Text Output</option>'
s += '<option value="math.html">Math Functions</option>'
s += '<option value="vector.html">Vector Operations </option>'
s += '<option value="MathJax.html">LaTeX Math Displays</option>'
s += '<option value="files.html">Libraries &amp; Files</option>'
document.getElementById("menu2").innerHTML = s

s = ''
s += '<option>Canvases/Events</option>'
s += '<option value="display.html">Canvases</option>'
s += '<option value="graph.html">Graphs</option>'
s += '<option value="mouse.html">Mouse/Keyboard</option>'
s += '<option value="mouse_click.html">&nbsp;&nbsp;&nbsp;Mouse Click</option>'
s += '<option value="mouse_drag.html">&nbsp;&nbsp;&nbsp;Mouse Drag</option>'
document.getElementById("menu3").innerHTML = s
