var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: /*'YOUR MAPBOX TOKEN HERE'*/,
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Global Covid-19 Vaccine Apartheid',
    subtitle: 'Why have only 20% of people in impoverished nations received at least one dose? And what’s being done to change that?',
    byline: 'By Kenny Stancil',
    footer: 'Sources: Vaccination rates come courtesy of Our World in Data - see Mathieu, E., Ritchie, H., Ortiz-Ospina, E. et al. A global database of COVID-19 vaccinations. Nat Hum Behav (2021); Information about whether governments support or oppose the TRIPS waiver proposal supplied by Doctors Without Borders; Data on untapped vaccine production potential compiled by Human Rights Watch and the AccessIBSA project. National boundaries and country centroids provided by Natural Earth and Gavin Rehkemper, respectively.<p>Photos (in descending order): MORE<p>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'introduction',
            alignment: 'center',
            hidden: false,
            title: 'Introduction',
            image: '',
            description: 'Comparing Covid-19 vaccination rates around the world over time reveals glaring and persistent gaps in access to lifesaving shots amid a pandemic that has caused more than 15 million deaths. While high-income countries discard doses, billions of people in low-income countries remain completely unprotected.<p>This injustice, which public health advocates have labeled "vaccine apartheid," is deadly. New research estimates that in 2021, the first year of the vaccine rollout, jabs saved roughly 20 million lives. However, hundreds of thousands of additional deaths could have been avoided—and many more can still be prevented—with greater vaccine equity.<p>Epidemiologists have consistently warned that the longer SARS-CoV-2 circulates and mutates, the greater the chances a vaccine-resistant variant emerges, making the swift and adequate inoculation of the global population an urgent necessity to protect the well-being of people everywhere.<p>Just how unequal has vaccine access been? Keep scrolling to find out.',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1.0,
                    0.7
                  ]
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'reasons',
            alignment: 'left',
            hidden: false,
            title: 'Why has immunization against Covid-19 been so uneven?',
            image: '',
            description: 'There are two key sources of vaccine inequality.<p>1) Inequitable distribution, or dose hoarding by wealthy nations: Rich governments quickly purchased far more shots than could possibly be administered to their own populations. As a result of this vaccine nationalism, millions of doses have expired and ended up in the trash.<p>2) Inefficient production, or knowledge hoarding by pharmaceutical corporations: Pharma giants have refused to share vaccine formulas and production blueprints with generic drugmakers. Big Pharma’s monopoly power over publicly funded tech and know-how has led to artificial scarcity, price-gouging, and attendant record-breaking profits—prolonging needless suffering while turning several executives into billionaires.',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
/*
              {
                  layer: 'vaccination_rates',
                  opacity: [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1.0,
                    0.7
                  ]
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              }
*/
            ],
            onChapterExit: [
/*
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              }
*/
            ]
        },
        {
            id: 'efforts',
            alignment: 'left',
            hidden: false,
            title: 'What is being done to combat vaccine inequality?',
            image: './images/free-the-vaccine-big-pharma-covid19-monopolies.jpg',
            description: 'Efforts to increase access to vaccines have primarily revolved around two distinct approaches.<p>1) Distribution angle: COVAX, the United Nations-backed public-private partnership to encourage vaccine donations to poor governments, has fallen far short of its own targets, leading critics to declare the charity model a failure.<p>2) Production angle: A campaign to compel the World Trade Organization (WTO) to temporarily remove intellectual property (IP) barriers was recently defeated by a handful of rich governments, but several other initiatives are underway at the World Health Organization (WHO) and at national and cross-national levels to share vaccine formulas, transfer technology, and increase generic manufacturing.',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'tripsintro',
            alignment: 'right',
            hidden: false,
            title: 'A) TRIPS waiver: India and South Africa unveil potentially game-changing proposal',
            image: '',
            description: 'On October 2, 2020, India and South Africa introduced a motion at the WTO to suspend coronavirus-related patents and other IP barriers for the duration of the pandemic, which would enable generic drugmakers to expand the global supply of vaccines, tests, and treatments without fear of legal retribution.',
            location: {
                center: [40.38602, -18.53467],
                zoom: 3.25,
                pitch: 0,
                bearing: -21.3
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'support_trips_waiver',
                  opacity: 0
              }
            ],
            onChapterExit: [],
        },
        {
            id: 'tripsmap1',
            alignment: 'right',
            hidden: false,
            title: 'A) TRIPS waiver: Despite widespread support, the proposal meets stiff resistance',
            image: '',
            description: 'More than 100 nations, including the vast majority of the Global South, endorsed the proposal to temporarily waive the WTO’s corporate-friendly Trade-Related Aspects of Intellectual Property Rights (TRIPS) Agreement. Trreating medical tools designed to defeat Covid-19 as global public goods was also the preference of a majority of voters in high-income countries, according to polls.<p>However, a handful of Big Pharma-aligned policymakers—most of them from highly vaccinated parts of Europe—spent nearly 21 months stonewalling the popular measure, which needed unanimous support from the WTO’s 164 members to pass.<p>During that time, the global death toll soared by more than 12 million. Excess mortality—an estimate of the difference in the number of deaths that occur amid a crisis compared with what would have been expected under “normal” conditions—during the coronavirus pandemic has been four times higher in poorer countries than rich ones.<p>“Millions have died while the governments of rich countries have been bickering over monopoly rights for Covid-19 vaccines,” Nick Dearden, the director of Global Justice Now, said in July 2021. “Every one of those deaths is a mark of shame for the governments of countries like the U.K. and Germany who have protected patents over human lives.”<p>INSERT KEY HERE',
            location: {
                center: [10.55606, 35.19720],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'vaccination_rates',
                  opacity: [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    1.0,
                    0.7
                  ]
              },
              {
                  layer: 'support_trips_waiver',
                  opacity: 1
              }
            ],
            onChapterExit: [],
        }
    ]
};
