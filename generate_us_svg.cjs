const fs = require('fs');
const topojson = require('topojson-client');
const topojsonSimplify = require('topojson-simplify');
const d3Geo = require('d3-geo');

let us = require('us-atlas/states-10m.json');

// Pre-simplify the mesh
const pre = topojsonSimplify.presimplify(us);
const simplified = topojsonSimplify.simplify(pre, 0.05);

const projection = d3Geo.geoAlbersUsa().scale(1300).translate([480, 280]);
const path = d3Geo.geoPath().projection(projection);

// Get outer boundary of lower 48
const mesh = topojson.mesh(simplified, simplified.objects.states, (a, b) => a === b);

let svgPath = path(mesh);
console.log('Simplified Path length:', svgPath.length);

let tsxCode = fs.readFileSync('views/components/PlacementReach.tsx', 'utf-8');

const pathCode = 'const US_PATH = `' + svgPath + '`;';

const newSvg = `                            <svg viewBox="0 0 960 593" className="reachMapSvg drop-shadow-sm w-full h-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
                                <path d={US_PATH} className="reachMapShape" fill="#eef2f7" stroke="#e4eaf2" strokeWidth="2" />
                                
                                {/* Gold Dots overlay to represent placements */}
                                {/* D1: Gold with drop shadow */}
                                <g className="placement-dots-d1" fill="var(--s3-gold, #b08a2e)" style={{ filter: 'drop-shadow(0 2px 6px rgba(176,138,46,0.5))' }}>
                                    <circle cx="680" cy="270" r="10" />
                                    <circle cx="750" cy="180" r="9" />
                                    <circle cx="690" cy="350" r="11" />
                                    <circle cx="610" cy="380" r="10" />
                                    <circle cx="720" cy="220" r="9" />
                                    <circle cx="820" cy="150" r="8" />
                                </g>
                                
                                {/* JUCO: Navy with drop shadow */}
                                <g className="placement-dots-juco" fill="var(--s3-navy, #0b1f3a)" style={{ filter: 'drop-shadow(0 2px 6px rgba(11,31,58,0.5))' }}>
                                    <circle cx="550" cy="220" r="7" />
                                    <circle cx="420" cy="310" r="8" />
                                    <circle cx="500" cy="360" r="7" />
                                    <circle cx="280" cy="240" r="8" />
                                </g>
                            </svg>`;

let updatedTsx = tsxCode.replace('export const PlacementReach = () => {\n', 'export const PlacementReach = () => {\n    ' + pathCode + '\n');
updatedTsx = updatedTsx.replace(/<svg viewBox=[\s\S]*?<\/svg>/, newSvg);

fs.writeFileSync('views/components/PlacementReach.tsx', updatedTsx);
console.log('Successfully injected the SVG map!');
