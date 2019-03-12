const optionsObj = {
    'Furniture': [
        { key: 'baruse', text: 'Barely Used', value: 'baruse' },
        { key: 'fixupp', text: 'Fixer-Upper', value: 'fixupp' },
        { key: 'refurbished', text: 'Refurbished', value: 'refurbished' },
        { key: 'used', text: 'Used', value: 'used' },
        { key: 'bathroom', text: 'Bathroom', value: 'bathroom' },
        { key: 'bedroom', text: 'Bedroom', value: 'Bedroom' },
        { key: 'entryway', text: 'Entryway', value: 'entryway' },
        { key: 'gamroolou', text: 'Game Room & Lounge', value: 'gamroolou' },
        { key: 'kidroo', text: 'Kid\'s Room', value: 'kidroo' },
        { key: 'kitdin', text: 'Kitchen & Dining', value: 'kitdin' },
        { key: 'living', text: 'Living', value: 'living' },
        { key: 'office', text: 'Office', value: 'office' },
        { key: 'organization', text: 'Organization', value: 'organization' },
        { key: 'patio', text: 'Patio', value: 'patio' },
        { key: 'teeroo', text: 'Teen\'s Room', value: 'teeroo' }
    ],
    'Auto-Parts': [
        { key: 'baruse', text: 'Barely Used', value: 'baruse' },
        { key: 'fixupp', text: 'Fixer-Upper', value: 'fixupp' },
        { key: 'refurbished', text: 'Refurbished', value: 'refurbished' },
        { key: 'used', text: 'Used', value: 'used' },
        { key: 'accbodwip', text: 'Accessories, Body, & Wipers', value: 'accbodwip' },
        { key: 'airfueemiexh', text: 'Air, Fuel, Emission, & Exhaust', value: 'airfueemiexh' },
        { key: 'batelewir', text: 'Battery, Electrical, & Wiring', value: 'batelewir' },
        { key: 'brastesus', text: 'Brakes, Steering, & Suspension', value: 'brastesus' },
        { key: 'coohea', text: 'Cooling & Heating', value: 'coohea' },
        { key: 'elenav', text: 'Electronics & Navigation', value: 'elenav' },
        { key: 'engign', text: 'Engines & Ignition', value: 'engign' },
        { key: 'tooflugar', text: 'Tools, Fluids, & Garage', value: 'tooflugar' },
        { key: 'tradri', text: 'Transmission & Drivetrain', value: 'tradri' }
    ],
    'Sporting': [
        { key: 'baruse', text: 'Barely Used', value: 'baruse' },
        { key: 'fixupp', text: 'Fixer-Upper', value: 'fixupp' },
        { key: 'refurbished', text: 'Refurbished', value: 'refurbished' },
        { key: 'used', text: 'Used', value: 'used' },
        { key: 'bassof', text: 'Baseball & Softball', value: 'bassof' },
        { key: 'basketball', text: 'Basketball', value: 'basketball' },
        { key: 'bikcyc', text: 'Biking & Cycling', value: 'bikcyc' },
        { key: 'bowling', text: 'Bowling', value: 'bowling' },
        { key: 'boxmma', text: 'Boxing & MMA', value: 'boxmma' },
        { key: 'camfisboa', text: 'Camping, Fishing, & Boating', value: 'camfisboa' },
        { key: 'chegym', text: 'Cheerleading & Gymnastics', value: 'chegym' },
        { key: 'cricket', text: 'Cricket', value: 'cricket' },
        { key: 'exefit', text: 'Exercise & Fitness', value: 'exefit' },
        { key: 'football', text: 'Football', value: 'football' },
        { key: 'golf', text: 'Golf', value: 'golf' },
        { key: 'hunsho', text: 'Hunting & Shooting', value: 'hunsho' },
        { key: 'icehocfie', text: 'Ice Skating, Hockey, & Field Hockey', value: 'icehocfie' },
        { key: 'kaypad', text: 'Kayak & Paddle', value: 'kaypad' },
        { key: 'lacrosse', text: 'Lacrosse', value: 'lacrosse' },
        { key: 'runtrafie', text: 'Running, Track, & Field', value: 'runtrafie' },
        { key: 'skasco', text: 'Skates & Scooters', value: 'skasco' },
        { key: 'soccer', text: 'Soccer', value: 'soccer' },
        { key: 'swiwatspo', text: 'Swimming & Water Sports', value: 'swiwatspo' },
        { key: 'tabtentenrachan', text: 'Table Tennis, Tennis, Racquet, & Handball', value: 'tabtentenrachan' },
        { key: 'volleyball', text: 'Volleyball', value: 'volleyball' },
        { key: 'welyogstu', text: 'Wellness, Yoga, & Studio', value: 'welyogstu' },
        { key: 'winspo', text: 'Winter Sports', value: 'winspo' },
        { key: 'wrestling', text: 'Wrestling', value: 'wrestling' },
    ],
    'Electronics': [
        { key: 'baruse', text: 'Barely Used', value: 'baruse' },
        { key: 'fixupp', text: 'Fixer-Upper', value: 'fixupp' },
        { key: 'refurbished', text: 'Refurbished', value: 'refurbished' },
        { key: 'used', text: 'Used', value: 'used' },
        { key: 'celpho', text: 'Cell Phones', value: 'celpho' },
        { key: 'computers', text: 'Computers', value: 'computers' },
        { key: 'ipatab', text: 'iPads & Tablets', value: 'ipatab' },
        { key: 'smahom', text: 'Smart Home', value: 'smahom' },
        { key: 'tvvid', text: 'TV & Video', value: 'tvvid' },
        { key: 'vidgam', text: 'Video Games', value: 'vidgam' },
        { key: 'weatec', text: 'Wearable Tech', value: 'weatec' },
    ],
    'Misc': [
        { key: 'baruse', text: 'Barely Used', value: 'baruse' },
        { key: 'fixupp', text: 'Fixer-Upper', value: 'fixupp' },
        { key: 'refurbished', text: 'Refurbished', value: 'refurbished' },
        { key: 'used', text: 'Used', value: 'used' },
    ],
    'Pick A Category': [
        { key: 'baruse', text: 'Barely Used', value: 'baruse' },
        { key: 'fixupp', text: 'Fixer-Upper', value: 'fixupp' },
        { key: 'refurbished', text: 'Refurbished', value: 'refurbished' },
        { key: 'used', text: 'Used', value: 'used' },
    ]
}

export default optionsObj