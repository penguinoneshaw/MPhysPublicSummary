export default {
    'keys': {
        'the sofar channel': 'sofar',
        'sofar channel': 'sofar',
        'sofar': 'sofar',
        'sound': 'sound',
        'ocean sound': 'ocean sound',
        'waves': 'waves',
        'whale song': 'whale song',
        'shipping noise': 'shipping noise',
        'tracking submarines': 'tracking submarines',
        'speed of sound': 'speed of sound',
        'refraction': 'refraction',
        'density': 'density'
    },
    'topics': {
        'sofar': {
            description: 'The SOFAR channel is a region that sound can move through in deep oceans. \nIt stands for Sound Fixing and Ranging channel.\nThis is a fancy way of saying that it\'s a layer in the ocean which sound can get trapped in, allowing the waves to travel thousands of kilometers without escaping!\nThis happens because refraction means that sound waves are always bent back towards the layer where the speed of sound is slowest, which in most oceans is about 1 km below the surface.\n\nThe SOFAR channel is used by everything from whales to militaries to communicate and for tracking.',
            unlocked: false,
            unlocks: ['whale song',  'tracking submarines', 'refraction']
        },
        'sound': {
            description: 'Sound is all around us, even in places we might not expect.\r\nPhysicists define it as a series of variations in pressure as a result of vibration which are picked up by our ears as waves.\r\nIn our daily lives, we usually only hear sounds which move through the air, but we can have sound which moves through any substance, with very different properties.',
            unlocked: true,
            unlocks: ['ocean sound', 'waves']
        },
        'ocean sound': {
            description: 'Underwater sound is a little different to that which we usually experience.\nThe major difference is that the sound moves through water, which allows it to move much faster and without getting much quieter over long distances, because water is much better at keeping a sound wave travelling.\nSound-based communication is common among many types of sea creatures because sight-based communication becomes more difficult in the low light which reaches into the deep ocean.',
            unlocked: false,
            unlocks: ['speed of sound', 'shipping noise']
        },
        'waves': {
            description: 'Waves are how we describe motion in repeating patterns of variation.\nThere are two different types of wave, longitudinal (lengthways) and transverse (crossways) which appear in all areas of the world around us.\nSound is a longitudinal wave, meaning that it is the result of particles moving closer and further away from one another in the direction of travel.\nA wave will also always have a speed, which is how fast it is moving as a whole.',
            unlocked: false,
            unlocks: ['speed of sound']
        },
        'refraction': {
            description: 'Refraction is the process by which a wave bends because of changes in the material.\nWe can see a version of this in the bending of light through a glass of water.\nA wave will always bend towards the material with the lower wave speed.',
            unlocked: false,
            unlocks: ['sofar']
        },
        'whale song': {
            description: 'Because of the depth of the SOFAR channel, only very few animals are able to dive deep enough to use it to communicate.\nAs a result, it is very quiet except for the \'song\' of some whales.\nThey dive down and make long, low pitched sounds which can be detected extremely long distances away by other members of their group.\nThis is crucial for them to find one another, and for other functions such as group hunting.\n\nTo listen to some of these sounds, try visiting https://dosits.org/galleries/audio-gallery/marine-mammals/ which has many different recordings.',
            unlocked: false,
            unlocks: ['sofar']
        },
        'shipping noise': {
            description: 'Imagine trying to speak to someone with a jet plane taking off directly overhead.\nThis is how loud the background noise is in the surface layers of some oceans as a result of large ships.\nAnimals must find a way to differentiate their communications from this noise in order to form communities.\nStudies have also shown that this background noise is getting gradually louder, which presents a significant future challenge for the ecosystem.',
            unlocked: false,
            unlocks: []
        },
        'tracking submarines': {
            description: 'One of the reasons the SOFAR channel has been studied is for its military applications.\nBecause of how good the SOFAR channel is at transmitting sound, it is possible to locate sound-producing objects using triangulation.\nThis includes intentionally detonating explosives to signal that a plane has crashed, and trying to find an enemy submarines hiding underwater.\nThe US Navy has hydrophones (underwater microphones) in the channel so that they can listen in for this purpose.',
            unlocked: false,
            unlocks: ['sofar']
        },
        'speed of sound': {
            description: 'The speed of sound in a material is given by its density.\nIt measures how fast the wave is moving as a whole: a similar idea is the speed of light in a vacuum.\nIn sea water, there are three factors which determine the density, and by extension the speed of sound:\n - the temperature of the water\n - the pressure of the water, which increases as you go deeper into an ocean\n - the salinity of the water (how salty the water is).',
            unlocked: false,
            unlocks: ['refraction', 'density']
        },
        'density': {
            description: 'Density measures how close together the molecules are.\nGenerally, solids are denser than liquids, and liquids are denser than gases.\nConsequently, the speed of sound in air is much slower than that in water!',
            unlocked: false,
            unlocks: []
        },
    }
};