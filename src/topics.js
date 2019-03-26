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
        'refraction': 'refraction'
    },
    'topics': {
        'sofar': {
            description: 'The SOFAR channel is a region that sound can move through in deep oceans. \nIt stands for Sound Fixing and Ranging channel.\nThis is a fancy way of saying that it\'s a layer in the ocean which sound can get trapped in, allowing it to travel over great distances.\nThis happens because refraction means that sound waves are always bent back towards the layer where the speed of sound is slowest.',
            unlocked: false,
            unlocks: ['whale song', 'shipping noise', 'tracking submarines', 'refraction']
        },
        'sound': {
            description: 'Sound is all around us, even in places we might not expect.\r\nPhysicists define it as a series of variations in pressure which are picked up by our ears as waves.\r\nIn our daily lives, we usually only hear sounds which move through the air, but we can have sound which moves through any substance, with very different properties.',
            unlocked: true,
            unlocks: ['ocean sound', 'waves']
        },
        'ocean sound': {
            description: 'Underwater sound is a little different to that which we usually experience.\nThe major difference is that the sound moves through water, which allows it to move much faster and without getting much quieter over long distances, because water is much denser than air.\n',
            unlocked: false,
            unlocks: ['speed of sound']
        },
        'waves': {
            description: 'There are many different types of wave.\nAs Physicists, we care about two types: longitudinal (lengthways) and transverse (crossways).\n',
            unlocked: false,
            unlocks: ['speed of sound']
        },
        'refraction': {
            description: '',
            unlocked: false,
            unlocks: ['sofar']
        },
        'whale song': {
            description: '',
            unlocked: false,
            unlocks: ['sofar']
        },
        'shipping noise': {
            description: '',
            unlocked: false,
            unlocks: ['sofar']
        },
        'tracking submarines': {
            description: '',
            unlocked: false,
            unlocks: ['sofar']
        },
        'speed of sound': {
            description: '',
            unlocked: false,
            unlocks: ['refraction']
        }
    }
};