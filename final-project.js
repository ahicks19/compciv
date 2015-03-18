$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Total Snowfall in Tahoe City, CA by Year'
        },
        subtitle: {
            text: 'Source: NOAA'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Snowfall (inches)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Total Snowfall: <b>{point.y:.1f} inches</b>'
        },
        series: [{
            name: 'Population',
            data: [
                ['1964', 320.5],
                ['1965', 233.6],
                ['1966', 133.3],
                ['1967', 361.4],
                ['1968', 232.0],
                ['1969', 234.0],
                ['1970', 219.5],
                ['1971', 175.4],
                ['1972', 138.9],
                ['1973', 183.5],
                ['1974', 136.8],
                ['1975', 221.5],
                ['1976', 63.0],
                ['1977', 105.3],
                ['1978', 175.6],
                ['1979', 183.4],
                ['1980', 143.0],
                ['1981', 115.9],
                ['1982', 280.7],
                ['1983', 232.8],
                ['1984', 141.8],
                ['1985', 188.9],
                ['1986', 114.0],
                ['1987', 93.8],
                ['1988', 135.5],
                ['1989', 133.8],
                ['1990', 120.9],
                ['1991', 87.5],
                ['1992', 137.5],
                ['1993', 135.0],
                ['1994', 112.0],
                ['1995', 246.0],
                ['1996', 321.5],
                ['1997', 120.5],
                ['1998', 260.9],
                ['1999', 232.0],
                ['2000', 155.5],
                ['2001', 202.4],
                ['2002', 193.1],
                ['2003', 172.0],
                ['2004', 208.7],
                ['2005', 187.1],
                ['2006', 208.4],
                ['2007', 124.6],
                ['2008', 212.5],
                ['2009', 158.0],
                ['2010', 228.7],
                ['2011', 218.0],
                ['2012', 185.1],
                ['2013', 41.5],
                ['2014', 46.0],       
                
                
            ],
            dataLabels: {
                enabled: false,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
});
