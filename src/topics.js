export default {
    'keys': {
        'the sofar channel': 'sofar',
        'sofar channel': 'sofar',
        'sofar': 'sofar',
        'sound': 'sound',
        'ocean sound': 'ocean sound',
        'waves': 'waves'
    },
    'topics': {
        'sofar': {
            description: 'The SOFAR channel is a region that sound can move through deep oceans. It stands for SOund Fixing And Ranging channel. This is a fancy way of saying that it\'s a layer in the ocean which sound can get trapped in, allowing it to travel over great distances.',
            unlocked: false,
            unlocks: []
        },
        'sound': {
            description: 'Sound is all around us, even in places we might not expect.\r\nPhysicists define it as a series of variations in pressure which are picked up by our ears as waves.\r\nIn our daily lives, we usually only hear sounds which move through the air, but we can have sound which moves through any substance, with very different properties.',
            unlocked: true,
            unlocks: ['ocean sound', 'waves']
        },
        'ocean sound': {
            description: 'Underwater sound is a little different to that which we usually experience.\n',
            unlocked: false,
            unlocks: ['whale song', 'shipping noise', 'tracking submarines']
        },
        'waves': {
            description: '',
            unlocked: false,
            unlocks: []
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
        }
    }
};