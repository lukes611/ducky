

window.onload = () => {
    const genWaveSvg = (w, h, inc = 0.5, f = 0.5, a = 4, fill = "#00c4cc") => {
        let wavePoints = [];
        for(let i = 0; i < w; i += inc){
            wavePoints.push({
                x : i,
                y : Math.sin(((i)*f))*a + h/2
            });
        }
        wavePoints = wavePoints.map(p => `${p.x},${p.y}`).join(' ');
        
        let s = `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
            <!--<rect x="0" y="0" width="${w}" height="${h}" fill="red" />-->
            <polygon x="0" y="0" fill=${fill} points="${wavePoints} ${w},${h} ${0},${h}" />
        </svg>`;
        return s;
    };
    const period = ((400/Math.PI)/2)/4;
    const Fr = 1 / period;
    document.getElementById('sea-1-wrapper').innerHTML = genWaveSvg(400,16, 0.001, Fr, 3);
};