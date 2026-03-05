import React, { useState, useMemo } from 'react';
import { Icon } from '@iconify/react';
import geoDataRaw from '../data/placements_geo.json';
import { Placement } from '../Alumni';

// Types
interface GeoNode {
    id: string;
    schoolName: string;
    level: 'D1' | 'JUCO';
    region: string;
    x: number;
    y: number;
    placeholder?: boolean;
}
const geoData = geoDataRaw as GeoNode[];

interface PlacementReachProps {
    placements: Placement[];
    activeRegion: string;
    setActiveRegion: (region: string) => void;
    activeSchoolId: string | null;
    setActiveSchoolId: (id: string | null) => void;
}

const REGIONS = ['All', 'Southeast', 'Mid-Atlantic', 'Northeast'];

export const PlacementReach = ({
    placements,
    activeRegion,
    setActiveRegion,
    activeSchoolId,
    setActiveSchoolId
}: PlacementReachProps) => {

    // US_PATH will be dynamically injected here to bypass 16KB prompt limits
    const US_PATH = `M640.457,467.431L640.457,467.431M103.511,519.997L103.511,519.997M102.184,534.473L102.184,534.473M99.2,536.075L99.2,536.075M98.433,536.226L98.433,536.226M97.841,535.978L97.841,535.978M97.965,543.521L97.965,543.521M97.039,537.927L97.039,537.927M96.668,526.601L96.668,526.601M95.883,538.034L95.883,538.034M94.521,528.099L94.521,528.099M91.602,544.889L92.652,544.68L94.678,540.854L97.529,542.487L97.187,544.065L95.024,543.914L93.445,545.497L91.602,544.889M90.946,534.318L90.946,534.318M88.479,555.821L88.479,555.821M87.582,557.007L87.582,557.007M85.84,550.435L91.473,545.691L95.588,545.633L96.253,549.915L94.512,549.296L89.292,555.398L90,552.115L87.876,554.589L85.84,550.435M85.643,557.851L85.643,557.851M81.378,562.606L81.378,562.606M76.988,560.777L76.988,560.777M76.803,559.497L76.803,559.497M74.647,556.662L74.647,556.662M72.035,558.052L72.035,558.052M67.37,561.905L67.37,561.905M66.301,561.42L66.301,561.42M64.898,569.114L64.898,569.114M65.152,562.343L65.152,562.343M64.294,568.655L64.294,568.655M63.552,569.667L63.552,569.667M63.544,566.668L63.544,566.668M62.574,569.528L62.574,569.528M62.607,567.662L62.607,567.662M61.607,565.351L61.607,565.351M60.693,568.487L60.693,568.487M63.228,538.641L63.228,538.641M60.629,564.519L60.629,564.519M62.735,538.676L62.735,538.676M58.256,565.147L58.256,565.147M60.011,539.155L60.011,539.155M55.603,565.67L55.603,565.67M54.409,565.527L54.409,565.527M53.362,566.207L53.362,566.207M50.778,567.393L50.778,567.393M58.643,498.915L58.643,498.915M48.472,570.922L48.472,570.922M47.997,563.016L47.997,563.016M38.873,571.445L38.873,571.445M37.104,571.991L37.104,571.991M35.864,571.991L35.864,571.991M35.389,572.178L35.389,572.178M35.182,570.467L35.182,570.467M33.128,570.946L33.128,570.946M32.454,572.103L32.454,572.103M36.695,522.469L38.702,522.936L42.008,521.664L43.613,523.124L43.456,526.205L40.858,527.015L36.881,523.674L36.695,522.469M23.766,575.785L28.847,573.57L27.873,572.495L30.436,571.486L32.63,573.182L29.092,575.852L24.73,576.515L23.766,575.785M43.21,479.542L49.073,476.809L53.745,475.046L56.367,474.546L58.352,475.111L57.741,478.926L63.876,480.047L65.005,478.445L66.774,478.687L62.207,473.198L63.231,472.631L63.736,475.062L64.922,471.982L62.72,472.292L59.043,470.598L58.724,467.279L55.429,462.903L51.863,459.646L53.545,458.095L54.012,455.759L59.676,456.315L62.966,453.826L64.16,449.987L67.76,446.385L70.683,446.339L74.116,443.399L78.433,443.419L81.83,440.057L85.059,441.11L83.929,442.653L84.786,443.751L86.461,441.284L87.647,443.785L91.188,443.033L93.904,443.742L93.417,445.431L94.929,446.774L96.922,447.121L101.425,445.765L106.454,447.845L111.45,447.561L114.13,448.842L118.532,446.655L124.131,449.288L125.38,449.441L139.789,522.061L143.875,522.197L147.03,520.097L147.062,522.273L154.84,527.354L156.115,529.772L159.007,526.914L158.999,523.334L161.935,520.851L164.18,522.16L168.817,526.637L173.257,528.839L182.039,537.478L184.087,540.553L192.561,541.596L195.406,547.594L193.921,552.929L190.931,550.015L186.381,549.04L181.711,545.472L182.677,543.225L180.715,540.395L175.74,538.495L173.474,534.076L170.756,531.533L168.712,531.754L163.356,524.653L167.15,532.696L165.179,531.529L160.912,534.241L155.748,532.23L152.5,529.483L145.479,527.141L145.773,524.322L143.451,526.305L138.006,525.196L132.715,525.106L127.818,526.631L121.311,523.686L117.767,525.628L120.944,522.773L118.262,522.388L115.632,519.17L114.622,521.201L110.914,522.445L112.777,524.851L113.552,527.874L111.916,529.025L107.71,529.047L103.84,533.723L103.91,532.368L101.312,535.378L98.934,535.975L97.675,533.949L100.073,532.478L97.656,531.1L99.307,527.574L99.191,523.528L103.048,520.804L104.573,522.116L104.449,519.146L101.847,518.824L98.826,521.226L95.751,525.352L96.068,526.241L92.95,531.9L88.689,534.529L88.118,536.301L91.627,537.702L91.628,539.482L89.567,540.649L88.297,544.324L85.012,545.272L78.245,550.847L78.136,553.285L74.542,554.097L69.45,557.937L71.032,558.929L69.176,560.808L63.326,561.332L59.814,564.056L55.379,564.477L55.117,562.503L53.093,566.257L48.082,566.926L45.207,569.172L39.245,569.807L39.144,568.284L41.753,566.068L49.034,565.128L52.307,561.505L54.521,560.144L59.973,560.009L61.229,557.764L67.707,553.756L68.902,554.275L70.346,550.865L73.547,548.449L74.896,541.011L76.425,538.194L72.12,539.974L70.466,538.37L69.728,540.871L68.267,541.286L65.786,536.984L64.964,538.114L63.513,535.656L57.225,539.146L57.496,535.828L56.682,533.31L58.297,531.737L56.312,526.067L55.623,527.325L50.845,528.306L44.963,521.269L46.939,520.202L47.395,517.799L43.569,513.227L45.926,510.947L46.216,508.628L49.971,504.862L51.228,501.74L53.533,500.786L56.783,502.887L59.992,499.86L63.99,500.195L65.509,498.196L65.169,494.465L64.066,491.955L66.211,490.729L65.007,488.969L60.111,491.514L53.777,490.486L51.626,491.028L47.728,489.139L47.179,484.75L48.008,483.152L45.14,482.023L43.21,479.542M17.377,578.043L21.753,574.049L23.932,575.249L17.377,578.043M16.205,578.504L16.205,578.504M14.281,576.375L14.281,576.375M20.953,548.262L20.953,548.262M14.403,575.579L14.403,575.579M12.896,577.108L12.896,577.108M12.497,576.562L12.497,576.562M11.821,577.851L11.821,577.851M19.352,543.345L19.352,543.345M8.538,578.021L8.538,578.021M7.027,577.752L7.027,577.752M6.085,578.247L6.085,578.247M26.952,492.793L28.008,491.998L30.182,493.46L31.848,492.865L34.47,496.164L37.316,497.448L34.648,498.019L33.339,499.458L31.479,496.142L29.22,494.431L27.736,494.998L26.952,492.793M-0.469,578.03L-0.469,578.03M15.928,514.878L15.928,514.878M16.266,513.343L16.266,513.343M-7.516,577.287L-7.516,577.287M-13.753,576.156L-8.496,576.303L-11.038,577.21L-13.753,576.156M-14.717,576.206L-14.717,576.206M-14.345,574.655L-14.345,574.655M-15.826,575.96L-15.826,575.96M-16.77,575.502L-16.77,575.502M-17.673,574.393L-17.673,574.393M-18.495,576.22L-18.495,576.22M-22.528,576.44L-20.628,574.295L-18.625,575.786L-22.528,576.44M-23.957,573.528L-23.957,573.528M-25.636,574.642L-22.056,574.352L-23.036,575.599L-25.636,574.642M-27.558,572.459L-27.558,572.459M-30.433,573.648L-30.433,573.648M-31.337,573.564L-31.337,573.564M-30.773,571.934L-30.773,571.934M-32.535,574.754L-32.535,574.754M-33.478,575.189L-33.478,575.189M-37.718,567.507L-37.718,567.507M-42.685,568.342L-42.685,568.342M-42.413,565.519L-42.413,565.519M-43.831,566.191L-43.831,566.191M-43.817,564.421L-43.817,564.421M-48.247,563.592L-48.247,563.592M-52.528,557.407L-52.528,557.407M-59.043,550.894L-59.043,550.894M-59.474,550.523L-59.474,550.523M-59.754,550.161L-59.754,550.161M-63.307,551.592L-63.307,551.592M-65.142,545.889L-62.17,546.916L-61.414,548.789L-64.201,547.655L-65.142,545.889M190.572,550.992L190.572,550.992M189.901,552.424L189.901,552.424M189.325,552.662L189.325,552.662M188.983,552.031L188.983,552.031M187.171,549.894L187.171,549.894M181.638,542.212L181.638,542.212M181.654,543.252L181.654,543.252M181.019,542.592L181.019,542.592M183.783,554.307L183.783,554.307M180.094,545.02L180.094,545.02M179.6,544.117L179.6,544.117M180.816,551.498L180.816,551.498M181.11,556.053L181.11,556.053M178.891,550.45L178.891,550.45M178.544,550.151L178.544,550.151M178.722,551.899L178.722,551.899M177.396,548.1L177.464,544.841L179.292,544.548L185.767,549.59L188.193,555.112L182.108,552.543L185.466,556.258L182.639,554.81L181.887,551.288L177.396,548.1M173.949,538.035L173.949,538.035M176.985,548.658L176.985,548.658M175.19,549.225L175.19,549.225M172.824,542.152L175.09,541.475L174.418,539.587L177.853,539.259L181.225,541.673L176.89,544.227L176.487,547.325L175.157,547.485L172.824,542.152M167.056,530.948L170.735,531.869L173.664,536.763L172.06,540.862L171.361,538.073L167.056,530.948M166.524,530.141L166.524,530.141M164.138,526.686L164.138,526.686M166.381,539.774L167.075,537.912L169.75,538.406L172.189,543.337L173.33,547.632L168.435,544.002L168.03,540.291L166.381,539.774M164.079,532.127L164.079,532.127M165.994,540.892L165.994,540.892M161.88,530.822L161.88,530.822M162.543,533.23L162.543,533.23M161.594,536.432L161.357,535.262L164.018,532.791L167.83,533.68L169.648,537.687L166.202,537.243L166.311,539.751L161.594,536.432M121.723,524.49L121.723,524.49M120.316,524.436L120.316,524.436M114.84,521.158L114.84,521.158M114.329,523.026L114.329,523.026M114.627,526.203L114.627,526.203M113.314,530.09L116.092,525.043L116.766,525.936L113.314,530.09M112.894,526.443L112.894,526.443M112.269,522.649L112.269,522.649M807.104,569.438L807.104,569.438M805.228,570.969L805.228,570.969M799.944,573.993L799.944,573.993M786.18,579.247L792.991,572.683L797.616,575.118L786.18,579.247M782.106,580.438L782.106,580.438M778.921,580.46L778.921,580.46M769.934,533.303L769.934,533.303M762.8,581.184L762.8,581.184M712.94,470.221L712.94,470.221M932.259,89.81L932.259,89.81M930.469,91.14L930.469,91.14M928.824,87.243L928.824,87.243M924.674,91.039L924.674,91.039M926.01,99.739L926.01,99.739M923.846,94.216L923.846,94.216M922.621,91.274L922.621,91.274M920.155,161.773L920.155,161.773M910.826,163.313L910.826,163.313M856.785,304.136L856.785,304.136M855.821,324.66L855.821,324.66M69.702,349.298L69.702,349.298M67.228,359.217L67.228,359.217M61.452,346.974L61.452,346.974M57.646,333.356L57.646,333.356M50.775,349.297L50.775,349.297M49.091,330.045L49.091,330.045M42.758,330.19L42.758,330.19M39.338,328.442L39.338,328.442M297.924,559.494L301.794,547.614L314.492,553.095L324.728,564.382L301.685,575.402L297.924,559.494M284.128,532.926L298.985,535.717L289.73,540.127L284.128,532.926M284.062,541.688L284.062,541.688M276.399,533.297L276.399,533.297M271.124,528.838L271.124,528.838M250.532,518.032L257.182,515.045L263.871,524.391L254.015,524.279L250.532,518.032M218.59,507.611L218.59,507.611M208.789,511.572L208.789,511.572M839.78,256.501L839.78,256.501M831.534,243.113L831.534,243.113M669.583,105.852L669.583,105.852M658.122,109.103L658.122,109.103M655.96,108.168L655.96,108.168M654.895,113.576L654.895,113.576M653.423,110.582L653.423,110.582M651.245,117.5L651.245,117.5M649.066,124.654L649.066,124.654M647.943,127.733L647.943,127.733M638.073,114.893L638.073,114.893M593.913,67.39L593.913,67.39M636.988,468.12L636.988,468.12M631.825,467.874L631.825,467.874M627.671,468.851L627.671,468.851M624.271,468.591L624.271,468.591M891.742,170.675L891.742,170.675M890.871,174.612L890.871,174.612M889.209,173.029L889.209,173.029M807.982,128.837L807.982,128.837M806.647,128.736L806.647,128.736M713.14,198.011L713.14,198.011M711.206,197.27L711.206,197.27M842.779,262.342L842.779,262.342M841.469,260.166L842.34,259.98L841.469,260.166M85.715,25.855L85.715,25.855M91.259,-0.412L91.259,-0.412M91.351,-4.659L91.351,-4.659M90.169,-1.549L90.169,-1.549M87.525,6.023L87.525,6.023M88.035,-7.066L88.035,-7.066M86.091,-5.446L86.091,-5.446M87.736,-12.029L87.736,-12.029M83.502,-3.775L90.657,-3.235L88.309,1.547L83.502,-3.775M83.621,-5.911L83.621,-5.911M634.446,121.276L634.446,121.276M628.096,125.355L628.096,125.355M576.491,88.258L576.491,88.258M575.764,91.157L575.764,91.157M573.692,90.167L573.692,90.167M572.126,92.199L572.126,92.199M572.305,89.37L572.305,89.37M571.673,88.045L571.673,88.045M571.69,93.448L571.69,93.448M568.488,89.072L568.488,89.072M630.051,472.393L630.051,472.393M620.983,472.914L620.983,472.914M616.231,485.166L616.231,485.166M602.026,495.766L602.026,495.766M598.419,496.308L598.419,496.308M594.697,497.376L594.697,497.376M569.063,486.469L569.063,486.469M900.354,158.841L900.354,158.841M900.941,163.419L900.941,163.419M899.232,170.981L899.232,170.981M894.253,168.504L877.677,174.514L866.543,183.316L892.125,176.806L875.873,189.391L864.181,194.264L861.68,191.4L861.415,192.149L859.079,196.431L864.607,198.205L865.697,212.274L855.08,234.035L855.447,228.828L841.841,221.35L841.663,220.825L842.239,219.39L842.003,224.718L853.624,237.589L856.181,245.265L855.021,255.486L850.857,263.215L848.901,276.851L845.106,275.692L848.009,258.819L833.895,249.154L838.853,246.375L831.532,241.264L833.651,256.947L827.094,256.534L819.582,248.741L818.591,256.005L838.477,262.31L837.642,273.868L851.336,290.921L851.791,297.988L839.913,307.723L855.204,303.935L857.614,312.308L852.258,319.327L835.547,318.432L846.71,322.081L842.982,330.802L851.527,328.645L848.614,337.406L839.292,337.611L830.856,344.984L825.898,359.094L815.284,361.139L806.733,371.244L803.516,382.879L793.148,393.971L784.601,398.74L778.589,409.583L775.082,417.338L772.672,441.053L779.264,460.616L797.155,485.98L799.087,496.891L812.525,519.317L815.273,528.532L816.214,548.714L812.244,561.066L799.391,564.745L793.148,552.806L784.386,550.405L778.974,539.243L770.015,531.825L758.572,516.727L763.659,508.26L754.485,508.952L754.414,485.151L738.577,473.324L732.855,465.642L719.944,462.429L706.118,475.776L687.382,462.979L673.192,460.824L656.185,465.073L651.395,465.907L645.9,456.732L644.078,465.195L638.953,464.497L629.192,464.705L617.213,470.417L618.795,488.391L624.946,488.82L626.662,496.8L612.307,490.347L605.114,496.108L600.642,490.423L593.504,497.753L582.827,492.476L571.369,480.808L563.102,488.056L546.088,483.214L533.134,485.369L514.559,492.854L516.215,484.156L510.091,486.473L515.637,493.833L502.78,504.516L481.727,516.381L474.691,515.403L461.908,539.271L461.627,558.208L466.919,570.167L462.226,572.634L445.321,567.468L426.783,558.443L420.434,544.938L420.09,534.373L404.507,515.78L397.8,496.98L382.83,480.703L366.76,477.498L359.773,480.306L349.269,496.56L329.638,485.934L323.015,479.521L315.473,454.929L308.273,450.362L288.769,427.066L256.746,423.217L255.432,433.388L239.354,431.259L200.624,425.486L134.83,386.734L137.576,382.046L92.011,376.661L89.052,357.258L73.825,337.125L62.19,331.741L57.527,324.27L41.275,319.242L42.336,303.544L34.573,288.814L27.522,267.296L32.191,260.918L23.96,249.276L25.736,235.843L31.005,245.115L28.358,232.232L18.721,228.486L21.035,223.277L12.616,203.975L16.563,184.162L10.973,172.198L23.768,147.911L25.073,134.944L25.307,114.899L36.384,98.569L49.672,67.474L57.491,45.577L63.433,45.229L55.487,42.652L62.158,34.013L58.43,32.213L61.082,-5.743L69.424,2.131L87.157,7.887L88.858,17.691L83.711,28.607L88.639,26.932L94.21,12.559L94.861,-4.091L92.515,-10.638L176.11,10.912L190.597,14.053L369.356,40.689L472,45.683L503.269,45.784L503.192,37.149L508.164,39.114L511.087,51.472L524.022,56.282L536.205,53.536L555.884,62.32L558.291,65.711L568.466,60.653L570.561,63.847L588.734,65.055L574.469,72.556L551.445,94.341L552.753,96.153L568.708,90.07L577.849,98.058L592.726,90.918L611.1,75.524L618.389,76.188L610.803,81.401L611.078,87.489L620.111,88.827L625.15,95.455L637.822,95.656L644.327,90.229L662.522,86.011L662.101,92.592L674.409,89.937L677.989,99.464L686.559,102.578L666.739,105.975L655.469,102.19L653.42,105.313L632.437,110.388L624.878,128.014L619.898,141.342L633.527,127.359L627.931,140.15L623.385,170.639L626.671,187.397L632.843,204.824L644.443,202.541L652.267,186.078L651.402,173.038L644.878,158.953L647.083,135.104L656.084,122.841L657.413,132.317L659.803,120.505L666.649,116.913L662.999,113.196L667.861,107.724L689.222,114.923L693.808,121.966L694.903,137.487L686.579,152.108L691.467,155.169L702.42,142.659L707.505,146.965L713.778,165.516L713.428,174.797L708.473,175.06L700.774,196.707L718.107,202.425L730.158,198.189L748.614,183.946L759.986,175.263L772.852,161.067L767.351,150.969L776.283,146.724L801.502,144.228L811.839,136.067L807.435,121.397L820.232,103.805L826.874,98.157L850.07,92.812L878.649,85.513L883.376,77.392L892.528,61.138L891.6,42.5L898.392,22.614L904.962,27.301L913.74,20.55L922.219,24.745L931.201,54.891L937.089,54.853L938.662,62.059L949.567,69.796L942.696,80.593L929.538,89.03L923.527,85.08L920.788,99.792L910.55,105.909L905.376,113.124L902.682,125.139L901.974,129.76L906.803,133.464L901.984,140.748L912.769,151.83L923.462,151.793L905.287,161.388L903.01,157.788L902.336,157.135L900.116,165.751L894.253,168.504`;
    const US_PATH_PLACEHOLDER = "M0,0"; // Fallback if missing

    const [hoveredSchoolId, setHoveredSchoolId] = useState<string | null>(null);

    // Compute alumni counts per school for "+N" badge
    const schoolCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        placements.forEach(p => {
            if (p.schoolId) counts[p.schoolId] = (counts[p.schoolId] || 0) + 1;
        });
        return counts;
    }, [placements]);

    // Handle smooth scrolling
    const scrollToPlacements = () => {
        const el = document.getElementById('placements');
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });

            // Focus the search input dynamically after scroll completes
            setTimeout(() => {
                const searchInput = document.querySelector('input[placeholder="Search athlete or college..."]') as HTMLInputElement;
                if (searchInput) searchInput.focus();
            }, 600);
        }
    };

    // Deterministic dot collision offset (fixes overlapping Northeast markers securely)
    const placedGeoData = useMemo(() => {
        const result = [...geoData];
        const THRESHOLD = 2.5; // % bounded proximity search
        const RADIUS = 1.6; // % offset sweep distance

        const clusters: GeoNode[][] = [];
        const used = new Set<string>();

        result.forEach(node => {
            if (used.has(node.id)) return;

            const cluster = result.filter(other => {
                if (used.has(other.id)) return false;
                const dx = node.x - other.x;
                const dy = node.y - other.y;
                return Math.sqrt(dx * dx + dy * dy) < THRESHOLD;
            });

            // Deterministic stable hash/sort
            cluster.sort((a, b) => a.id.localeCompare(b.id));
            cluster.forEach(c => used.add(c.id));
            clusters.push(cluster);
        });

        return clusters.flatMap(cluster => {
            if (cluster.length === 1) return cluster;
            return cluster.map((node, i) => {
                const angle = (i / cluster.length) * Math.PI * 2;
                return {
                    ...node,
                    x: node.x + Math.cos(angle) * RADIUS,
                    // aspect ratio correction for projection width
                    y: node.y + Math.sin(angle) * (RADIUS * 1.5)
                };
            });
        });
    }, []);

    // Global Key Down wrapper for escape to cancel
    const handleGlobalKeyDown = (e: any) => {
        if (e.key === 'Escape') {
            setActiveSchoolId(null);
            setHoveredSchoolId(null);
        }
    };

    return (
        <section className="py-12 px-4 bg-white relative z-10" onKeyDown={handleGlobalKeyDown}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <span className="font-sans text-gold font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-3 block">
                        National Reach
                    </span>
                    <h2 className="text-navy text-3xl md:text-4xl lg:text-5xl font-header font-bold uppercase tracking-tight leading-none mb-1">
                        Where S3 Alumni Are Competing
                    </h2>
                    <p className="text-slate-500 font-sans text-sm md:text-base leading-relaxed max-w-2xl mt-4">
                        Dots represent current placements (campus locations).
                    </p>
                </div>

                <div className="bg-white rounded-[20px] md:rounded-[24px] border border-[#e9edf3] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden w-full flex flex-col md:flex-row min-h-[500px]">

                    {/* Left Column - Map Container */}
                    <div className="w-full md:w-[65%] xl:w-[70%] p-6 md:p-8 lg:p-12 relative flex flex-col items-center justify-center bg-[#fdfdfe] border-r border-[#e9edf3]">
                        {/* Map SVG Aspect Container bounds the 960x593 view perfectly */}
                        <div className="relative w-full aspect-[960/593] flex items-center justify-center">

                            <svg viewBox="0 0 960 593" className="absolute inset-0 w-full h-full drop-shadow-sm" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
                                {/* Base Geometry */}
                                <path
                                    d={typeof US_PATH !== 'undefined' ? US_PATH : US_PATH_PLACEHOLDER}
                                    className="reachMapShape"
                                    fill="#eef2f7"
                                    stroke="#e4eaf2"
                                    strokeWidth="1.5"
                                />

                                {/* Interactive Dots Rendered in SVG space */}
                                {placedGeoData.map(g => {
                                    const cx = (g.x / 100) * 960;
                                    const cy = (g.y / 100) * 593;
                                    const isD1 = g.level === 'D1';
                                    const isHovered = hoveredSchoolId === g.id;
                                    const isActive = activeSchoolId === g.id;
                                    // Faded out if filtering by a different region or another dot is intensely pinned
                                    const isFaded = (activeRegion !== 'All' && g.region !== activeRegion) || (activeSchoolId && !isActive);

                                    const cRadius = isHovered || isActive ? 10 : (isD1 ? 8 : 6);
                                    const ringColor = isD1 ? '#d4af37' : '#274b7a';

                                    return (
                                        <g
                                            key={`dot-${g.id}`}
                                            transform={`translate(${cx}, ${cy})`}
                                            onMouseEnter={() => setHoveredSchoolId(g.id)}
                                            onMouseLeave={() => setHoveredSchoolId(null)}
                                            onClick={() => setActiveSchoolId(isActive ? null : g.id)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    setActiveSchoolId(isActive ? null : g.id);
                                                }
                                            }}
                                            className="cursor-pointer outline-none transition-all duration-300"
                                            style={{ opacity: isFaded ? 0.35 : 1 }}
                                            tabIndex={0}
                                            aria-label={`${g.schoolName} (${g.level}) - ${schoolCounts[g.id] || 0} placements`}
                                        >
                                            {/* Active Ring Offset */}
                                            {isActive && (
                                                <circle
                                                    r={cRadius + 4}
                                                    fill="none"
                                                    stroke={ringColor}
                                                    strokeWidth={2}
                                                    className="opacity-60 animate-pulse"
                                                />
                                            )}

                                            <circle
                                                r={cRadius}
                                                fill={isD1 ? 'var(--s3-gold, #b08a2e)' : 'var(--s3-navy, #0b1f3a)'}
                                                stroke="#ffffff"
                                                strokeWidth={isActive ? 3 : 2}
                                                style={{ filter: isHovered || isActive ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.25))' : 'drop-shadow(0 2px 3px rgba(0,0,0,0.15))', pointerEvents: 'auto' }}
                                                className={`transition-all duration-[400ms] ${isActive ? 'scale-110' : 'hover:scale-105'}`}
                                            />

                                            {schoolCounts[g.id] > 1 && (
                                                <g transform={`translate(${isActive ? 10 : 8}, ${isActive ? -10 : -8})`} className="pointer-events-none transition-transform duration-[400ms]">
                                                    <circle r="7" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
                                                    <text x="0" y="3" fontSize="8" fill="#ffffff" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">{schoolCounts[g.id]}</text>
                                                </g>
                                            )}
                                        </g>
                                    );
                                })}
                            </svg>

                            {/* Tooltip Overlay Array directly bounded by the exact % box as the SVG viewbox */}
                            <div className="absolute inset-0 pointer-events-none w-full h-full">
                                {placedGeoData.filter(g => g.id === hoveredSchoolId || g.id === activeSchoolId).map(g => {
                                    const alumniAtSchool = placements.filter(p => p.schoolId === g.id);

                                    // Horizontal clamping to prevent cutoff
                                    const alignClass = g.x > 80 ? '-translate-x-[90%]' : g.x < 20 ? '-translate-x-[10%]' : '-translate-x-1/2';
                                    const isPinned = g.id === activeSchoolId;

                                    return (
                                        <div
                                            key={`tooltip-${g.id}`}
                                            className={`absolute z-40 bg-white rounded-xl shadow-2xl border ${isPinned ? 'border-navy/20' : 'border-slate-100'} p-4 min-w-[250px] transform ${alignClass} -translate-y-[calc(100%+24px)] animate-fade-in-up pointer-events-auto`}
                                            style={{ left: `${g.x}%`, top: `${g.y}%` }}
                                            role="tooltip"
                                            aria-live="polite"
                                        >
                                            {/* Pinned Close Action */}
                                            {isPinned && (
                                                <button
                                                    className="absolute top-3.5 right-3.5 text-slate-400 hover:text-navy transition-colors focus:outline-none focus:ring-1 focus:ring-gold rounded bg-white p-0.5"
                                                    onClick={(e) => { e.stopPropagation(); setActiveSchoolId(null); }}
                                                    aria-label={`Close ${g.schoolName} details`}
                                                >
                                                    <Icon icon="solar:close-circle-line-duotone" className="w-5 h-5" />
                                                </button>
                                            )}

                                            <div className="flex flex-col gap-1 mb-3 pr-6">
                                                <div className="flex items-center gap-2">
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${g.level === 'D1' ? 'bg-gold/15 text-gold' : 'bg-navy/10 text-navy'}`}>
                                                        {g.level}
                                                    </span>
                                                    <span className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">{g.region}</span>
                                                </div>
                                                <h4 className="font-header text-navy text-xl font-bold leading-none tracking-tight">{g.schoolName}</h4>
                                            </div>

                                            <ul className="flex flex-col gap-2">
                                                {alumniAtSchool.map(a => (
                                                    <li key={a.name} className="flex items-center gap-2 text-slate-600 font-sans text-xs">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                                                        <span className="font-bold truncate" title={a.name}>{a.name}</span>
                                                        <span className="text-slate-400 italic shrink-0">({a.sport})</span>
                                                    </li>
                                                ))}
                                                {alumniAtSchool.length === 0 && (
                                                    <li className="text-slate-400 font-sans text-xs italic">Upcoming commitment unannounced</li>
                                                )}
                                            </ul>

                                            {/* Pointer Triangle */}
                                            <div className={`absolute bottom-[-6px] ${g.x > 80 ? 'right-[10%]' : g.x < 20 ? 'left-[10%]' : 'left-1/2'} transform -translate-x-1/2 w-4 h-4 bg-white border-b border-r ${isPinned ? 'border-navy/20' : 'border-slate-100'} rotate-45`}></div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Map Footer Legend */}
                        <div className="flex items-center gap-6 mt-4 md:absolute md:bottom-6 md:left-6 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100/50">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-gold shadow-sm"></div>
                                <span className="font-sans text-[10px] font-black text-slate-500 uppercase tracking-widest">Division I</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-navy shadow-sm"></div>
                                <span className="font-sans text-[10px] font-black text-slate-500 uppercase tracking-widest">JUCO</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Controls & Filtering Info */}
                    <div className="w-full md:w-[35%] xl:w-[30%] p-6 md:p-8 flex flex-col bg-white">

                        <div className="mb-6">
                            <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">
                                Filter by Region
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {REGIONS.map(region => (
                                    <button
                                        key={region}
                                        onClick={() => {
                                            setActiveRegion(region);
                                            // Optional: reset active school when navigating regions
                                            if (region !== 'All') setActiveSchoolId(null);
                                        }}
                                        className={`px-3.5 py-2 text-[10px] border rounded-md font-black uppercase tracking-widest transition-all focus:outline-none focus:ring-1 focus:ring-gold ${activeRegion === region ? 'bg-navy text-gold border-navy shadow-sm' : 'bg-slate-50 text-slate-500 border-slate-200 hover:border-gold hover:text-navy'}`}
                                    >
                                        {region}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-slate-100 pt-6 mb-8">
                            <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1.5">
                                Top Placed Conferences
                            </span>
                            <h4 className="font-sans font-black text-navy tracking-wide">
                                SEC &bull; Big Ten &bull; Big East &bull; CAA
                            </h4>
                        </div>

                        <div className="mb-auto">
                            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded border border-slate-100">
                                <Icon icon="solar:clock-circle-bold-duotone" className="w-4 h-4 text-gold/70" />
                                Updated: Feb 2026
                            </div>
                        </div>

                        {/* Interactive CTA */}
                        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center">
                            <button
                                onClick={() => {
                                    if (activeSchoolId) setActiveSchoolId(null);
                                    if (activeRegion !== 'All') setActiveRegion('All');
                                    scrollToPlacements();
                                }}
                                className="w-full flex items-center justify-between font-sans tracking-widest uppercase font-black text-[11px] text-navy bg-transparent hover:bg-slate-50 transition-colors px-5 py-4 border-2 border-slate-200 hover:border-gold rounded-xl group focus:outline-none focus:ring-2 focus:ring-gold"
                            >
                                Explore All Placements
                                <span className="w-7 h-7 bg-navy group-hover:bg-gold text-white rounded-full flex items-center justify-center transition-colors">
                                    <Icon icon="solar:arrow-right-line-bold" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </button>
                        </div>

                    </div >

                </div >
            </div >
        </section >
    );
};
