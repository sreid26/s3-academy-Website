const fs = require('fs');
const topojson = require('topojson-client');
const topojsonSimplify = require('topojson-simplify');
const d3Geo = require('d3-geo');

let us = require('us-atlas/states-10m.json');

const pre = topojsonSimplify.presimplify(us);
const simplified = topojsonSimplify.simplify(pre, 0.05);

const projection = d3Geo.geoAlbersUsa().scale(1300).translate([480, 280]);
const path = d3Geo.geoPath().projection(projection);

// Get outer boundary of lower 48
const mesh = topojson.mesh(simplified, simplified.objects.states, (a, b) => a === b);

let svgPath = path(mesh);
console.log('Simplified Path length:', svgPath.length);

let tsxCode = fs.readFileSync('views/components/PlacementReach.tsx', 'utf-8');

// Replace the placeholder tag with the constant
let updatedTsx = tsxCode.replace('// INJECT_US_PATH_HERE', 'const US_PATH = `' + svgPath + '`;');

fs.writeFileSync('views/components/PlacementReach.tsx', updatedTsx);
console.log('Successfully injected the US_PATH constant into the new map architecture!');
